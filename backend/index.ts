import "reflect-metadata";
import app from "./src/app";
import { dataSource } from "./src/config/db";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const port: number | string = process.env.PORT || 3000;

app
  .listen(port, async () => {
    await dataSource.initialize();
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error | null) => {
    console.error("Error:", err!.message);
  });
