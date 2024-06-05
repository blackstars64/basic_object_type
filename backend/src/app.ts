import express from "express";
import router from "./router";
import bodyParser from "body-parser";
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(bodyParser.text({ type: "text/plain" }));

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://mysite.com",
      "http://another-domain.com",
    ],
  })
);

app.use("/api", router);

export default app;
