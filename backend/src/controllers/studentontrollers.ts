import { Request, Response } from "express";
import { dataSource } from "../config/db";
import { Student } from "../entities/Student";

const db = dataSource.manager;

const add = async (req: Request, res: Response) => {
  const { firstname, name, birthday, address } = req.body;
  try {
    if (!firstname || !name || !birthday || !address) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const student = new Student();
    student.firstname = firstname;
    student.name = name;
    student.birthday = new Date(birthday);
    student.address = address;

    console.log("student", student);

    await db.save(student);
    res.send(student);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const browse = async (req: Request, res: Response) => {
  try {
    const students = await db.find(Student);

    if (students.length === 0) {
      res.status(404).json({ error: "No students found" });
    }
    res.status(200).send(students);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const student = await db.findOneBy(Student, { id: Number(id) });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).send(student);
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
