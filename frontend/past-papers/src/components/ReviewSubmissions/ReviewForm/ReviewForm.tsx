import { reviewFormSchema } from "./reviewFormSchema";
import ConfirmDialogue from "./ConfirmDialogue";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CgSpinner } from "react-icons/cg";
import { IconContext } from "react-icons";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
////////////////////////////////////////

export default function ReviewForm({
  handleNext,
  handleDeclineAndDelete,
  submissionId,
  pdfPath,
  isDialogueOpen,
  isDeclining,
  isSubmitting,
}) {
  const form = useForm<z.infer<typeof reviewFormSchema>>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      course_code: "",
      year: "",
      instructor_name: "",
      course_title: "",
    },
  });

  function onSubmit(values: z.infer<typeof reviewFormSchema>) {
    const formData = {
      course_code: values.course_code,
      year: values.year,
      course_title: values.course_title,
      instructor_name: values.instructor_name,
      campus: values.campus,
      exam_type: values.exam_type,
      submission_id: submissionId,
      file: pdfPath,
    };
    handleNext(formData);
    form.reset({
      course_code: "",
      year: "",
      instructor_name: "",
      course_title: "",
      campus: values.campus,
      exam_type: values.exam_type,
    });
  }

  return (
    <div className="lg:w-[60%] w-full">
      <div className=" sm:w-1/2 sm:mx-auto my-8 mx-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="course_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Code</FormLabel>
                  <FormControl>
                    <Input placeholder="CSC356" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add course code present on past paper
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <FormControl>
                    <Input placeholder="2023" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add Year present on past paper
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instructor_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Instructor</FormLabel>
                  <FormControl>
                    <Input placeholder="Zeeshan Ali" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add course Instructor present on past paper
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Human Computer Interaction"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add course title present on past paper
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="campus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Campus" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ISB">Islamabad</SelectItem>
                      <SelectItem value="LHR">Lahore</SelectItem>
                      <SelectItem value="SWL">Sahiwal</SelectItem>
                      <SelectItem value="abbottabad">Abbottabad</SelectItem>
                      <SelectItem value="WAH">Wah</SelectItem>
                      <SelectItem value="attock">Attock</SelectItem>
                      <SelectItem value="vehari">Vehari</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select campus of the past paper.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="exam_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="M">Mid term</SelectItem>
                      <SelectItem value="T">Terminal</SelectItem>
                      <SelectItem value="S1">Sessional 1</SelectItem>
                      <SelectItem value="S2">Sessional 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select exam type of the past paper.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button disabled={isSubmitting} type="submit">
                Accept{" "}
                {isSubmitting && (
                  <IconContext.Provider
                    value={{
                      size: "1.25rem",
                      className: "ml-1 animate-spin",
                    }}
                  >
                    <CgSpinner />
                  </IconContext.Provider>
                )}
              </Button>
              <ConfirmDialogue
                handleDeclineAndDelete={handleDeclineAndDelete}
                isDialogueOpen={isDialogueOpen}
                isDeclining={isDeclining}
                isSubmitting={isSubmitting}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
