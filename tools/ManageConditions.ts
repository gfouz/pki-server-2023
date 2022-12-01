import fs from "fs";
import { NextFunction, Request, Response } from "express";

export const getConditions = async (req: Request, res: Response, next: any) => {
  try {
    await fs.readFile("./conditions.txt", "utf8", (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        return res.status(200).json({ result, status: true });
      }
    });
  } catch (ex) {
    next(ex);
  }
};
export const writeConditions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const conditions: string = await req.body.conditions;
    // Delete conditions.txt
    fs.unlink("conditions.txt", (err) => {
      if (err) throw err;
    });
    // Create a new conditions.txt
    fs.appendFile("conditions.txt", conditions, (err) => {
      if (err) throw err;
    });
    return res.status(200).json({ message: "ok" });
  } catch (ex) {
    next(ex);
  }
};
