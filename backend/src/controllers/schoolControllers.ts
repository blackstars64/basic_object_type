import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { School } from "../entities/School";

const db = dataSource.manager;

const add = async (req: Request, res: Response) => {
  const { city, capacity } = req.body;
  try {
    if (!city || !capacity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("city", city);

    const school = new School();
    school.city = city;
    school.capacity = capacity;

    console.log("school", school);

    await db.save(school);
    res.send(school);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const browse = async (req: Request, res: Response) => {
  try {
    const schools = await db.find(School);

    console.log("schools", schools);

    if (schools.length === 0) {
      return res.status(404).json({ error: "No schools found" });
    }
    res.status(200).send(schools);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const school = await db.findOneBy(School, { id: Number(id) });

    if (!school) {
      return res.status(404).json({ error: "School not found" });
    }
    res.status(200).send(school);
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
