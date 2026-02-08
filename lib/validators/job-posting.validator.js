import z from "zod";

export const jobPostingValidator = z.object({
  noOfPeople: z.number(),
  skill: z.string(),
  wagePerPerson: z.number(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  fromTime: z.string().refine((time) => !isNaN(Date.parse(time)), {
    message: "Invalid time format",
  }),
  toTime: z.string().refine((time) => !isNaN(Date.parse(time)), {
    message: "Invalid time format",
  }),
  contact: z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
    address: z.string().min(1, "Address is required"),
    landmark: z.string().optional(),
    city: z.string().min(1, "City is required"),
  }),
});
