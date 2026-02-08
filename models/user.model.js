import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: false,
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
      enum: ["worker", "employer", "admin"],
    },
  },
  { timestamps: true }
);

export const User = model("user", userSchema);
