import { Request, Response } from "express";
import { dataSource } from "../config/db";

import { Category } from "../entities/Category";

const db = dataSource.manager;

type Er = Error | unknown;

const browse = async (req: Request, res: Response) => {
  try {
    const categories = await db.find(Category);
    res.send(categories);
  } catch (error: Er) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { browse };
