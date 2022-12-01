import { NextFunction, Request, Response } from "express";
import db from "../models";
import { QueryResult } from "pg";

export const getTarifas = async (req: Request, res: Response, next: any) => {
  try {
    const result: QueryResult = await db.Tarifas.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};

export const getTarifasByFinalidad = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const finalidadId: number = parseInt(req.params.id);
    const result: QueryResult = await db.Tarifas.findAll({
      where: {
        finalidadId: finalidadId,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-another" });
  } catch (ex) {
    next(ex);
  }
};

export const getTarifasEnabled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Tarifas.findAll({
      where: {
        enabled: req.params.enabled,
      },
    });
    return res.status(200).json({ result, message: "enabled" });
  } catch (ex) {
    next(ex);
  }
};

export const getTarifasByTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Tarifas.findAll({
      where: {
        time: req.params.time,
      },
    });
    return res.status(200).json({ result, message: "gotten-by-time" });
  } catch (ex) {
    next(ex);
  }
};

export const getTarifaById = async (req: Request, res: Response, next: any) => {
  try {
    const id = parseInt(req.params.id);
    const result: QueryResult = await db.Tarifas.findByPk(id);
    return res.status(200).json({ result, message: "gotten-by-id" });
  } catch (ex) {
    next(ex);
  }
};

export const createTarifa = async (req: Request, res: Response, next: any) => {
  try {
    const time: number = parseInt(req.body.time);
    const price: number = parseFloat(req.body.price);
    const range: string = req.body.range;
    const finalidadId: number = parseInt(req.body.finalidadId);
    await db.Tarifas.create({
      time: time,
      price: price,
      range: range,
      finalidadId: finalidadId,
      enabled: true,
    });
    return res.status(200).json({ message: "created" });
  } catch (ex) {
    next(ex);
  }
};

export const updateTarifa = async (req: Request, res: Response, next: any) => {
  try {
    const id = parseInt(req.params.id);
    const time: number = parseInt(req.body.time);
    const price: number = parseFloat(req.body.price);
    const range: string = req.body.range;
    const finalidadId: number = parseInt(req.body.finalidadId);
    const enabled = req.body.enabled;
    await db.Tarifas.update(
      {
        time: time,
        price: price,
        range: range.trim(),
        finalidadId: finalidadId,
        enabled: enabled,
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
