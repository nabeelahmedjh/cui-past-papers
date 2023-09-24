// import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { LinkedInLogoIcon } from "@radix-ui/react-icons";

// /////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////

// export default function TopContributors() {
//   const contributors = [
//     {
//       id: 2,
//       name: "Ali",
//       linkedIn: "https://linkedin.com/ali",
//     },
//     {
//       id: 3,
//       name: "Usman ali",
//       linkedIn: "https://linkedin.com/usman",
//     },
//     {
//       id: 4,
//       name: "zeeshan",
//       linkedIn: "https://linkedin.com/zeeshan",
//     },
//   ];

//   return (
//     <div>
//       Our Top Contributors
//       <TopCard />
//       {contributors.map((card) => (
//         <ContCard
//           key={card.id}
//           name={card.name}
//           image={`https://api.dicebear.com/6.x/croodles/svg?scale=150&seed=${card.id}`}
//           linkedIn={card.linkedIn}
//         />
//       ))}
//     </div>
//   );
// }

// function TopCard() {
//   return (
//     <>
//       <div className="flex items-center w-90 mx-auto max-w-22em relative p-30% px-2 box-border text-white bg-black bg-clip-padding-box border-solid border-5px border-transparent rounded-1em">
//         <div className="absolute top-0 right-0 bottom-0 left-0 z-[-1] m-[-5px] rounded-inherit bg-gradient-to-r from-red-500 to-orange-500"></div>
//         <h1>I am the content</h1>
//       </div>
//     </>
//   );
// }

// function ContCard({
//   image,
//   name,
//   linkedIn,
// }: {
//   image: string;
//   name: string;
//   linkedIn: string;
// }) {
//   return (
//     <div className="border rounded-lg shadow-md hover:shadow-lg dark:shadow-slate-700/50 dark:hover:shadow-slate-700/30 transition ease-in-out delay-75 duration-200 hover:scale-110 ">
//       <Card className="border-0">
//         <CardHeader className="items-center">
//           <Avatar className=" mb-4 h-24 w-24">
//             <AvatarImage draggable={false} src={image} />
//             <AvatarFallback className=" text-xl">😎</AvatarFallback>
//           </Avatar>

//           <CardTitle className=" hover:cursor-default text-md sm:text-2xl font-monsterrat sm:font-normal capitalize">
//             {name}
//           </CardTitle>
//         </CardHeader>
//         <CardFooter className="justify-center rounded-lg">
//           <a target="_blank" href={linkedIn}>
//             <LinkedInLogoIcon className="w-8 h-8 hover:text-sky-700" />
//           </a>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
