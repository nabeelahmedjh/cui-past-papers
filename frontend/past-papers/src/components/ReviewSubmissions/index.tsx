import AdobePdf from "./AdobePdf";
import ReviewForm from "./ReviewForm/ReviewForm";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewSubmissions() {
  // Set HTML Document Title
  useEffect(() => {
    document.title = "Review Submissions";
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submissions, setSubmissions] = useState<any[]>([]);

  const [displayedSubmissionIndex, setDisplayedSubmissionIndex] =
    useState<number>(0);

  const pdfUrl: string = `${import.meta.env.VITE_DJANGO_SERVER_URL}${
    submissions[displayedSubmissionIndex]?.file || ""
  }`;

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    if (submissions.length > 0) {
      setDisplayedSubmissionIndex(0);
    }
  }, [submissions]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get("/submissions/");
      const data = response.data;
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
    setIsLoading(false);
  };

  const delSubmission = async () => {
    if (submissions.length > 0) {
      const submissionId = submissions[displayedSubmissionIndex]?.id;
      if (submissionId) {
        try {
          console.log(`Submission with ID ${submissionId} declined`);

          const response = await axios.delete(`/submissions/${submissionId}`);
          if (response.status === 204) {
            console.log(
              `Submission with ID ${submissionId} deleted successfully`
            );
          } else {
            console.error(
              `Failed to delete submission with ID ${submissionId}`
            );
          }
        } catch (error) {
          console.error(
            `Error declining or deleting submission with ID ${submissionId}:`,
            error
          );
        }
      }
    }
  };

  const handleDeclineAndDelete = async () => {
    await delSubmission();
    fetchSubmissions();
  };

  const handleNext = async (formData) => {
    if (submissions.length > 0) {
      const submissionId = submissions[displayedSubmissionIndex]?.id;
      if (submissionId) {
        try {
          console.log("Form data:", formData);

          const response = await axios.post("/past-papers/", formData);
          console.log(response.data);
          if (response.status >= 200 && response.status < 300) {
            console.log("Form submitted successfully");
            // await delSubmission();
            fetchSubmissions();
          } else {
            console.error(
              "Form submission failed with status:",
              response.status
            );
          }
        } catch (error) {
          console.log("Form submission failed:", error.response.data);
        }
      }
    }
  };

  if (isLoading) {
    return <h1 className="text-4xl ml-[42%]">Loading...</h1>;
  }

  return (
    <>
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
            <h1 className="text-2xl mr-[42%] mt-[5%]">
              No submissions left to review
            </h1>
          )}
        </div>
      )}
    </>
  );
}
