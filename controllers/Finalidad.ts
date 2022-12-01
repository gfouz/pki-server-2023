import { NextFunction, Request, Response } from "express";
import db from "../models";
import { QueryResult } from "pg";

export const getFinalidades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Finalidades.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};
