import express from "express";
import router from "./router";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(bodyParser.text({ type: "text/plain" }));

app.use(cors());

app.use("/api", router);

export default app;
