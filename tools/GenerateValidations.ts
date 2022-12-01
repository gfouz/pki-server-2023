import db from "../models";
import { Op } from "sequelize";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../privateToken";

export const checkAccess = async (token: string, funcionalidadId: number) => {
  jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
    if (err) return false;
    if (decoded && typeof decoded !== "string" && decoded.email) {
      //Validate User
      const user = await db.Users.findOne({
        where: {
          email: decoded.email,
        },
      });
      const enabled: boolean = user.dataValues.enabled;
      if (!enabled) {
        return false;
      }
      //Validate funcionalidad
      const rolId: number = user.dataValues.rolId;
      if (rolId) {
        const Rolfuncionalidad = await db.RolsFuncionalidades.findOne({
          where: {
            rolId: rolId,
            funcionalidadId: funcionalidadId,
          },
        });
        if (!Rolfuncionalidad) {
          return false;
        }
      }
    }
  });
  return true;
};

export const checkRepresentanteBD = async (
  ci: number,
  tome: number,
  folio: number,
  userId: string,
  action: string
) => {
  if (action == "create") {
    const response = await db.Representantes.findOne({
      where: {
        [Op.or]: [
          { ci: ci },
          { tome: tome },
          { folio: folio },
          { userId: userId },
        ],
      },
    });
    if (response) {
      return false;
    }
  }
  if (action == "update") {
    const response = await db.Representantes.findOne({
      where: {
        [Op.or]: [{ ci: ci }, { tome: tome }, { folio: folio }],
        [Op.not]: { userId: userId },
      },
    });
    if (response) {
      return false;
    }
  }
  return true;
};

export const checkRequestBD = async (
  ci: number,
  tome: number,
  folio: number,
  propositoId: number,
  action: string
) => {
  if (action == "generate") {
    const response = await db.Solicitudes.findOne({
      where: {
        [Op.or]: [
          { ci: ci },
          { tome: tome },
          { folio: folio },
          { propositoId: propositoId },
        ],
      },
    });
    if (response) {
      return false;
    }
  }
  if (action == "renew") {
    const response = await db.Solicitudes.findOne({
      where: {
        [Op.or]: [{ ci: ci }, { tome: tome }, { folio: folio }],
        [Op.not]: { propositoId: propositoId },
      },
    });
    if (response) {
      return false;
    }
  }
  return true;
};

export const isValidString = (element: string) => {
  const str = element.replace(/\s+/g, "");
  return /^[a-zÀ-ÿ]+$/i.test(str);
};

export const isValidStringWithNumbers = (element: string) => {
  let str = element.replace(/\s+/g, "");
  str = str.replace(/,/g, "");
  str = str.replace(/#/g, "");
  str = str.replace("/", "");
  str = str.replace(/-/g, "");
  str = str.replace(".", "");
  str = str.replace(":", "");
  str = str.replace("+", "");
  str = str.replace("@", "");
  return /^[a-z0-9À-ÿ\u00f1\u00d1]+$/i.test(str);
};

export const isValidListNummbers = (element: string) => {
  let str = element.replace(/,/g, "");
  return /^[0-9]*$/.test(str);
};

export const isValidUUID = (element: string) => {
  return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(
    element
  );
};

export const isValidEmail = (element: string) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    element
  );
};

export const isValidPhoneNumber = (element: any) => {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im.test(
    element
  );
};

export const isValidPassword = (element: string) => {
  return element.length > 7 && element.length < 13;
};

export const isValidUser = async (id: string) => {
  if (isValidUUID(id)) {
    const user = await db.Users.findOne({
      where: {
        id: id,
      },
    });
    const rolId: number = user.dataValues.rolId;
    if (rolId) {
      const RolfuncionalidadRepresentante =
        await db.RolsFuncionalidades.findOne({
          where: {
            rolId: rolId,
            funcionalidadId: 18,
          },
        });
      if (RolfuncionalidadRepresentante) {
        const representante = await db.Representantes.findOne({
          where: {
            userId: id,
          },
        });
        if (!representante) {
          return false;
        }
      }
      const RolfuncionalidadFuncionario = await db.RolsFuncionalidades.findOne({
        where: {
          rolId: rolId,
          [Op.or]: [{ funcionalidadId: 9 }, { funcionalidadId: 15 }],
        },
      });
      if (RolfuncionalidadFuncionario) {
        const funcionario = await db.FuncionariosRegistro.findOne({
          where: {
            userId: id,
          },
        });
        if (!funcionario) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

export const validateElementBD = async (
  req: Request,
  res: Response,
  table: any,
  action: string
) => {
  if (action == "create") {
    const valueDB = await table.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (valueDB) {
      return false;
    }
  }
  if (action == "update") {
    const valueDB = await table.findOne({
      where: {
        name: req.body.name,
        [Op.not]: { id: parseInt(req.params.id) },
      },
    });
    if (valueDB) {
      return false;
    }
  }
  return true;
};

export const validateUserBD = async (
  req: Request,
  res: Response,
  action: string
) => {
  if (action == "create") {
    const valueDB = await db.Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (valueDB) {
      return false;
    }
  }
  if (action == "update") {
    const valueDB = await db.Users.findOne({
      where: {
        email: req.body.email,
        [Op.not]: { id: req.params.id },
      },
    });
    if (valueDB) {
      return false;
    }
  }
  return true;
};

export const validateFuncionarioBD = async (
  req: Request,
  res: Response,
  action: string
) => {
  if (action == "create") {
    const valueDB = await db.FuncionariosRegistro.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (valueDB) {
      return false;
    }
  }
  if (action == "update") {
    const valueDB = await db.FuncionariosRegistro.findOne({
      where: {
        userId: req.body.userId,
        [Op.not]: { id: parseInt(req.params.id) },
      },
    });
    if (valueDB) {
      return false;
    }
  }
  return true;
};

export const validateTarifaBD = async (
  req: Request,
  res: Response,
  action: string
) => {
  if (action == "create") {
    const valueDB = await db.Tarifas.findOne({
      where: {
        time: req.body.time,
        range: req.body.range,
        finalidadId: req.body.finalidadId,
      },
    });
    if (valueDB) {
      return false;
    }
  }
  if (action == "update") {
    const valueDB = await db.Tarifas.findOne({
      where: {
        time: req.body.time,
        range: req.body.range,
        finalidadId: req.body.finalidadId,
        [Op.not]: { id: parseInt(req.params.id) },
      },
    });
    if (valueDB) {
      return false;
    }
  }
  return true;
};

const turnToInt = (value: number | string, start: number, end: number) => {
  return parseInt(value.toString().substring(start, end));
};

export const validateCi = (ci: string) => {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  currentYear = turnToInt(currentYear, 2, 4);
  if (
    ci.length == 11 &&
    parseInt(ci.substring(2, 4)) >= 1 &&
    parseInt(ci.substring(2, 4)) <= 12 &&
    parseInt(ci.substring(4, 6)) >= 1 &&
    parseInt(ci.substring(4, 6)) <= 31 &&
    ((currentYear - turnToInt(ci, 0, 2) == 18 &&
      currentMonth > turnToInt(ci, 2, 4)) ||
      (currentYear > turnToInt(ci, 0, 2) &&
        currentYear - turnToInt(ci, 0, 2) > 18) ||
      (currentYear < turnToInt(ci, 0, 2) && turnToInt(ci, 0, 2) < 99))
  ) {
    return true;
  }
  return false;
};
