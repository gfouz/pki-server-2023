import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../privateToken";

export const getUsers = async (req: Request, res: Response, next: any) => {
  try {
    const result: QueryResult = await db.Users.findAll({
      attributes: ["id", "name", "email", "enabled", "rolId"],
    });
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getUsersByRol = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params ;

    const result: QueryResult = await db.Users.findAll({
      attributes: ["id", "name", "email", "enabled", "rolId"],
      where: {
        rolId: parseInt(id),
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
         
  } catch (error) {

  }
};

export const getUsersEnabled = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const result: QueryResult = await db.Users.findAll({
      attributes: ["id", "name", "email", "enabled", "rolId"],
      where: {
        enabled: req.params.enabled,
      },
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
    const hashedPassword = await brcypt.hash(req.body.password, 10);
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
    const hashedPassword = await brcypt.hash(req.body.password, 10);
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

export const loginUser = async (req: Request, res: Response, next: any) => {
  try {
    const email: string = req.body.email;
    const password: string = req.body.password;
    let user = await db.Users.findOne({
      where: {
        email: email,
      },
    });
    
    // delete user.dataValues.password; this is a trouble.

    const token = jwt.sign(
      {
        email: user.email,
      },
      TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(202).json({ signature: token, message: "accepted" });
  } catch (ex) {
    next(ex);
  }
};
