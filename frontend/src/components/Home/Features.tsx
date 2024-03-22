import download from "../../assets/download.svg";
import search from "../../assets/search.svg";
import contribute_more from "../../assets/contribute_more.svg";
import view from "../../assets/view.svg";

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

export default function Features() {
  const features = [
    {
      icon: download,
      title: "Download paper PDF",
      description: "",
    },
    {
      icon: search,
      title: "Search/Filter papers",
      description: "",
    },
    {
      icon: contribute_more,
      title: "Contribute more papers",
      description: "",
    },
    {
      icon: view,
      title: "View papers in Browser",
      description: "",
    },
  ];

  return (
    <>
      <h1 className="max-w-5xl mx-auto text-5xl text-center mt-32 mb-16">
        Features
      </h1>
      <div className="max-w-5xl lg:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-8 mx-16 justify-items-center gap-16 sm:gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center gap-2">
            <img src={feature.icon} className="w-32 h-32" />
            <h3 className="text-lg inline">{feature.title}</h3>
            {feature.description && <p>{feature.description}</p>}
          </div>
        ))}
      </div>
    </>
  );
}
