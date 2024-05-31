import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "src/data/db.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
});
