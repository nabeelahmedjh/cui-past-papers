import { reviewFormSchema } from "./reviewFormSchema";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

export default function ReviewForm() {
  const form = useForm<z.infer<typeof reviewFormSchema>>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      courseCode: "",
      courseInstructor: "",
      courseTitle: "",
    },
  });

  function onSubmit(values: z.infer<typeof reviewFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(`{
        courseCode: "${values.courseCode.toUpperCase()}",
        courseInstructor: "${values.courseInstructor}",
        courseTitle: "${values.courseTitle}",
        campus: "${values.campus}",
        examType: "${values.examType}",
    }`);
    form.reset({
      courseCode: "",
      courseInstructor: "",
      courseTitle: "",
      campus: values.campus,
      examType: values.examType,
    });
  }

  return (
    <div className="lg:w-[60%] w-full">
      <div className=" sm:w-1/2 sm:mx-auto my-12 mx-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="courseCode"
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
              name="courseInstructor"
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
              name="courseTitle"
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
              name="examType"
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
              <Button type="submit">Accept</Button>
              <Button
                type="button"
                variant={"destructive"}
                onClick={() => alert("Request Declined")}
              >
                Decline
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
