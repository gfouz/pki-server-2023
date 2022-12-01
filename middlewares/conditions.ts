import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import db from "../models";
import { options } from "./common";

export const postConditions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    conditions: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.body = value;
    next();
  }
};
