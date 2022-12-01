import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import {
  checkRepresentanteBD,
  isValidPhoneNumber,
  isValidString,
  isValidUUID,
  validateCi,
} from "../tools/GenerateValidations";
import { options } from "./common";
import fs from "fs";

export const postRepresentante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    ci: Joi.number().required(),
    tome: Joi.number().required(),
    folio: Joi.number().required(),
    name: Joi.string().min(4).required(),
    phone: Joi.required(),
    namer: Joi.string().min(4).required(),
    namerCharge: Joi.string().min(4).required(),
    eiId: Joi.number().required(),
    userId: Joi.string().min(10).required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (
    error ||
    !isValidString(req.body.name) ||
    !validateCi(req.body.ci) ||
    !isValidPhoneNumber(req.body.phone) ||
    !isValidUUID(req.body.userId) ||
    !isValidString(req.body.namer) ||
    !isValidString(req.body.namerCharge)
  ) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    const validationPerson = await checkRepresentanteBD(
      req.body.ci,
      req.body.tome,
      req.body.folio,
      req.body.userId,
      "create"
    );
    if (!validationPerson) {
      return res.status(409).json({ error: "Conflict" });
    }
    req.body = value;
    next();
  }
};

export const putRepresentante = async (
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
      ci: Joi.number().required(),
      tome: Joi.number().required(),
      folio: Joi.number().required(),
      name: Joi.string().min(4).required(),
      phone: Joi.required(),
      namer: Joi.string().min(4).required(),
      namerCharge: Joi.string().min(4).required(),
      enabled: Joi.boolean().required(),
      eiId: Joi.number().required(),
      userId: Joi.string().min(10).required(),
    });
    const { error, value } = schemaBody.validate(req.body, options);
    if (
      error ||
      !isValidString(req.body.name) ||
      !validateCi(req.body.ci) ||
      !isValidPhoneNumber(req.body.phone) ||
      !isValidUUID(req.body.userId) ||
      !isValidString(req.body.namer) ||
      !isValidString(req.body.namerCharge)
    ) {
      return res.status(400).json({ error: "Bad-Request" });
    } else {
      const validationPerson = await checkRepresentanteBD(
        req.body.ci,
        req.body.tome,
        req.body.folio,
        req.body.userId,
        "update"
      );
      if (!validationPerson) {
        return res.status(409).json({ error: "Conflict" });
      }
      req.params = valueParams;
      req.body = value;
      next();
    }
  }
};
