import { useEffect } from "react";

import Hero from "./Hero";
import TopContributors from "./TopContributors";

export default function Home() {
  // Set HTML Document Title
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Hero />
      <TopContributors />
      <h1 className="my-16 text-center text-3xl">Footer Dummy</h1>
    </>
  );
}
