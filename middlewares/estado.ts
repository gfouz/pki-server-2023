import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import db from "../models";
import { isValidString, validateElementBD } from "../tools/GenerateValidations";
import { options } from "./common";

export const postEstado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (error || !isValidString(req.body.name)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    const validation = await validateElementBD(req, res, db.Estados, "create");
    if (!validation) {
      return res.status(409).json({ error: "Conflict" });
    }
    req.body = value;
    next();
  }
};

export const putEstado = async (
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
      name: Joi.string().min(4).required(),
      enabled: Joi.boolean().required(),
    });
    const { error, value } = schemaBody.validate(req.body, options);
    if (error || !isValidString(req.body.name)) {
      return res.status(400).json({ error: "Bad-Request" });
    } else {
      const validation = await validateElementBD(
        req,
        res,
        db.Estados,
        "update"
      );
      if (!validation) {
        return res.status(409).json({ error: "Conflict" });
      }
      req.params = valueParams;
      req.body = value;
      next();
    }
  }
};
