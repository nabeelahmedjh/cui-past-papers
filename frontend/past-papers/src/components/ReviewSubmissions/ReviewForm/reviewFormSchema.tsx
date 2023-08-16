import * as z from "zod";

export const reviewFormSchema = z.object({
  courseCode: z
    .string()
    .regex(/^[a-zA-Z]{3}\d{3}$/, "Value should be in the format ABC123"),
  courseInstructor: z
    .string()
    .min(3, {
      message: "Instructor name should be more than 3 characters long.",
    })
    .max(50, {
      message: "Instructor name should be less than 50 characters long.",
    }),
  courseTitle: z
    .string()
    .min(3, {
      message: "Course title should be more than 3 characters long.",
    })
    .max(75, {
      message: "Course title should be less than 75 characters long.",
    }),
  campus: z.string({
    required_error: "Please select a campus.",
  }),
  examType: z.string({
    required_error: "Please select an exam type.",
  }),
});
