import { Request, Response } from "express";
import { dataSource } from "../config/db";

import { Ads } from "../entities/Ads";

const db = dataSource.manager;

const browse = async (req: Request, res: Response) => {
  try {
    if (req.query["location"]) {
      const location = req.query["location"] as string;
      const ads: Ads[] = await db.findBy(Ads, { location });

      if (ads.length === 0) {
        return res.status(404).json({ error: "No ads found" });
      }

      res.send({ ads: ads, message: "Ads found" });
    } else {
      const ads = await db.find(Ads);
      res.send(ads);
    }
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const add = async (req: Request, res: Response) => {
  try {
    const ads = new Ads(
      req.body.title,
      req.body.description,
      req.body.owner,
      req.body.price,
      req.body.picture,
      req.body.location,
      req.body.createdAt
    );

    await db.save(ads);
    res.send(ads);
  } catch (error: any) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getByLocation = async (req: Request, res: Response) => {
//   try {
//     if (req.query["location"]) {
//       const location = req.query["location"] as string;
//       const ads: Ads[] = await db.findBy(Ads, { location });

//       if (ads.length === 0) {
//         return res.status(404).json({ error: "No ads found" });
//       }

//       return res.send({ ads: ads, message: "Ads found" });
//     } else {
//       return res.status(400).json({ error: "Missing required fields" });
//     }
//   } catch (error: any) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export default {
  browse,
  add,
  //   getByLocation,
};
