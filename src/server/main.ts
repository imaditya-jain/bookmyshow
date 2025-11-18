import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./config/index.ts";

dotenv.config();

connectToDatabase()

const app = express();

app.use(cors({ credentials: true, origin: ["http://localhost:5173"], }));
app.use(cookieParser());
app.use(express.json());

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
