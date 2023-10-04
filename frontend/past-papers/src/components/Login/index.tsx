import { useForm } from "react-hook-form";
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
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Add error state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in by inspecting the cookie
    const authToken = Cookies.get("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  axios.defaults.baseURL = `${import.meta.env.VITE_DJANGO_SERVER_URL}/auth`;

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const postLogin = async (formData: {
    username: string;
    password: string;
  }) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/login/", formData);
      if (response.status === 200) {
        const authToken = response.data.token;
        console.log("Auth Token:", authToken);

        // Save the authentication token as a session cookie (expires when the browser is closed)
        Cookies.set("authToken", authToken);

        // Set the isLoggedIn state to true upon successful login
        setIsLoggedIn(true);

        // Clear any previous error message
        setError(null);
      } else {
        console.error("Form submission failed with status:", response.status);
        setError("Invalid username or password."); // Set the error message
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Form submission failed:", error.response.data);
      setError("Invalid username or password."); // Set the error message
    }
    setIsSubmitting(false);
  };

  function onSubmit(values: { username: string; password: string }) {
    const formData = {
      username: values.username,
      password: values.password,
    };
    postLogin(formData);
    form.reset({
      username: "",
      password: "",
    });
  }

  // Redirect to /review-submissions if logged in
  if (isLoggedIn) {
    navigate("/review-submissions");
  }

  return (
    <div className="mx-4 sm:w-1/2 sm:m-auto md:max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Display the error message if it exists */}
          {error && <div className="text-red-500">{error}</div>}

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input required placeholder="" {...field} />
                </FormControl>
                <FormDescription>Enter your username</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" required placeholder="" {...field} />
                </FormControl>
                <FormDescription>Enter your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button disabled={isSubmitting} type="submit">
              Login{" "}
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
          </div>
        </form>
      </Form>
    </div>
  );
}
