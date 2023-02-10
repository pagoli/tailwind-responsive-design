import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-md px-5 mx-auto mt-32 text-center overflow-hidden md:overflow-auto md:container">
        <h2 className="text-4xl w-fit mx-auto font-bold text-center border-b-4 border-lightGreen">
          Why do you use Sparrow & Friends?
        </h2>

        <div className="flex flex-nowrap lg:justify-center mt-20 pb-5overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-6">
          {/* Testimonial 1 */}
          <TestimonialsCard
            imgSource="https://api.lorem.space/image/face?w=150&h=150&hash=2D297A22"
            endorserName="Thomas D."
            testimonial="This is incredible. I had so much fun!"
          />

          {/* Testimonial 2 */}
          <TestimonialsCard
            imgSource="https://api.lorem.space/image/face?w=150&h=150&hash=225E6693"
            endorserName="Mary Ann Q."
            testimonial="Without Sparrow & Friends my live would be less fulfilling."
          />

          {/* Testimonial 3 */}
          <TestimonialsCard
            imgSource="https://api.lorem.space/image/face?w=150&h=150&hash=8B7BCDC2"
            endorserName="Apu N."
            testimonial="I'm an experienced bird watcher - but Sparrow & Friends
            accelerated my adventures to the next level."
          />
        </div>
      </div>
      <div className="my-16">
        <div className="flex justify-center pt-6 text-xl">
          <a
            href="#"
            className="p-3 font-bold text-white bg-lightPink rounded-full hover:bg-lightGreen hover:text-black"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
