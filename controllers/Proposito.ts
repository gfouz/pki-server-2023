import { NextFunction, Request, Response } from "express";
import db from "../models";
import { QueryResult } from "pg";

export const getPropositos = async (req: Request, res: Response, next: any) => {
  try {
    const result: QueryResult = await db.Propositos.findAll();
    return res.status(200).json({ result, message: "all-items" });
  } catch (ex) {
    next(ex);
  }
};
