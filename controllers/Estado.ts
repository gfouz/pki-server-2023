import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";

export const getEstados = async (req: Request, res: Response, next: any) => {
  try {
    const result: QueryResult = await db.Estados.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getEstadosEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enabled = req.params.enabled;
    const result: QueryResult = await db.Estados.findAll({
      where: {
        enabled: enabled,
      },
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getEstadosByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Estados.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getEstadoById = async (req: Request, res: Response, next: any) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Estados.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createEstado = async (req: Request, res: Response, next: any) => {
  try {
    const name: string = req.body.name;
    await db.Estados.create({ name: name.trim(), enabled: true });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateEstado = async (req: Request, res: Response, next: any) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const enabled = req.body.enabled;
    await db.Estados.update(
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
