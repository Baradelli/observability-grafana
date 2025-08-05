import cors from "cors";
import express from "express";
import { createServer } from "http";
import { log } from "./infra/logger";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Hello, World!");
});

export default server;
