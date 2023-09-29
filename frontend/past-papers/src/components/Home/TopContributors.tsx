import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";

import "./TopCard.css";

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

export default function TopContributors({ contributors }) {
  return (
    <>
      <h1 className="text-center text-3xl mt-16">Our Top Contributors</h1>
      <div className="mx-2 sm:mx-8 flex flex-col relative sm:flex-row sm:justify-center mt-8 gap-8 items-center">
        {contributors.map((card) => (
          <TopCard
            key={card.id}
            name={card.name}
            image={`https://api.dicebear.com/6.x/croodles/svg?scale=150&seed=${card.id}`}
            linkedIn={card.linkedIn}
          />
        ))}
      </div>
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
