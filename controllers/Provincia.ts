//@ts-nocheck
import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";

export const getProvincias = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Provincias.findAll({
      include: [db.Municipios],
    });
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getProvinciasEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Provincias.findAll({
    
      include: [{model: db.Municipios}],
      where: {
        enabled: req.params.enabled,
      },
    });
    
    //const json = JSON.stringify(resp, null, 2);
    //const result = JSON.parse(json);
    //console.log(req.headers)

    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getProvinciasByName = async (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Provincias.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getProvinciaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Provincias.findByPk(
      parseInt(req.params.id)
    );
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createProvincia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.body.name;
    await db.Provincias.create({ name: name.trim(), enabled: true });
    return res.status(200).json({ message: "created" });
  } catch (error) {
    console.log(error);
  }
};

export const updateProvincia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const enabled = req.body.enabled;
    await db.Provincias.update(
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
