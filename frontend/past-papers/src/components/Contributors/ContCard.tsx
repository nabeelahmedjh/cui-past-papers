import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

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
    <div>
      <Card>
        <CardHeader className="items-center">
          <Avatar className="mb-4">
            <AvatarImage src={image} />
            <AvatarFallback className=" text-xl">😎</AvatarFallback>
          </Avatar>

          <CardTitle className="text-xs sm:text-inherit">{name}</CardTitle>
        </CardHeader>
        <CardFooter className="justify-center">
          <Button className=" rounded-full">
            <a href={linkedIn}>
              <LinkedInLogoIcon className="w-6 h-6" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
