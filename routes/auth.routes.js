import { signIn, signUp } from "../controllers/auth.controller.js";
import express from "express";

export const authRouter = express.Router();

authRouter.post("/signin", signIn);
authRouter.post("/signup", signUp);
