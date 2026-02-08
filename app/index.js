import express from "express";
import { jobPostingRouter } from "../routes/job-posting.routes.js";
import cors from "cors";
import { authRouter } from "../routes/auth.routes.js";

export const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Application is working!" }));

app.use("/employer", jobPostingRouter);

app.use("/auth", authRouter);
