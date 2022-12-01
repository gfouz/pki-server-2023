import { Request, Response } from "express";
import multer from "multer";
import {
  isValidPhoneNumber,
  isValidString,
  isValidUUID,
  validateCi,
} from "./GenerateValidations";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `data/nominationTemplate/`);
  },
  filename: function (req, file, cb) {
    if (
      req.body.ci &&
      req.body.tome &&
      req.body.folio &&
      req.body.name &&
      req.body.phone &&
      req.body.namer &&
      req.body.namerCharge &&
      req.body.eiId &&
      req.body.userId
    ) {
      if (
        validateCi(req.body.ci) &&
        isValidUUID(req.body.userId) &&
        parseInt(req.body.tome) &&
        parseInt(req.body.folio) &&
        isValidString(req.body.name) &&
        isValidString(req.body.namer) &&
        isValidString(req.body.namerCharge) &&
        isValidPhoneNumber(req.body.phone) &&
        parseInt(req.body.eiId)
      ) {
        cb(null, `${req.body.ci}` + ".pdf");
      } else {
        cb(null, "delete.pdf");
      }
    } else {
      cb(null, "delete.pdf");
    }
  },
});
const upload = multer({ storage: storage });

export const keepFile = upload.single("nominationTemplate");
