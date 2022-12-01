import { NextFunction, Request, Response } from "express";
import db from "../models";
import { QueryResult } from "pg";
import fs from "fs";
import { generateKey } from "../tools/GenerateKey";
import { v4 as uuidv4 } from "uuid";

export interface KeyProps {
  ci: number;
  tome: number;
  folio: number;
  name: string;
  email: string;
  phone: string;
}

export const getSolicitudes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: QueryResult = await db.Solicitudes.findAll();
    return res.status(200).json({ result, message: "ok" });
  } catch (ex) {
    next(ex);
  }
};

export const getSolicitudById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await db.Solicitudes.findOne({
      where: {
        id: id,
      },
    }).then((result: object) =>
      res.status(200).json({ result, message: "ok" })
    );
  } catch (ex) {
    next(ex);
  }
};

export const getSolicitudesByPropByEst = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propositoId = parseInt(req.params.id);
    const estadoId = parseInt(req.params.id2);
    if (propositoId == 0) {
      const response: QueryResult = await db.Solicitudes.findAll({
        where: {
          estadoId: estadoId,
        },
      }).then((result: object) =>
        res.status(200).json({ result, message: "ok" })
      );
    }
    if (estadoId == 0) {
      const response: QueryResult = await db.Solicitudes.findAll({
        where: {
          propositoId: propositoId,
        },
      }).then((result: object) =>
        res.status(200).json({ result, message: "ok" })
      );
    }
    const response: QueryResult = await db.EmpresasInstituciones.findAll({
      where: {
        propositoId: propositoId,
        estadoId: estadoId,
      },
    }).then((result: object) =>
      res.status(200).json({ result, message: "ok" })
    );
  } catch (ex) {
    next(ex);
  }
};

export const getSolicitudesByPropByEstByER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propositoId = parseInt(req.params.id);
    const estadoId = parseInt(req.params.id2);
    const erId = parseInt(req.params.id3);
    if (propositoId == 0) {
      const response: QueryResult = await db.Solicitudes.findAll({
        where: {
          estadoId: estadoId,
          erId: erId,
        },
      }).then((result: object) =>
        res.status(200).json({ result, message: "ok" })
      );
    }
    if (estadoId == 0) {
      const response: QueryResult = await db.Solicitudes.findAll({
        where: {
          propositoId: propositoId,
          erId: erId,
        },
      }).then((result: object) =>
        res.status(200).json({ result, message: "ok" })
      );
    }
    const response: QueryResult = await db.EmpresasInstituciones.findAll({
      where: {
        propositoId: propositoId,
        estadoId: estadoId,
        erId: erId,
      },
    }).then((result: object) =>
      res.status(200).json({ result, message: "ok" })
    );
  } catch (ex) {
    next(ex);
  }
};

export const getSolicitudesByPropByEstByEI = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propositoId = parseInt(req.params.id);
    const estadoId = parseInt(req.params.id2);
    const eiId = parseInt(req.params.id3);
    if (propositoId == 0) {
      const response: QueryResult = await db.Solicitudes.findAll({
        where: {
          estadoId: estadoId,
          eiId: eiId,
        },
      }).then((result: object) =>
        res.status(200).json({ result, message: "ok" })
      );
    }
    if (estadoId == 0) {
      const response: QueryResult = await db.Solicitudes.findAll({
        where: {
          propositoId: propositoId,
          eiId: eiId,
        },
      }).then((result: object) =>
        res.status(200).json({ result, message: "ok" })
      );
    }
    const response: QueryResult = await db.EmpresasInstituciones.findAll({
      where: {
        propositoId: propositoId,
        estadoId: estadoId,
        eiId: eiId,
      },
    }).then((result: object) =>
      res.status(200).json({ result, message: "ok" })
    );
  } catch (ex) {
    next(ex);
  }
};

export const generateSolicitud = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ci: number = parseInt(req.body.ci);
    const tome: number = parseInt(req.body.tome);
    const folio: number = parseInt(req.body.folio);
    const name: string = req.body.name;
    const email: string = req.body.email;
    const phone: string = req.body.phone;
    const tarifaId: number = parseInt(req.body.tarifaId);
    const propositoId: number = parseInt(req.body.propositoId);
    const estadoId: number = 1;
    let erId: number = 1;
    let charge: string = "";
    let eiId = 1;
    /*const validationPerson = await checkRequestBD(
        ci,
        tome,
        folio,
        propositoId,
        "generate"
      );*/

    if (propositoId == 1) {
      erId = parseInt(req.body.erId);
    } else if (propositoId == 2) {
      charge = req.body.charge;
      eiId = parseInt(req.body.eiId);
    }
    /*res.json({
      id: uuidv4(),
      ci: ci,
      tome: tome,
      folio: folio,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      charge: eiId != 0 ? charge.trim() : null,
      tarifaId: tarifaId,
      propositoId: propositoId,
      estadoId: estadoId,
      eiId: eiId != 0 ? eiId : null,
      erId: erId != 0 ? erId : null,
    });*/
    await db.Solicitudes.create({
      id: uuidv4(),
      ci: ci,
      tome: tome,
      folio: folio,
      name: name,
      email: email,
      phone: phone,
      charge: propositoId == 2 ? charge : null,
      tarifaId: tarifaId,
      propositoId: propositoId,
      estadoId: estadoId,
      eiId: propositoId == 2 ? eiId : 1,
      erId: propositoId == 1 ? erId : 1,
    });
    /*const keys = generateKey(
      {
        ci: ci,
        tome: tome,
        folio: folio,
        name: name,
        email: email,
        phone: phone,
      },
      ci
    );*/
    const keys = "";
    return res.status(200).json({ msg: "created", secret: keys });
  } catch (ex) {
    next(ex);
  }
};

export const exportPrivateKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ci: number = parseInt(req.params.ci);
    const rute: string = `data/keys/${ci}.pem`;
    if (!fs.existsSync(rute)) {
      return res.json({ msg: "file-not-found", status: false });
    }
    res.download(`.${rute}`);
    fs.unlink(rute, (err) => {
      if (err) throw err;
    });
  } catch (ex) {
    next(ex);
  }
};
