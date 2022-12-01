import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import {
  isValidString,
  isValidStringWithNumbers,
  isValidUUID,
  validateCi,
} from "../tools/GenerateValidations";

export const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
};

export const getById = (req: Request, res: Response, next: NextFunction) => {
  // create schema object
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByIdById2 = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    id: Joi.number().required(),
    id2: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByEnabled = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    enabled: Joi.boolean().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByIdByEnabled = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    id: Joi.number().required(),
    enabled: Joi.boolean().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByIdById2ByEnabled = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    id: Joi.number().required(),
    id2: Joi.number().required(),
    enabled: Joi.boolean().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByCi = (req: Request, res: Response, next: NextFunction) => {
  // create schema object
  const schema = Joi.object({
    ci: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error || !validateCi(req.params.ci)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByUserId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // create schema object
  const schema = Joi.object({
    id: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error || !isValidUUID(req.params.id)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByName = (req: Request, res: Response, next: NextFunction) => {
  // create schema object
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error || !isValidString(req.params.name)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByEmail = (req: Request, res: Response, next: NextFunction) => {
  // create schema object
  const schema = Joi.object({
    email: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error || !isValidStringWithNumbers(req.params.email)) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};

export const getByTime = (req: Request, res: Response, next: NextFunction) => {
  // create schema object
  const schema = Joi.object({
    time: Joi.number().required(),
  });
  const { error, value } = schema.validate(req.params, options);
  if (error) {
    return res.status(400).json({ error: "Bad-Request" });
  } else {
    req.params = value;
    next();
  }
};
