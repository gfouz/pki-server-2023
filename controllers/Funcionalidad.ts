import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
interface FuncionalidadAttributes {
  id: number;
  name: string;
  enabled: boolean;
}

export const getFuncionalidades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Funcionalidades.findAll({ include: [db.Rols]});
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionalidadesEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enabled = req.params.enabled;
    const result: QueryResult = await db.Funcionalidades.findAll({
      include: [db.Rols],
      where: {
        enabled: enabled,
      },
    });
    console.log(JSON.stringify(result, null, 2 ))
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionalidadesByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Funcionalidades.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionalidadById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Funcionalidades.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionalidadesByRol = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.RolsFuncionalidades.findAll({
      where: {
        rolId: id,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const updateFuncionalidad = async ( req: Request, res: Response ) => {
  try {
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;
    const path: string = req.body.path;
    const enabled: boolean = req.body.enabled;
    const rolId: number = parseInt(req.body.rolId);
    await db.Funcionalidades.update(
      { name: name.trim(), path:path, enabled: enabled, RolId: rolId },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({ message: "updated" });
  } catch (error) {
     //console.log(error);
  }
};


export const createFuncionalidad = async ( req: Request, res: Response) => {
  try {
    
    const name: string = req.body.name;
    const path: string = req.body.path;
    const rolId: number = parseInt(req.body.rolId);
    await db.Funcionalidades.create({
      name: name.trim(),
      path: path,
      enabled: true,
      RolId: rolId,
    });
    return res.status(200).json({ message: "created" });
  } catch (error) {
    console.log(error);
  }
};

const createRolFuncionalidad = async (rolId: number, funcionalidad: string) => {
  const funcionalidadId: number = parseInt(funcionalidad);
  if (funcionalidadId) {
    await db.RolsFuncionalidades.create({
      RolId: rolId,
      FuncionalidadId: funcionalidadId,
    });
  }
};
