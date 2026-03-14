import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a name"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    mobile: {
      type: Number,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    skill: {
      type: String,
    },
    role: {
      type: String,
      enum: ["worker", "employer", "supervisor", "admin"],
      default: "worker",
    },
    company: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const User = model("user", userSchema);
