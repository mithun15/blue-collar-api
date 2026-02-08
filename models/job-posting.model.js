import { model, Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    landmark: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { _id: false }, // prevents extra _id inside contact
);

const jobPostingSchema = new Schema(
  {
    noOfPeople: {
      type: Number,
      required: true,
    },
    skill: {
      type: String,
    },
    wagePerPerson: {
      type: Number,
    },
    date: {
      type: Date,
    },
    fromTime: {
      type: Date,
    },
    toTime: {
      type: Date,
    },
    contact: {
      type: contactSchema,
      required: true,
    },
  },
  { timestamps: true },
);

export const JobPosting = model("jobPosting", jobPostingSchema);
