import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/hero.jpg')] bg-no-repeat bg-cover bg-center relative z-10">
      <div className="absolute top-0 w-full h-full bg-linear-to-b md:bg-linear-to-r  from-[#FFFFFF] via-[#FFFFFF95]  to-[#ffffff00] -z-10"></div>

      <div className="max-w-330 mx-auto px-3 py-26 md:py-35 text-center md:text-left text-black">
        <h2 className="text-3xl md:text-[40px] font-bold">
          Find Your <span className="text-[#ED8262]">Perfect Furry</span> <br />{" "}
          <span className="text-[#]">Companion</span> Today
        </h2>
        <p className="mt-4 max-w-140 mx-auto md:mx-0 text-lg md:text-xl">
          Give loving pets a second chance at happiness. Explore adorable dogs,
          cats, birds, rabbits, and more waiting for a caring home.
        </p>

        <Button className={"rounded-md bg-[#ED8262] mt-8"}>Adopt Now</Button>
      </div>
    </div>
  );
};

export default Banner;
