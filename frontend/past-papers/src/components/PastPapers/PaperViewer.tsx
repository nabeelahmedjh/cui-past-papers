import AdobePDF from "../ReviewSubmissions/AdobePdf";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { CgSpinner } from "react-icons/cg";
import { IconContext } from "react-icons";

export default function PaperViewer() {
  const [paperData, setPaperData] = useState<{
    course_code: string;
    course_title: string;
    instructor_name: string;
    exam_type: string;
    year: number;
    campus: string;
  }>();
  const [url, setUrl] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  const paperId = useParams().id;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`/past-papers/${paperId}`);
        setPaperData(response.data);
        setUrl(
          `${import.meta.env.VITE_DJANGO_SERVER_URL}${response.data.file}`
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [paperId]);

  const campusChoices: Record<string, string> = {
    ISB: "Islamabad",
    LHR: "Lahore",
    SWL: "Sahiwal",
    abbottabad: "Abbottabad",
    WAH: "Wah",
    attock: "Attock",
    vehari: "Vehari",
    virtual: "Virtual",
  };

  const examTypeChoices: Record<string, string> = {
    M: "Midterm",
    T: "Terminal",
    S1: "Sessional 1",
    S2: "Sessional 2",
  };

  function getCampusName(campusCode: string): string {
    return campusChoices[campusCode] || "Unknown Campus";
  }

  function getExamTypeName(examTypeCode: string): string {
    return examTypeChoices[examTypeCode] || "Unknown Exam Type";
  }

  return (
    <>
      {isLoading && (
        <p className="text-center text-xl">
          {" "}
          <IconContext.Provider
            value={{
              size: "4rem",
              className: "ml-1 animate-spin ml-auto mr-0 inline-block",
            }}
          >
            <CgSpinner />
          </IconContext.Provider>
        </p>
      )}

      {!isLoading && paperData && (
        <>
          <div className="flex justify-center">
            <div className="flex flex-col gap-4 border-2 rounded-sm p-2">
              <div className="flex gap-2">
                <p>
                  {paperData.course_code.toUpperCase()},{" "}
                  {paperData.course_title}
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
      )}
    </>
  );
}
