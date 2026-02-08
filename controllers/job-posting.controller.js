import { jobPostingValidator } from "../lib/validators/job-posting.validator.js";
import { JobPostingService } from "../services/job-posting.service.js";

export const createJobPosting = async (req, res) => {
  const validationResult = await jobPostingValidator.safeParseAsync(req.body);

  if (validationResult.error) {
    console.log(validationResult.error);
    return res.status(400).json({ error: "Bad request" });
  }

  const job = await JobPostingService.create(validationResult.data);

  return res.status(200).json({ data: job });
};

export const getAllJobPostings = async (req, res) => {
  const jobs = await JobPostingService.getAll();

  return res.status(200).json({ data: jobs });
};

export const deleteJobPosting = async (req, res) => {
  const { id } = req.params;
  await JobPostingService.delete(id);

  return res.status(200).json({ message: "Job posting deleted successfully" });
};
