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

export default function AddForm() {
  const [selectedFile, setSelectedFile] = useState(null);

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
        const response = await axios.post(
          "http://127.0.0.1:8000/api/submissions/",
          formData
        );
        console.log("Server Response: ", response.data);
        alert("Form submitted successfully!");
        // Handle the server response as needed
        window.location.reload();
      } catch (error) {
        console.error("Error uploading form:", error);
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
                    <Input
                      type="email"
                      placeholder="ali@gmail.com"
                      {...field}
                    />
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
                      type="url"
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
                      required
                      type="file"
                      accept=".pdf"
                      {...field}
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormDescription>
                    Only PDF files are accepted and max file size is 30MB
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Accept</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
