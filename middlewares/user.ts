import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import db from "../models";
import { isValidUUID, validateUserBD } from "../tools/GenerateValidations";
import { options } from "./common";
import brcypt from "bcrypt";

export const postLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(8).required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    let user = await db.Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(422).json({ error: "Unprocessable-data" });
    }
    const isPasswordValid = await brcypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid || !user.enabled) {
      return res.status(401).json({ error: "not-authorized" });
    }
    req.body = value;
    next();
  }
};

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(8).required(),
    rolId: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    const validation = await validateUserBD(req, res, "create");
    if (!validation) {
      return res.status(409).json({ error: "Conflict" });
    }
    req.body = value;
    next();
  }
};

export const putUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schemaParams = Joi.object({
    id: Joi.string().required(),
  });
  const errorParams = schemaParams.validate(req.params, options).error;
  const valueParams = schemaParams.validate(req.params, options).value;
  if (errorParams || !isValidUUID(req.params.id)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    const schemaBody = Joi.object({
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(8).required(),
      enabled: Joi.boolean().required(),
      rolId: Joi.number().required(),
    });
    const { error, value } = schemaBody.validate(req.body, options);
    if (error) {
      return res.status(400).json({ error: "Bad-Request" });
    } else {
      const validation = await validateUserBD(req, res, "update");
      if (!validation) {
        return res.status(409).json({ error: "Conflict" });
      }
      req.params = valueParams;
      req.body = value;
      next();
    }
  }
};
