import axios from "axios";
import PaperCard from "./PaperCard";
import { useEffect, useState } from "react";

import { ChevronRight, ChevronLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { CgSpinner } from "react-icons/cg";
import { IconContext } from "react-icons";

export default function PastPapers() {
  const [data, setData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState(`/past-papers/`);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [url]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery !== "") {
      setUrl(`/past-papers/?search=${searchQuery}`);
      setIsFiltered(true);
    }
    if (searchQuery === "") {
      setUrl(`/past-papers/`);
      setIsFiltered(false);
    }
  };

  return (
    <div className="flex justify-center">
      {!isLoading && data.results && (
        <div className="max-w-5xl w-full mx-1">
          <div className="flex  justify-center gap-4 mb-8">
            <form
              className="relative w-[60%]  sm:w-[40%] flex border-2 rounded-md"
              onSubmit={handleSubmit}
            >
              <Input
                autoFocus
                className="border-0 rounded-r-none focus-visible:ring-offset-0"
                type="text"
                placeholder="Search using course code, Intructor,..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                className="focus-visible:ring-offset-0 ml-[0.13rem] bg-accent hover:bg-accent/50 border-0 rounded-sm rounded-l-none"
                variant="outline"
                type="submit"
              >
                <Search className="h-6 w-6" />
              </Button>
            </form>
            {isFiltered ? (
              <p
                onClick={() => {
                  setUrl(`/past-papers/`);
                  setSearchQuery("");
                  setIsFiltered(false);
                }}
                className=" text-sm sm:hover:ring-4 cursor-pointer self-center ring-2 rounded-full p-1"
              >
                Remove filter
              </p>
            ) : (
              ""
            )}
          </div>
          {data.results && <PaperCard papers={data.results} />}
          <div className="relative ml-3 mt-4">
            {data.previous && (
              <Button
                className=" absolute hover:bg-inherit sm:hover:bg-accent"
                onClick={() => setUrl(data.previous)}
                variant="outline"
                size="icon"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            {data.next && (
              <Button
                className=" absolute left-12 hover:bg-inherit sm:hover:bg-accent"
                onClick={() => setUrl(data.next)}
                variant="outline"
                size="icon"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}
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
    </div>
  );
}
