import { useEffect } from "react";
import ContCard from "./ContCard";

const image: string =
  "https://api.dicebear.com/6.x/croodles/svg?scale=150&seed=12";
const name: string = "Zeeshan Ali";
const linkedIn: string = "https://linkedin.com";

export default function Contributors() {
  // Set HTML Document Title
  useEffect(() => {
    document.title = "Contributors";
  }, []);

  return (
    <div className="contributors flex flex-col">
      <h1>Contributors</h1>
      <div className="self-center max-w-5xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 m-8">
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
          <ContCard name={name} image={image} linkedIn={linkedIn} />
        </div>
      </div>
    </div>
  );
}
