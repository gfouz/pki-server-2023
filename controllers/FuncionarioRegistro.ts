import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
import { IFReg, IUser, IEReg } from './types';


export const getFuncionariosRegistro = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.FuncionariosRegistro.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionariosRegistroByER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const erId = parseInt(req.params.id);
    const result: QueryResult = await db.FuncionariosRegistro.findAll({
      where: {
        erId: erId,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionariosRegistroEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.FuncionariosRegistro.findAll({
      include: [db.Users, db.EntidadesRegistro],
      where: {
        enabled: req.params.enabled,
      },
    });
    console.log(JSON.stringify(result));
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionariosRegistroByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.FuncionariosRegistro.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getFuncionarioRegistroById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.FuncionariosRegistro.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createFuncionarioRegistro = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.body.name;
    const phone = req.body.phone;
    const erId: number = parseInt(req.body.erId);
    const userId: string = req.body.userId;
    await db.FuncionariosRegistro.create({
      name: name.trim(),
      phone: phone.trim(),
      enabled: true,
      EntidadesRegistroId: erId,
      UserId: userId,
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateFuncionarioRegistro = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const phone = req.body.phone;
    const enabled = req.body.enabled;
    const EntidadesRegistroId: number = parseInt(req.body.erId);
    const UserId: string = req.body.userId;
    await db.FuncionariosRegistro.update(
      {
        name: name.trim(),
        phone: phone.trim(),
        enabled: enabled,
        EntidadesRegistroId: EntidadesRegistroId,
        UserId: UserId,
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
