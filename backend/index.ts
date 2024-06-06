import "reflect-metadata";
import app from "./src/app";
import { dataSource } from "./src/config/db";

import dotenv from "dotenv";
import path from "path";
import { Category } from "./src/entities/Category";
import { Tag } from "./src/entities/Tag";
import { Ads } from "./src/entities/Ads";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const port: number | string = process.env.PORT || 3002;

async function clearDB() {
  await dataSource.manager.clear("Ads");
  await dataSource.manager.clear("Language");
  await dataSource.manager.clear("School");
  await dataSource.manager.clear("Student");
  await dataSource.manager.clear("Category");
  await dataSource.manager.clear("Tag");
}

async function createAds(
  title: string,
  owner: string,
  location: string,
  price: number,
  category: Category,
  ...tags: Tag[]
) {
  const ad: Ads = dataSource.manager.create("Ads", {
    title,
    owner,
    location,
    price,
  });

  ad.category = category;
  ad.tags = Promise.resolve(tags);

  await dataSource.manager.save(ad);
}

async function seedDB() {
  const tag: Tag = dataSource.manager.create("Tag", { name: "Vieux Meuble" });
  const tag2: Tag = dataSource.manager.create("Tag", {
    name: "Nouveau Canapé",
  });
  const tag3: Tag = dataSource.manager.create("Tag", { name: "Télé Moderne" });

  const category: Category = dataSource.manager.create("Category", {
    name: "Meubles",
  });
  const category2: Category = dataSource.manager.create("Category", {
    name: "Electroménager",
  });
  const category3: Category = dataSource.manager.create("Category", {
    name: "High-Tech",
  });

  await dataSource.manager.save(category);
  await dataSource.manager.save(category2);
  await dataSource.manager.save(category3);
  await dataSource.manager.save(tag);
  await dataSource.manager.save(tag2);
  await dataSource.manager.save(tag3);

  await createAds("Canapé", "Jean", "Paris", 500, category, tag, tag2);
  await createAds("Télé", "Jean", "Bayonne", 45, category3, tag3);
  await createAds("Table", "Jean", "Paris", 457, category, tag);
  await createAds("Frigo", "Jean", "Bordeaux", 85, category2, tag2);
}

app
  .listen(port, async () => {
    await dataSource.initialize();
    // await clearDB();
    // await seedDB();
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error | null) => {
    console.error("Error:", err!.message);
  });
