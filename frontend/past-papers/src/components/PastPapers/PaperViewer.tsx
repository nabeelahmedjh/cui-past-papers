import AdobePDF from "../ReviewSubmissions/AdobePdf";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PaperViewer() {
  const [paperData, setPaperData] = useState();
  const [url, setUrl] = useState(``);

  const paperId = useParams().id;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/past-papers/${paperId}`);
        setPaperData(response.data);
        setUrl(
          `${import.meta.env.VITE_DJANGO_SERVER_URL}${response.data.file}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [paperId]);

  const campusChoices = {
    ISB: "Islamabad",
    LHR: "Lahore",
    SWL: "Sahiwal",
    abbottabad: "Abbottabad",
    WAH: "Wah",
    attock: "Attock",
    vehari: "Vehari",
    virtual: "Virtual",
  };

  const examTypeChoices = {
    M: "Midterm",
    T: "Terminal",
    S1: "Sessional 1",
    S2: "Sessional 2",
  };

  function getCampusName(campusCode) {
    return campusChoices[campusCode] || "Unknown Campus";
  }

  function getExamTypeName(examTypeCode) {
    return examTypeChoices[examTypeCode] || "Unknown Exam Type";
  }

  return (
    paperData && (
      <>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 border-2 rounded-sm p-2">
            <div className="flex gap-2">
              <p>
                {paperData.course_code.toUpperCase()}, {paperData.course_title}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="capitalize">{paperData.instructor_name}</p>
            </div>
            <div className="flex gap-2">
              <p>{getExamTypeName(paperData.exam_type)}</p>
              <p>{paperData.year}</p>
              <p>{getCampusName(paperData.campus)}</p>
            </div>
            <div className="flex gap-2">
              <p>
                <a className="hover:text-primary" href={url} target="_blank">
                  Download PDF
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="sm:w-[90%] m-[5%] ">
          <AdobePDF url={url} />
        </div>
      </>
    )
  );
}
