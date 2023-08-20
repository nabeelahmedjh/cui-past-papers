import { useEffect } from "react";
import AddForm from "./AddForm";

export default function AddSubmission() {
  useEffect(() => {
    document.title = "Add Submission";
  }, []);
  return (
    <div>
      <AddForm />
    </div>
  );
}
