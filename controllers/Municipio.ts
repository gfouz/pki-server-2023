import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";

export const getMunicipios = async (req: Request, res: Response, next: any) => {
  try {
    const resp: QueryResult = await db.Municipios.findAll();
    const json = JSON.stringify(resp, null, 2);
    const result = JSON.parse(json);
    console.log(result);
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getMunicipiosByProvincia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const provinciaId = parseInt(req.params.id);
    const result: QueryResult = await db.Municipios.findAll({
      where: {
        provinciaId: provinciaId,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const getMunicipiosEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp: QueryResult = await db.Municipios.findAll({
      include: [db.Provincias, db.EntidadesRegistro],
      where: {
        enabled: req.params.enabled,
      },
    });
    const json = JSON.stringify(resp, null, 2);
    const result = JSON.parse(json);
    console.log(result)
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getMunicipiosByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Municipios.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getMunicipioById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Municipios.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createMunicipio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.body.name;
    const provinciaId: number = parseInt(req.body.provinciaId);
    await db.Municipios.create({
      name: name.trim(),
      enabled: true,
      provinciaId: provinciaId,
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateMunicipio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const enabled = req.body.enabled;
    const provinciaId: number = parseInt(req.body.provinciaId);
    await db.Municipios.update(
      { name: name.trim(), enabled: enabled, provinciaId: provinciaId },
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
