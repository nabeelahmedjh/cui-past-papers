import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "./Hero";
import TopContributors from "./TopContributors";
import Features from "./Features";
import ContributeSteps from "./ContributeSteps";

/////////////////////////////////////////////////
////////////////////////////////////////////////

export default function Home() {
  const [contributors, setContributors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Set HTML Document Title
  useEffect(() => {
    document.title = "Home";
    fetchContributors();
  }, []);

  const fetchContributors = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        "/contributors?page_size=3&order_by=-contribution_count,name"
      );
      setContributors(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching contributors:", error);
    }
  };

  return (
    <>
      <Hero />
      <TopContributors contributors={contributors} isLoading={isLoading} />
      <Features />
      <ContributeSteps />
    </>
  );
}
