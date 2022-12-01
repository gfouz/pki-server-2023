import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";

export const getEmpresasInstituciones = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.EmpresasInstituciones.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getEmpresasInstitucionesByMunByOrg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const municipioId = parseInt(req.params.id);
    const organismoId = parseInt(req.params.id2);
    if (municipioId == 0 && organismoId != 0) {
      const result: QueryResult = await db.EmpresasInstituciones.findAll({
        where: {
          organismoId: organismoId,
        },
      });
      return res.status(200).json({ result, message: "gotten-by-another" });
    }
    if (organismoId == 0 && municipioId != 0) {
      const result: QueryResult = await db.EmpresasInstituciones.findAll({
        where: {
          municipioId: municipioId,
        },
      });
      return res.status(200).json({ result, message: "gotten-by-another" });
    }
    if (organismoId == 0 && municipioId == 0) {
      const result: QueryResult = await db.EmpresasInstituciones.findAll();
      return res.status(200).json({ result, message: "gotten-by-another" });
    }
    const result: QueryResult = await db.EmpresasInstituciones.findAll({
      where: {
        municipioId: municipioId,
        organismoId: organismoId,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const getEmpresasInstitucionesEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.EmpresasInstituciones.findAll({
      where: {
        enabled: req.params.enabled,
      },
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getEmpresasInstitucionesByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.EmpresasInstituciones.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getEmpresaInstitucionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.EmpresasInstituciones.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createEmpresaInstitucion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.body.name;
    const municipioId: number = parseInt(req.body.municipioId);
    const organismoId: number = parseInt(req.body.organismoId);
    await db.EmpresasInstituciones.create({
      name: name.trim(),
      enabled: true,
      municipioId: municipioId,
      organismoId: organismoId,
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateEmpresaInstitucion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const name: string = req.body.name;
    const enabled = req.body.enabled;
    const municipioId: number = parseInt(req.body.municipioId);
    const organismoId: number = parseInt(req.body.organismoId);
    await db.EmpresasInstituciones.update(
      {
        name: name.trim(),
        enabled: enabled,
        municipioId: municipioId,
        organismoId: organismoId,
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
