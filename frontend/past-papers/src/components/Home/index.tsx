import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  // Set HTML Document Title
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex flex-col items-center lg:mt-48">
      <p className="mb-4 text-xl lg:text-2xl">
        Beginning of something great ( ͡° ͜ʖ ͡°)
      </p>
      <Button
        size="lg"
        onClick={() => alert("No biches for you 👈(ﾟヮﾟ👈)")}
        className=""
      >
        Surprise
      </Button>
    </div>
  );
}
