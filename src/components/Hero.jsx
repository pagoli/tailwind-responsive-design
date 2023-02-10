import React from "react";
import geese_flying from "../assets/geese_flying_by_Gary_Bendig.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse px-3 md:px-6 items-center mx-auto mt-6 md:flex-row md:space-y-0 md:gap-10 lg:gap-20 xl:gap-0">
        {/* LEFT SIDE */}
        <div className="flex flex-col mb-32-space-y-12 md:w-1/2 xl:pl-20 pl-0 pt-12 md:pt-0">
          <h1 className="max-w-md text-center text-4xl font-bold md:text-5xl md:text-left">
            The early bird catches the work.
          </h1>
          <p className="max-w-md text-center text-2xl pt-8 text-lightPink leading-8 md:text-left">
            We as bird watchers know, that punctuality is key to achieve the
            best results.
          </p>
          <div className="flex justify-center md:justify-start pt-8 text-xl">
            <a
              href="#"
              className="p-2 font-bold text-white bg-lightPink rounded-full hover:bg-lightGreen hover:text-black"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="w-full pl-0 sm:pl-8 md:pl-0 md:w-1/2 hover:scale-105 cursor-pointer">
          <img src={geese_flying} alt="flock of flying geese" />
          <p className="text-sm text-slate-500 pt-4">
            Picture by Gary Bendig via Unsplash
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
