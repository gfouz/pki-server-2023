import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import db from "../models";
import {
  isValidListNummbers,
  isValidString,
} from "../tools/GenerateValidations";
import { options } from "./common";

export const postFuncionalidad = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    id: Joi.number().required(),
    funcionalidades: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (error || !isValidListNummbers(req.body.funcionalidades)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.body = value;
    next();
  }
};

export const putFuncionalidad = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schemaParams = Joi.object({
    id: Joi.number().required(),
  });
  const errorParams = schemaParams.validate(req.params, options).error;
  const valueParams = schemaParams.validate(req.params, options).value;
  if (errorParams) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    const schemaBody = Joi.object({
      enabled: Joi.boolean().required(),
    });
    const { error, value } = schemaBody.validate(req.body, options);
    if (error) {
      return res.status(400).json({ error: "Bad-Request" });
    } else {
      req.params = valueParams;
      req.body = value;
      next();
    }
  }
};
