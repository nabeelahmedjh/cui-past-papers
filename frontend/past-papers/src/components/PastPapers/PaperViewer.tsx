import AdobePDF from "../ReviewSubmissions/AdobePdf";

import { useLocation } from "react-router-dom";

export default function PaperViewer() {
  const course = useLocation().state;
  const url = `${import.meta.env.VITE_DJANGO_SERVER_URL}${course.file}` || "";
  console.log(course);
  console.log(url);

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
    <>
      <h1>PDf Viewer</h1>
      <a href={url} target="_blank">
        Download PDF
      </a>
      {course && <AdobePDF url={url} />}
    </>
  );
}
