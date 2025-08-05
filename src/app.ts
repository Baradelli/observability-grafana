import cors from "cors";
import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

export default server;
