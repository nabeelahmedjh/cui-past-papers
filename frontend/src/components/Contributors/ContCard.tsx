import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function ContCard({
  image,
  name,
  linkedIn,
}: {
  image: string;
  name: string;
  linkedIn: string;
}) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg dark:shadow-slate-700/50 dark:hover:shadow-slate-700/30 transition ease-in-out delay-75 duration-200 hover:scale-110 ">
      <Card className="border-0">
        <CardHeader className="items-center">
          <Avatar className=" mb-4 h-24 w-24">
            <AvatarImage draggable={false} src={image} />
            <AvatarFallback className=" text-xl">😎</AvatarFallback>
          </Avatar>

          <CardTitle className=" hover:cursor-default text-md sm:text-2xl font-monsterrat sm:font-normal capitalize">
            {name}
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-center rounded-lg">
          <a target="_blank" href={linkedIn}>
            <LinkedInLogoIcon className="w-8 h-8 hover:text-sky-700" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
