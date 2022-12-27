import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";

export const getEntidadesRegistro = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.EntidadesRegistro.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getEntidadesRegistroByMun = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const municipioId = parseInt(req.params.id);
    const result: QueryResult = await db.EntidadesRegistro.findAll({
      where: {
        MunicipioId: municipioId,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const getEntidadesRegistroEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.EntidadesRegistro.findAll({
      where: {
        enabled: req.params.enabled,
      },
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getEntidadesRegistroByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.EntidadesRegistro.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getEntidadesRegistroById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.EntidadesRegistro.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createEntidadRegistro = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.body.name;
    const address: string = req.body.address;
    const municipioId: number = parseInt(req.body.municipioId);
    await db.EntidadesRegistro.create({
      name: name.trim(),
      address: address.trim(),
      enabled: true,
      MunicipioId: municipioId,
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateEntidadRegistro = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const address: string = req.body.address;
    const enabled = req.body.enabled;
    const municipioId: number = parseInt(req.body.municipioId);
    await db.EntidadesRegistro.update(
      {
        name: name.trim(),
        address: address.trim(),
        enabled: enabled,
        MunicipioId: municipioId,
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
