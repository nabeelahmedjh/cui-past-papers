import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "./Hero";
import TopContributors from "./TopContributors";
import Features from "./Features";

/////////////////////////////////////////////////
////////////////////////////////////////////////

export default function Home() {
  const [contributors, setContributors] = useState([]);

  // Set HTML Document Title
  useEffect(() => {
    document.title = "Home";
    fetchContributors();
  }, []);

  const fetchContributors = async () => {
    try {
      const response = await axios.get(
        "/contributors?page_size=3&order_by=-contribution_count,name"
      );
      setContributors(response.data.results);
    } catch (error) {
      console.error("Error fetching contributors:", error);
    }
  };

  return (
    <>
      <Hero />
      <TopContributors contributors={contributors} />
      <Features />
      <h1 className="my-16 text-center text-3xl">Footer Dummy</h1>
    </>
  );
}
