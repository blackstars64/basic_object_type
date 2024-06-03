import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { Language } from "../entities/Language";

const db = dataSource.manager;

const add = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("name", name);

    const language = new Language();
    language.name = name;

    console.log("language", language);

    await db.save(language);
    res.status(200).send(language);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const browse = async (req: Request, res: Response) => {
  try {
    const languages = await db.find(Language);
    res.status(200).send(languages);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const language = await db.findOneBy(Language, { id: Number(id) });
    if (!language) {
      return res.status(404).json({ error: "Language not found" });
    }
    res.status(200).send(language);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  add,
  browse,
  getById,
  // update,
  // remove,
};
