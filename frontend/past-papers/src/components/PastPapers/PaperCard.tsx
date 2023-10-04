import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link } from "react-router-dom";

export default function PaperCard({ papers }: { papers: [] }) {
  const examTypeChoices: Record<string, string> = {
    M: "Midterm",
    T: "Terminal",
    S1: "Sessional 1",
    S2: "Sessional 2",
  };

  function getExamTypeName(examTypeCode: string) {
    return examTypeChoices[examTypeCode] || "Unknown Exam Type";
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Exam</TableHead>
            <TableHead className="hidden sm:table-cell">Year</TableHead>
            <TableHead className="sm:pl-10">PDF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {papers.map(
            (paper: {
              id: number;
              course_code: string;
              course_title: string;
              instructor_name: string;
              exam_type: string;
              year: number;
              campus: string;
            }) => (
              <TableRow key={paper.id}>
                <TableCell className="font-medium">
                  {paper.course_title}
                </TableCell>
                <TableCell className="capitalize">
                  {paper.instructor_name}
                </TableCell>
                <TableCell className="capitalize">
                  {getExamTypeName(paper.exam_type)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {paper.year}
                </TableCell>
                <TableCell>
                  <Link
                    className=" text-primary sm:text-inherit sm:hover:ring-4 sm:p-2 sm:ring-1 sm:rounded-full"
                    to={`/past-papers/pdf-viewer/${paper.id}`}
                    state={paper}
                  >
                    View PDF
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}
