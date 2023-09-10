import * as z from "zod";

const currentYear = new Date().getFullYear();

export const reviewFormSchema = z.object({
  course_code: z
    .string()
    .regex(/^[a-zA-Z]{3}\d{3}$/, "Value should be in the format ABC123"),
  year: z
    .string()
    .regex(/^\d{4}$/, "Value should be in the format 2023")
    .refine(
      (value) => {
        const year = parseInt(value, 10);
        return year >= 2000 && year <= currentYear;
      },
      {
        message: `Year should be between 2000 and ${currentYear}.`,
      }
    ),
  instructor_name: z
    .string()
    .min(3, {
      message: "Instructor name should be more than 3 characters long.",
    })
    .max(50, {
      message: "Instructor name should be less than 50 characters long.",
    }),
  course_title: z
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
  exam_type: z.string({
    required_error: "Please select an exam type.",
  }),
});
