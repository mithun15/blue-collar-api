import { JobPosting } from "../models/job-posting.model.js";

export class JobPostingService {
  static async getAll() {
    const jobs = await JobPosting.find({});
    return jobs;
  }

  static async create(data) {
    return await JobPosting.create(data);
  }

  static async delete(id) {
    return await JobPosting.findByIdAndDelete(id);
  }
}
