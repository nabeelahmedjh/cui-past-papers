import * as z from "zod";

export const addFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name should be more than 3 characters long.",
    })
    .max(75, {
      message: "Name should be less than 75 characters long.",
    }),
  email: z.string().email("Please enter a valid email address."),
  linkedIn: z
    .string()
    .url("Please enter a valid URL.")
    .regex(/\blinkedin\b/, "Only LinkedIn profiles are accepted"),
  file: z.any(),
});
