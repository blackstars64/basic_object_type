import { Request, Response } from "express";
import { dataSource } from "../config/db";

import { Ads } from "../entities/Ads";
import { Tag } from "../entities/Tag";
import { Category } from "../entities/Category";

const db = dataSource.manager;

type Er = Error | unknown;

const browse = async (req: Request, res: Response) => {
  try {
    if (req.query["location"]) {
      const location = req.query["location"] as string;
      const ads: Ads[] = await db.find(Ads, {
        relations: { tags: true },
        where: { location },
      });

      for (const ad of ads) {
        const tags: Tag[] = await ad.tags!;
        console.log("got ad[0].tags", tags);
      }

      if (ads.length === 0) {
        return res.status(404).json({ error: "No ads found" });
      }

      res.send({ ads: ads, message: "Ads found" });
    } else {
      const ads = await db.find(Ads);
      res.send(ads);
    }
  } catch (error: Er) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const add = async (req: Request, res: Response) => {
  const { category, tags } = req.body;
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

    const tag = await db.find(Tag);
    const DBcategory = await db.find(Category);

    console.log("tag", tag);
    console.log("category", DBcategory);

    if (!tag || !category) {
      return res.status(404).json({ error: "Tag or Category not found" });
    }

    DBcategory.filter((cat) => {
      if (cat.name === category.name) {
        ads.category = cat;
      }
    });

    tag.find((t) => {
      if (t.name === tags.name) {
        ads.tags = Promise.resolve([t]);
      }
    });

    console.log("ads", ads);
    console.log("tags", await tags);
    console.log("category", await category);

    await db.save(ads);
    res.send(ads);
  } catch (error: Er) {
    console.log("error--------------------------", error);

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

const remove = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const ads = await db.delete(Ads, { id });

    if (ads.affected === 0) {
      return res.status(404).json({ error: "Ads not found" });
    }

    res.send({ id: id, message: "Ads deleted" });
  } catch (error: Er) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  browse,
  add,
  //   getByLocation,
  remove,
};
