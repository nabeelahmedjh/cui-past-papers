import { Input } from "@/components/ui/input";
import { addFormSchema } from "./addFormSchema";
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

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { SuccessAlert } from "./SuccessAlert";
import { FailedAlert } from "./FailedAlert";

export default function AddForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failedAlert, setfailedAlert] = useState(false);
  const [failedAlertMessage, setfailedAlertMessage] = useState(null);

  const form = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedIn: "",
      file: null,
    },
  });

  const handleFileChange = (event) => {
    event.preventDefault();
    event.target.classList.remove("bg-accent");
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  async function onSubmit(values: z.infer<typeof addFormSchema>) {
    if (values && selectedFile) {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("linkedIn", values.linkedIn);
      formData.append("file", selectedFile);
      console.log("Form Values: ", formData);

      try {
        const response = await axios.post("/submissions/", formData);
        console.log("Server Response: ", response.data);
        if (response.status === 201) {
          // alert(
          //   "Your submission is sent successfully and will be approved soon."
          // );
          setSuccessAlert(true);

          // if (!successAlert) {
          //   window.location.reload();
          // }
        }
        // Handle the server response as needed
      } catch (error) {
        console.log("Error uploading form:", error);

        if (error.response.status === 400) {
          const errorMessage = error.response.data
            ? error.response.data.file[0]
            : "Please check your form again";
          // alert(errorMessage);
          setfailedAlert(true);
          setfailedAlertMessage(errorMessage);
        }
      }

      form.reset({
        name: values.name,
        email: values.email,
        linkedIn: values.linkedIn,
        file: null,
      });
    }
  }

  return (
    <div className=" flex justify-center mx-4 mb-8">
      <div>
        <h1 className=" w-full text-2xl mb-8">Add Submission</h1>
        {successAlert && <SuccessAlert />}
        {failedAlert && <FailedAlert message={failedAlertMessage} />}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ali" {...field} />
                  </FormControl>
                  <FormDescription>Enter your name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ali@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>Add your email address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.linkedin.com/in/ali"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter your LinkedIn Profile URL here
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload PDF</FormLabel>
                  <FormControl>
                    <Input
                      className="cursor-pointer file:text-transparent file:absolute before:pb-[5%] h-52 pl-[20%] pt-[5%] before:w-24 before:ml-[20%] before:content-uploadIcon after:text-primary after:mt-2 after:content-['Drag_&_drop_your_files_or_Browse'] "
                      type="file"
                      accept="application/pdf"
                      {...field}
                      onChange={handleFileChange}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.target.classList.add("bg-accent"); // This will be your Tailwind CSS class
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        e.target.classList.remove("bg-accent"); // This will be your Tailwind CSS class
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Only PDF files are accepted and max file size is 30MB
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-1/2 ml-[25%]" type="submit">
              Add Submission
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
