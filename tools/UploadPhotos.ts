import { NextFunction, Request, Response } from "express";
import multer from "multer";
import { checkAccess } from "./GenerateValidations";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `data/photos/`);
  },
  filename: function (req, file, cb) {
    if (
      req.headers.id &&
      req.headers.token &&
      req.body.ci &&
      req.body.tome &&
      req.body.folio &&
      req.body.name &&
      req.body.phone &&
      req.body.eiId &&
      req.body.erId
    ) {
      cb(null, `${req.body.ci}` + ".png");
    }
  },
});
const upload = multer({ storage: storage });

exports.keepFile = upload.single("photo");
