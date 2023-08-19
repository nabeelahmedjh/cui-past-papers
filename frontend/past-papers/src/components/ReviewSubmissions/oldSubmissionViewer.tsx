// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SubmissionViewer: React.FC = () => {
//   const [submissions, setSubmissions] = useState<any[]>([]);
//   const [displayedSubmission, setDisplayedSubmission] = useState<any | null>(
//     null
//   );

//   axios.defaults.baseURL = "http://localhost:8000/api";

//   useEffect(() => {
//     fetchSubmissions();
//   }, []);

//   useEffect(() => {
//     if (submissions.length > 0) {
//       setDisplayedSubmission(submissions[0]);
//     }
//   }, [submissions]);

//   const fetchSubmissions = async () => {
//     try {
//       const response = await axios.get("/submissions");
//       const data = response.data;
//       setSubmissions(data);
//     } catch (error) {
//       console.error("Error fetching submissions:", error);
//     }
//   };

//   const handleNext = async () => {
//     if (submissions.length === 1) {
//       await fetchSubmissions();
//     }

//     if (submissions.length > 0) {
//       const submissionToPost = {
//         course_code: "CSC123",
//         course_title: "Programming Fundamentals",
//         instructor_name: "Shah Zaib",
//         campus: "SWL",
//         exam_type: "T",
//       };

//       try {
//         const response = await axios.post(
//           "/past-papers",
//           submissionToPost
//         );
//         if (response.status >= 200 && response.status < 300) {
//           console.log("Form submitted successfully");
//         } else {
//           console.error("Form submission failed with status:", response.status);
//         }
//       } catch (error) {
//         console.error("Form submission failed:", error);
//       }

//       if (submissions.length === 1) {
//         // Display the new submission before removing it
//         setDisplayedSubmission(submissions[0]);
//       } else {
//         // Remove the first submission and update displayed submission
//         setSubmissions((prevSubmissions) => prevSubmissions.slice(1));
//         setDisplayedSubmission(submissions[1]);
//       }
//     }
//   };

//   return (
//     <div>
//       {displayedSubmission && (
//         <div>
//           <h2>{displayedSubmission.name}</h2>
//           <p>
//             LinkedIn:{" "}
//             <a href={displayedSubmission.linkedIn}>
//               {displayedSubmission.linkedIn}
//             </a>
//           </p>
//           <p>Uploaded at: {displayedSubmission.uploaded_at}</p>
//           <p>
//             File:{" "}
//             <a
//               href={displayedSubmission.file}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View PDF
//             </a>
//           </p>
//         </div>
//       )}

//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default SubmissionViewer;
