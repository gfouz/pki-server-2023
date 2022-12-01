import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import {
  isValidStringWithNumbers,
  validateTarifaBD,
} from "../tools/GenerateValidations";
import { options } from "./common";

export const postTarifa = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    time: Joi.number().required(),
    price: Joi.number().required(),
    range: Joi.string().min(4).required(),
    finalidadId: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (error || !isValidStringWithNumbers(req.body.range)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    const validation = await validateTarifaBD(req, res, "create");
    if (!validation) {
      return res.status(409).json({ error: "Conflict" });
    }
    req.body = value;
    next();
  }
};

export const putTarifa = async (
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
      time: Joi.number().required(),
      price: Joi.number().required(),
      range: Joi.string().min(4).required(),
      enabled: Joi.boolean().required(),
      finalidadId: Joi.number().required(),
    });
    const { error, value } = schemaBody.validate(req.body, options);
    if (error || !isValidStringWithNumbers(req.body.range)) {
      return res.status(400).json({ error: "Bad-Request" });
    } else {
      const validation = await validateTarifaBD(req, res, "update");
      if (!validation) {
        return res.status(409).json({ error: "Conflict" });
      }
      req.params = valueParams;
      req.body = value;
      next();
    }
  }
};
