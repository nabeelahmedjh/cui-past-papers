import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ContCard from "./ContCard";

function App() {
  const [contributors, setContributors] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef();

  useEffect(() => {
    fetchContributors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [contributors]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && nextPageUrl && !isLoading) {
      fetchMoreContributors();
    }
  };

  const fetchContributors = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/contributors?page_size=12");
      setContributors(response.data.results);
      setNextPageUrl(response.data.next);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching contributors:", error);
    }
  };

  const fetchMoreContributors = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(nextPageUrl);
      setContributors((prevContributors) => [
        ...prevContributors,
        ...response.data.results,
      ]);
      setNextPageUrl(response.data.next);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching more contributors:", error);
    }
  };

  return (
    <div className="contributors flex flex-col">
      <h1 className="self-center text-4xl font-monsterrat font-medium ">
        Contributors
      </h1>
      <div className="self-center max-w-5xl w-full">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 m-8">
            {contributors.map((card) => (
              <ContCard
                key={card.id}
                name={card.name}
                image={`https://api.dicebear.com/6.x/croodles/svg?scale=150&seed=${card.id}`}
                linkedIn={card.linkedIn}
              />
            ))}
          </div>
          <div ref={observerRef}>
            {isLoading && <p className="text-center text-xl">Loading...</p>}
          </div>
          {!isLoading && nextPageUrl === null && (
            <p className="text-center text-3xl pb-8">No more contributors.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
