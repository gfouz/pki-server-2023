import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { TOKEN_SECRET } from "../privateToken";

export const protectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("jwt");
  if (token == null) {
    return res.status(401).json({ error: "not authorized" });
  }
  if (token) {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(403).json(err.message);
      if (decoded && typeof decoded !== "string" && decoded.email) next();
    });
  }
};
