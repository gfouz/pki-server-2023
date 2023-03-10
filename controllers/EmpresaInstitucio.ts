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
    if(municipioId === 0) return res.status(200).json({ message: "Debe seleccionar un municipio!" });
    const result: QueryResult = await db.EmpresasInstituciones.findAll({
      include: [db.Organismos, db.Municipios],
      where: {
        MunicipioId: municipioId,
      },
    });
  
    return res.status(200).json({ result, message: "realizado!" });
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
      include: [db.Municipios, db.Organismos],
      where: {
        enabled: req.params.enabled,
      },
    });
    console.log( JSON.stringify(result, null, 2) );
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
    const { count } = await db.EmpresasInstituciones.findAndCountAll({ where: { name: name} });
    if ( count < 1 ) {
    await db.EmpresasInstituciones.create({
      name: name.trim(),
      enabled: true,
      MunicipioId: municipioId,
      OrganismoId: organismoId,
    });
  }else {
    return res.status(200).json({ message: "Esa instituci??n ya existe!" });
  }
    return res.status(200).json({ message: "creado" });
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

    console.log(req.body)

    await db.EmpresasInstituciones.update(
      {
        name: name,
        enabled: enabled,
        MunicipioId: municipioId,
        OrganismoId: organismoId,
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
