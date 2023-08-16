import axios from "axios";
// import { useEffect } from "react";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default async function getSubmissions() {
  try {
    const response = await axios.get("/submissions");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// useEffect(() => {
//     function getSubmissions() {
//         try {
//           const response = await axios.get("/submissions");
//           console.log(response);
//         } catch (error) {
//           console.error(error);
//         }
//       }
// },[])
