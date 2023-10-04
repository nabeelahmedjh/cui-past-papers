import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";

import "./TopCard.css";

import { CgSpinner } from "react-icons/cg";
import { IconContext } from "react-icons";

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

export default function TopContributors({ contributors, isLoading }) {
  return (
    <>
      <h1 className="text-center text-4xl mt-32 mb-16">Top contributors</h1>
      {isLoading ? (
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
      ) : (
        <div className="mx-2 sm:mx-8 flex flex-col relative min-[740px]:flex-row sm:justify-center mt-8 gap-8 items-center">
          {contributors.map((card) => (
            <TopCard
              key={card.id}
              name={card.name}
              image={`https://api.dicebear.com/6.x/croodles/svg?scale=150&seed=${card.id}`}
              linkedIn={card.linkedIn}
            />
          ))}
        </div>
      )}
    </>
  );
}

function TopCard({
  image,
  name,
  linkedIn,
}: {
  image: string;
  name: string;
  linkedIn: string;
}) {
  return (
    <>
      <div className="max-w-[15rem] w-2/3 sm:w-auto flex-auto gradient-card border rounded-lg hover:shadow-lg dark:shadow-slate-700/50 dark:hover:shadow-slate-700/30 transition ease-in-out delay-75 duration-200 hover:scale-110 ">
        <Card className="border-0 p-2">
          <CardHeader className="items-center">
            <Avatar className="mb-8 h-32 w-32">
              <AvatarImage draggable={false} src={image} />
              <AvatarFallback className=" text-2xl">😎</AvatarFallback>
            </Avatar>

            <CardTitle className="hover:cursor-default text-xl sm:text-2xl font-monsterrat sm:font-normal capitalize">
              {name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="mt-2 justify-center rounded-lg">
            <a target="_blank" href={linkedIn}>
              <LinkedInLogoIcon className="w-8 h-8 hover:text-sky-700" />
            </a>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
