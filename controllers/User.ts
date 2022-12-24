import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../privateToken";
import { IUser, IFn, IRol } from "./types";

let count: number = 0;
const counter = () => {
  count = count + 1;
  if (count >= 5) {
    const timer = setTimeout(() => {
      count = 0;
    }, 10000);
    if (count === 0) {
      return () => clearTimeout(timer);
    }
  }
};

export const getUsers = async (req: Request, res: Response, next: any) => {
  try {
    const users: IUser[] = await db.Users.findAll({
      raw: true,
      attributes: ["id", "name", "email", "enabled", "rolId"],
    });
    const fns: IFn[] = await db.Funcionalidades.findAll({ raw: true });
    const rols: IRol[] = await db.Rols.findAll({ raw: true });

    const result = users?.map((user: { rolId: number }) => {
      let rol: IRol | undefined = rols?.find(
        (rol: { id: number }) => rol?.id === user?.rolId
      );
      let functs: IFn[] = fns?.filter(
        (fn: { rolId: number }) => fn?.rolId === user?.rolId
      );
      if (users) {
        return { ...user, rol: rol?.name, funct: functs };
      } else {
        return { ...user };
      }
    });
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getUsersByRol = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params;

    const users: IUser[] = await db.Users.findAll({
      raw: true,
      attributes: ["id", "name", "email", "enabled", "rolId"],
      where: {
        rolId: parseInt(id),
      },
    });
    const fns: IFn[] = await db.Funcionalidades.findAll();
    const rols: IRol[] = await db.Rols.findAll();

    const result = users?.map((user: { rolId: number }) => {
      let rol: IRol | undefined = rols?.find(
        (rol: { id: number }) => rol?.id === user?.rolId
      );
      let functs: IFn[] = fns?.filter(
        (fn: { rolId: number }) => fn?.rolId === user?.rolId
      );
      if (users) {
        return { ...user, rol: rol?.name, funct: functs };
      } else {
        return { ...user };
      }
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (error) {}
};

export const getUsersEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: IUser[] = await db.Users.findAll({
      raw: true,
      attributes: ["id", "name", "email", "enabled", "rolId"],
      where: {
        enabled: req.params.enabled,
      },
    });
    const fns: IFn[] = await db.Funcionalidades.findAll({ raw: true });
    const rols: IRol[] = await db.Rols.findAll({ raw: true });

    const result = users?.map((user: { rolId: number }) => {
      let rol: IRol | undefined = rols?.find(
        (rol: { id: number }) => rol?.id === user?.rolId
      );
      let functs: IFn[] = fns?.filter(
        (fn: { rolId: number }) => fn?.rolId === user?.rolId
      );
      if (users) {
        return { ...user, rol: rol?.name, funct: functs };
      } else {
        return { ...user };
      }
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getUsersByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email: string = req.params.email;
    const result: QueryResult = await db.Users.findAll({
      attributes: ["id", "email", "enabled", "rolId"],
      where: {
        email: { [Op.iLike]: `%${email.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-email" });
  } catch (ex) {
    next(ex);
  }
};

export const getUserById = async (req: Request, res: Response, next: any) => {
  try {
    const result: QueryResult = await db.Users.findOne({
      attributes: ["id", "email", "enabled", "rolId"],
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createUser = async (req: Request, res: Response, next: any) => {
  try {
    const name: string = req.body.name;
    const email: string = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const rolId: number = parseInt(req.body.rolId);
    await db.Users.create({
      name: name,
      email: email.trim(),
      password: hashedPassword,
      enabled: true,
      rolId: rolId,
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateUser = async (req: Request, res: Response, next: any) => {
  try {
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;
    const email: string = req.body.email;
    const enabled: boolean = req.body.enabled;
    const rolId: number = parseInt(req.body.rolId);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const response: QueryResult = await db.Users.update(
      {
        name: name,
        email: email.trim(),
        password: hashedPassword,
        enabled: enabled,
        rolId: rolId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({ message: "updated" });
  } catch (ex) {
    next(ex);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    if (count) {
      console.log(`this is count: ${count}`);
    }
    const email: string = req.body.email;
    const password: string = req.body.password;

    let user = await db.Users.findOne({
      where: {
        email: email,
      },
    });
    const isPassword = await bcrypt.compare(password, user.password);
    if (email !== user.email) {
      return res.status(204).json({ message: "datos-incorrectos" });
    }
    if (email === undefined || email === null) {
      return res.status(204).json({ message: "Faltan datos!" });
    }
    if (!isPassword) {
      counter();
    }

    if (!isPassword && count < 5) {
      return res.status(206).json({ message: "datos-incorrectos" });
    }
    if (!isPassword && count >= 5) {
      return res.status(200).json({ message: "intente-más-tarde" });
    }

    if (
      user &&
      (await bcrypt.compare(password, user.password)) &&
      user.enabled
    ) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res
        .status(202)
        .json({ signature: token, message: "autorizado", user });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
