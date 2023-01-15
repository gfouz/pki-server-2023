import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
import fs from "fs";
import { IEmpInst, IRepresentante, IUser } from "./types";



export const getRepresentantes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Representantes.findAll(
      { 
        include: [db.EmpresasInstituciones], 
      });
    
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getRepresentantesByEmpInst = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const eiId = parseInt(req.params.id);
    const result: QueryResult = await db.Representantes.findAll({
      where: {
        EmpresasInstitucioneId: eiId,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const getRepresentantesEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Representantes.findAll({
      include: [ {model: db.EmpresasInstituciones, include:[db.Municipios]}, db.Users],
      where: {
        enabled: req.params.enabled,
      },
    });
    //console.log(JSON.stringify(result, null, 2));
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getRepresentantesByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.params.name;
    const result: QueryResult = await db.Representantes.findAll({
      where: {
        name: { [Op.iLike]: `%${name.trim()}%` },
      },
    });
    return res.status(200).json({ result, message: "gotten-by-name" });
  } catch (ex) {
    next(ex);
  }
};

export const getRepresentanteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Representantes.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createRepresentante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const ci: number = parseInt(req.body.ci);
    const tome: number = parseInt(req.body.tome);
    const folio: number = parseInt(req.body.folio);
    const name: string = req.body.name;
    const phone: string = req.body.phone;
    const namer: string = req.body.namer;
    const namerCharge: string = req.body.namerCharge;
    const eiId: number = parseInt(req.body.eiId);
    const userId: string = req.body.userId;

    
    
  const obj = req?.file;

  if(req?.file) {
      return res.status(200).json({ message: "documento-guardado" });
    }
   /* if( req?.file === undefined || req?.file === null ) {
      return res.status(200).json({ message: "Petición vacia" });
    }*/
    /*const { count } = await db.Representantes.findAndCountAll();
    if( count > 0 ) return res.status(200).json({ message: "Ese nombre ya existe" });*/

    await db.Representantes.create({
      ci: ci,
      tome: tome,
      folio: folio,
      name: name,
      phone: phone,
      namer: namer,
      namerCharge: namerCharge,
      enabled: true,
      EmpresasInstitucioneId: eiId,
      UserId: userId,
    });
    return res.status(200).json({ message: "creado" });
  } catch (error: any) {
      console.log(error)
  }
};

export const updateRepresentante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try { 

    const id: number = parseInt(req.params.id);
    const ci: number = parseInt(req.body.ci);
    const tome: number = parseInt(req.body.tome);
    const folio: number = parseInt(req.body.folio);
    const name: string = req.body.name;
    const phone = req.body.phone;
    const namer: string = req.body.namer;
    const namerCharge: string = req.body.namerCharge;
    const enabled = req.body.enabled;
    const eiId: number = parseInt(req.body.eiId);
    const userId: string = req.body.userId;
    
    if(req?.file) {
      return res.status(200).json({ message: "documento-guardado" });
    }
    
    await db.Representantes.update(
      {
        ci: ci,
        tome: tome,
        folio: folio,
        name: name,
        phone: phone,
        namer: namer,
        namerCharge: namerCharge,
        enabled: enabled,
        EmpresasInstitucioneId: eiId,
        UserId: userId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({ message: "updated" });
     


  } catch (error: any) {
      return res.status(200).json({ message: error.message });
  }
};





export const exportPdf = async (req: Request, res: Response, next: any) => {
  try {
    const ci: number = parseInt(req.params.ci);
    res.download(`./data/nominationTemplate/${ci}.pdf`);
  } catch (ex) {
    next(ex);
  }
};

const deleteFile = () => {
  if (fs.existsSync(`data/nominationTemplate/delete.pdf`)) {
    fs.unlink("data/nominationTemplate/delete.pdf", (err) => {
      if (err) throw err;
    });
  }
};


