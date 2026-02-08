import express from "express";
import {
  createJobPosting,
  getAllJobPostings,
  deleteJobPosting,
} from "../controllers/job-posting.controller.js";

export const jobPostingRouter = express.Router();

jobPostingRouter.post("/jobposting", createJobPosting);

jobPostingRouter.get("/jobposting", getAllJobPostings);

jobPostingRouter.delete("/jobposting/:id", deleteJobPosting);
