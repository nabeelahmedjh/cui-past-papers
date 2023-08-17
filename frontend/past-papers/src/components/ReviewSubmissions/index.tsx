import AdobePdf from "./ReviewForm/AdobePdf";
import ReviewForm from "./ReviewForm/ReviewForm";
import getSubmissions from "./getSubmissions";

import { useState } from "react";
import { useEffect } from "react";

export default function ReviewSubmissions() {
  const [pdfPath, setPdfPath] = useState<string>("");
  const pdfUrl: string = `http://localhost:8000${pdfPath}`;
  useEffect(() => {
    async function fetchData() {
      const submissions = await getSubmissions();
      if (submissions) {
        console.log(submissions[0]);
        setPdfPath(submissions[0].file);
        // Do something with the submissions data
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="lg:flex lg:gap-5 lg:justify-end ">
        <ReviewForm />
        {pdfPath && <AdobePdf url={pdfUrl} />}
      </div>
    </>
  );
}
