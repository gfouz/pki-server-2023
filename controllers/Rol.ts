import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
import { IFn, IRol } from "./types";

export const getRols = async (req: Request, res: Response, next: any) => {
  try {
    const rols: IRol[] = await db.Rols.findAll({ raw: true });
    const functionalities: IFn[] = await db.Funcionalidades.findAll({
      raw: true,
    });
    const result = rols?.map((rol: { id: number }) => {
      let fns: IFn[] = functionalities?.filter(
        (fn: { rolId: number }) => fn?.rolId === rol?.id
      );
      if (rols) {
        return { ...rol, funct: [...fns] };
      } else {
        return { ...rol };
      }
    });
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getRolsEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enabled = req.params.enabled;
    const rols: IRol[] = await db.Rols.findAll({
      raw: true,
      where: {
        enabled: enabled,
      },
    });
    const functionalities: IFn[] = await db.Funcionalidades.findAll({
      raw: true,
    });
    const result = rols?.map((rol: { id: number }) => {
      let fns = functionalities?.filter(
        (fn: { rolId: number }) => fn?.rolId === rol?.id
      );
      if (rols) {
        return { ...rol, funct: [...fns] };
      } else {
        return { ...rol };
      }
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getRolsByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Rols.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getRolById = async (req: Request, res: Response, next: any) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Rols.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const getRolsByFuncionalidad = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.RolsFuncionalidades.findAll({
      where: {
        funcionalidadId: id,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const createRol = async (req: Request, res: Response, next: any) => {
  try {
    const name: string = req.body.name;
    await db.Rols.create({ name: name.trim(), enabled: true });
    const rol = await db.Rols.findOne({
      where: {
        name: name,
      },
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateRol = async (req: Request, res: Response, next: any) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const enabled = req.body.enabled;
    await db.Rols.update(
      { name: name.trim(), enabled: enabled },
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
