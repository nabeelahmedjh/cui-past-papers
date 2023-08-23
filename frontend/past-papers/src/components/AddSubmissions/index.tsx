import { useEffect } from "react";
import AddForm from "./AddForm";

export default function AddSubmissions() {
  useEffect(() => {
    document.title = "Add Submission";
  }, []);
  return (
    <div>
      <AddForm />
    </div>
  );
}
