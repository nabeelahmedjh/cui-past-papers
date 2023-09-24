import hero_education_vector from "../../assets/hero_education_vector.svg";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row  justify-center gap-16 m-8 max-w-5xl lg:m-auto">
      <div className="sm:self-end uppercase flex-shrink font-lora text-5xl md:text-7xl">
        <h1>get</h1>
        <h1>good</h1>
        <h1>grades</h1>
      </div>
      <div>
        <img
          src={hero_education_vector}
          alt="Illustration of a person standing on educational books."
        />
      </div>
    </div>
  );
}
