import { NextFunction, Request, Response } from "express";
import db from "../models";
import { Op } from "sequelize";
import { QueryResult } from "pg";
import fs from "fs";
import multer from "multer";

export const getRepresentantes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Representantes.findAll();
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
        eiId: eiId,
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
      where: {
        enabled: req.params.enabled,
      },
    });
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
    deleteFile();
    await db.Representantes.create({
      ci: ci,
      tome: tome,
      folio: folio,
      name: name,
      phone: phone,
      namer: namer,
      namerCharge: namerCharge,
      enabled: true,
      eiId: eiId,
      userId: userId,
    });
    return res.status(200).json({ message: "created" });
  } catch (error) {
    console.log(error);
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
    deleteFile();
    await db.Representantes.update(
      {
        ci: ci,
        tome: tome,
        folio: folio,
        name: name.trim(),
        phone: phone.trim(),
        namer: namer.trim(),
        namerCharge: namerCharge.trim(),
        enabled: enabled,
        eiId: eiId,
        userId: userId,
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
