import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Type } from "./entity/Type";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [User, Type],
  migrations: [],
  subscribers: [],
});
