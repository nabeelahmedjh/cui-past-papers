import * as z from "zod";

const MAX_FILE_SIZE = 30;
const ACCEPTED_IMAGE_TYPES = ["application/pdf"];

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
  // .refine((files) => files?.length == 0, "File is required.")
  // .refine(
  //   (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //   `Max file size is 30MB.`
  // )
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   "Only PDF is accepted"
  // ),
});
