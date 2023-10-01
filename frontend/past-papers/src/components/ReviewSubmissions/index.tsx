import { useNavigate } from "react-router-dom";
import AdobePdf from "./AdobePdf";
import ReviewForm from "./ReviewForm/ReviewForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

export default function ReviewSubmissions() {
  // Set HTML Document Title
  useEffect(() => {
    document.title = "Review Submissions";
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDeclining, setIsDeclining] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDialogueOpen, setIsDialogueOpen] = useState<boolean>(true);
  const [submissions, setSubmissions] = useState<any[]>([]);

  const [displayedSubmissionIndex, setDisplayedSubmissionIndex] =
    useState<number>(0);

  const pdfUrl: string = `${import.meta.env.VITE_DJANGO_SERVER_URL}${
    submissions[displayedSubmissionIndex]?.file || ""
  }`;

  axios.defaults.baseURL = `${import.meta.env.VITE_DJANGO_SERVER_URL}/api`;

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    if (submissions.length > 0) {
      setDisplayedSubmissionIndex(0);
    }
  }, [submissions]);

  const authToken = Cookies.get("authToken");
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (!authToken) {
      // If authToken is not valid, redirect to the login page
      navigate("/sensei");
    }
  }, [authToken, navigate]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get("/submissions/", {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      const data = response.data;
      setSubmissions(data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // If the server returns a 403 Forbidden response, it means the authToken is invalid
        // Delete the authToken cookie
        Cookies.remove("authToken");

        // Redirect to the login page
        navigate("/sensei");
      } else {
        console.error("Error fetching submissions:", error);
      }
    }
    setIsLoading(false);
  };

  const delSubmission = async () => {
    if (submissions.length > 0) {
      const submissionId = submissions[displayedSubmissionIndex]?.id;
      if (submissionId) {
        try {
          console.log(`Submission with ID ${submissionId} pending processing`);

          const response = await axios.delete(`/submissions/${submissionId}`, {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          });
          if (response.status < 300 && response.status >= 200) {
            console.log(
              `Submission with ID ${submissionId} deleted successfully`
            );
            toast.success("Submission Deleted!");
          } else {
            console.log(`Failed to delete submission with ID ${submissionId}`);
            toast.error("Error occurred while processing submission.");
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            // If the server returns a 403 Forbidden response, it means the authToken is invalid
            // Delete the authToken cookie
            Cookies.remove("authToken");

            // Redirect to the login page
            navigate("/sensei");
          } else {
            console.error(
              `Error declining or deleting submission with ID ${submissionId}:`,
              error
            );
            toast.error("Something went wrong, try again!");
          }
        }
      }
    }
  };

  const handleDeclineAndDelete = async () => {
    setIsDeclining(true);
    setIsDialogueOpen(false);
    await delSubmission();
    setIsDialogueOpen(true);
    setIsDeclining(false);
    fetchSubmissions();
  };

  const handleNext = async (formData) => {
    if (submissions.length > 0) {
      const submissionId = submissions[displayedSubmissionIndex]?.id;
      if (submissionId) {
        setIsSubmitting(true);
        try {
          console.log("Form data:", formData);

          const response = await axios.post("/past-papers/", formData, {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          });
          console.log(response.data);
          if (response.status >= 200 && response.status < 300) {
            console.log("Form submitted successfully");
            toast.success("Submission Accepted!");
            // await delSubmission();
            fetchSubmissions();
          } else {
            console.error(
              "Form submission failed with status:",
              response.status
            );
            toast.error("Error occurred while processing submission.");
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            // If the server returns a 403 Forbidden response, it means the authToken is invalid
            // Delete the authToken cookie
            Cookies.remove("authToken");

            // Redirect to the login page
            navigate("/sensei");
          } else {
            console.log("Form submission failed:", error.response.data);
            toast.error("Something went wrong, try again!");
          }
        }
        setIsSubmitting(false);
      }
    }
  };

  if (isLoading) {
    return <h1 className="text-4xl ml-[42%]">Loading...</h1>;
  }

  return (
    <>
      <ToastContainer />
      {!isLoading && (
        <div className="lg:flex lg:gap-5 lg:justify-end">
          {submissions.length > 0 ? (
            <>
              {pdfUrl && (
                <ReviewForm
                  pdfPath={submissions[displayedSubmissionIndex]?.file || ""}
                  submissionId={submissions[displayedSubmissionIndex]?.id}
                  handleNext={handleNext}
                  handleDeclineAndDelete={handleDeclineAndDelete}
                  isDialogueOpen={isDialogueOpen}
                  isDeclining={isDeclining}
                  isSubmitting={isSubmitting}
                />
              )}
              {pdfUrl && (
                <div className="lg:mr-8 mb-8  w-full lg:w-[70%]">
                  <h1 className=" text-center mb-2 text-xl">
                    {submissions[displayedSubmissionIndex]?.name &&
                      submissions[displayedSubmissionIndex]?.email &&
                      `Submitted by ${submissions[displayedSubmissionIndex]?.name} (${submissions[displayedSubmissionIndex]?.email})`}
                  </h1>
                  <AdobePdf url={pdfUrl} />
                </div>
              )}
            </>
          ) : (
            <h1 className="text-2xl text-center sm:mr-[37%] mt-[40%] sm:mt-[15%]">
              No submissions left to review
            </h1>
          )}
        </div>
      )}
    </>
  );
}
