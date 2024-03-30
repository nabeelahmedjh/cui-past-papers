import * as z from "zod";

const MAX_FILE_SIZE_MB = 5;

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
  file: z
    .union([z.instanceof(File), z.undefined()])
    .refine((file) => file !== undefined, "File is required.")
    .refine(
      (file) =>
        file === undefined || file.size <= MAX_FILE_SIZE_MB * 1024 * 1024,
      {
        message: `File size must be less than ${MAX_FILE_SIZE_MB}MB.`,
      }
    )
    .refine((file) => file === undefined || file.type === "application/pdf", {
      message: "Only PDF files are allowed.",
    }),
});
