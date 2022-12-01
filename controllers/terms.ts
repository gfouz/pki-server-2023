import {  Request, Response } from "express";
const fs = require("fs");


 export const getConditions = async (req: Request, res: Response) => {
  try {
    await fs.readFile("./conditions.txt", "utf8", (error: unknown, data: string) => {
      if (error) {
         res.status(400).json({ error });
      } else {
       res.status(200).json({data, message: "read-ok"});
      }
    });
  } catch (error) {
    console.log(error);
  }
};



export const writeConditions = async (req: Request, res: Response) => {
  try {

    const conditions: string = req.body.conditions;
    // Delete conditions.txt
    if(conditions !== undefined || conditions !== null) {
     await fs.unlink("conditions.txt", (err: unknown) => {
      if (err) throw err;
      console.log("file has been deleted!");
    });
     await fs.writeFile('conditions.txt', conditions, (error: unknown) => {
      // In case of a error throw err.
       if (error) {
         res.status(400).json({ error });
      } else {
       res.status(200).json({message: "modified"});
      }
    })


    }
    
    

  } catch (error) {
     console.log(error);
  }
};
