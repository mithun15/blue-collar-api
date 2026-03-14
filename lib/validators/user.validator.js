import { z } from "zod";

export const userSignupValidation = z.object({
  firstName: z.string().min(3).max(25),
  lastName: z.string().min(3).max(25).optional(),
  email: z.email().optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  skill: z.string().optional(),
  password: z.string().min(3),
  role: z.string(),
  company: z.string().optional(),
});

export const userSigninValidation = z.object({
  userId: z.email(),
  password: z.string(),
});
