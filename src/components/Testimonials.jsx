import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-md px-5 mx-auto mt-32 text-center overflow-hidden md:overflow-auto md:container">
        <h2 className="text-4xl w-fit mx-auto font-bold text-center border-b-4 border-lightGreen">
          Why do you use Sparrow & Friends?
        </h2>

        <div className="flex flex-nowrap lg:justify-center mt-20 pb-5overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-6">
          {/* Testimonial 1 */}
          <div className="mt-10 flex-none w-[350px] h-80 shadow-lg snap-always snap-center xl:w-[380px] lg:w-[290px] lg:h-72">
            <div className="flex w-full flex-col items-center p-6 space-y-6 rounded-lg h-full bg-lightGreen hover:text-white hover:bg-lightPink">
              <img
                src="https://loremflickr.com/240/240/face?lock=11"
                alt=""
                className="w-16 -mt-14 rounded-full grayscale"
              />
              <h5 className="text-lg font-bold sm:text-3xl md:text-2xl">
                Thomas D.
              </h5>
              <p className="text-xl md:text-lg lg:text-xl">
                "This is incredible. I had so much fun!"
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="mt-10 flex-none w-[350px] h-80 shadow-lg snap-always snap-center xl:w-[380px] lg:w-[290px] lg:h-72">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg h-full bg-lightGreen hover:text-white hover:bg-lightPink">
              <img
                src="https://loremflickr.com/240/240/face?lock=20"
                alt=""
                className="w-16 -mt-14 rounded-full grayscale"
              />
              <h5 className="text-lg font-bold sm:text-3xl md:text-2xl">
                Mary Ann Q.
              </h5>
              <p className="text-xl md:text-lg lg:text-xl">
                "Without Sparrow & Friends my live would be less fulfilling."
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="mt-10 flex-none w-[350px] h-80 shadow-lg snap-always snap-center xl:w-[380px] lg:w-[290px] lg:h-72">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg h-full bg-lightGreen hover:text-white hover:bg-lightPink">
              <img
                src="https://loremflickr.com/240/240/face?lock=1"
                alt=""
                className="w-16 -mt-14 rounded-full grayscale"
              />
              <h5 className="text-lg font-bold sm:text-3xl md:text-2xl">
                Apu N.
              </h5>
              <p className="text-xl md:text-lg lg:text-xl">
                "I'm an experienced bird watcher - but Sparrow & Friends
                accelerated my adventures to the next level."
              </p>
            </div>
          </div>
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
