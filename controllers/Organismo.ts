import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";

export const getOrganismos = async (req: Request, res: Response, next: any) => {
  try {
    const result: QueryResult = await db.Organismos.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getOrganismosEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const municipioId = parseInt(req.params.id);
    const enabled = req.params.enabled;
    const result: QueryResult = await db.Organismos.findAll({
      include: [db.EmpresasInstituciones],
      where: {
        enabled: enabled,
      },
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getOrganismosByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Organismos.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getOrganismoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Organismos.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createOrganismo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const name: string = req.body.name;
    const { count } = await db.Organismos.findAndCountAll({ where: { name: name} });
    if ( count < 1 ) {
      await db.Organismos.create({ name: name.trim(), enabled: true });
    }else {
      return res.status(200).json({ message: "Ese Organismo ya existe!" });
    }
    return res.status(200).json({ message: "created" });
  } catch (error) {
     console.log(error)
  }
};

export const updateOrganismo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {


  try {
  
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;
    const enabled: boolean = req.body.enabled;
    await db.Organismos.update(
      { name: name.trim(), enabled: enabled },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({ message: "updated" });
  } catch (error) {
     console.log(error);
  }
};
