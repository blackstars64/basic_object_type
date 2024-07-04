import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Ad } from "./entity/Ad";
import { Tag } from "./entity/Tag";
import { Category } from "./entity/Category";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./data/db.sqlite",
  synchronize: true,
  logging: true,
  entities: [User, Ad, Tag, Category],
  migrations: [],
  subscribers: [],
});
