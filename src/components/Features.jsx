import React from "react";

const Features = () => {
  return (
    <section id="features" className="mt-0 md:mt-16">
      <div className="container flex flex-col mx-auto px-6 md:px-6 space-y-0 md:space-x-0 md:flex-row md:gap-10 lg:gap-20 xl:gap-0">
        <div className="flex flex-col space-y-8 pl-0 pt-12 md:w-1/2 xl:pl-20  md:pt-0">
          <h2 className="max-w-md text-center font-bold text-4xl md:text-left">
            Chirp! Chirp! Chirp!
          </h2>
          <p className="max-w-md text-center text-lightPink text-2xl  md:text-left md:text-2xl lg:text-3xl">
            Sparrow & Friends is your eco-friendly birding community, providing
            you with the best watching spots and guided tours with the world's
            best bird experts.
          </p>
        </div>
        <div className="flex flex-col space-y-8 pt-12 md:pt-0 md:w-1/2 lg:space-y-10">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-6 md:max-w-lg md:space-y-0 lg:max-w-lg xl:max-w-xl">
            {/* Heading */}
            <div className="rounded-l-full bg-lightGreen md:bg-transparent flex flex-wrap">
              <div className="flex items-center space-x-2 flex-wrap">
                <div className="px-4 py-2 text-white bg-lightPink rounded-full md:font-bold md:py-1 md:block lg:text-lg">
                  01
                </div>

                <h3 className="text-xl font-bold md:mb-4 md:hidden">
                  Birdy birdy birdy
                </h3>
              </div>
              <div>
                <h3 className="hidden text-xl font-bold md:pl-2 md:block md:text-2xl">
                  Birdy birdy birdy
                </h3>
              </div>
            </div>
            <p className="text-lightPink text-lg lg:text-xl md:py-4">
              Put a bird on it af vibecession sustainable aesthetic bicycle
              rights everyday carry. Bushwick salvia polaroid beard artisan
              green juice tousled organic schlitz pok pok master cleanse plaid
              church-key big mood listicle. Yr scenester selfies, williamsburg
              affogato semiotics crucifix pok pok microdosing squid.
            </p>
          </div>

          {/* List Item 2 */}
          <div className="flex flex-col space-y-6 md:max-w-lg md:space-y-0 lg:max-w-lg xl:max-w-xl">
            {/* Heading */}
            <div className="rounded-l-full bg-lightGreen md:bg-transparent flex flex-wrap">
              <div className="flex items-center space-x-2 flex-wrap">
                <div className="px-4 py-2 text-white bg-lightPink rounded-full md:font-bold md:py-1 md:block lg:text-lg">
                  02
                </div>

                <h3 className="text-xl font-bold md:mb-4 md:hidden">
                  Very chirpy things
                </h3>
              </div>
              <div>
                <h3 className="hidden text-xl font-bold md:pl-2 md:block lg:text-2xl">
                  Very chirpy things
                </h3>
              </div>
            </div>
            <p className="text-lightPink text-lg lg:text-xl md:py-4">
              Put a bird on it af vibecession sustainable aesthetic bicycle
              rights everyday carry. Bushwick salvia polaroid beard artisan
              green juice tousled organic schlitz pok pok master cleanse plaid
              church-key big mood listicle. Yr scenester selfies, williamsburg
              affogato semiotics crucifix pok pok microdosing squid.
            </p>
          </div>

          {/* List Item 3 */}
          <div className="flex flex-col space-y-6 md:max-w-lg md:space-y-0 lg:max-w-lg xl:max-w-xl">
            {/* Heading */}
            <div className="rounded-l-full bg-lightGreen md:bg-transparent flex flex-wrap">
              <div className="flex items-center space-x-2 flex-wrap">
                <div className="px-4 py-2 text-white bg-lightPink rounded-full md:font-bold md:py-1 md:block lg:text-lg">
                  03
                </div>

                <h3 className="text-xl font-bold md:mb-4 md:hidden">
                  Chirpy birds hooray!
                </h3>
              </div>
              <div>
                <h3 className="hidden text-xl font-bold md:pl-2 md:block lg:text-2xl">
                  Chirpy birds hooray!
                </h3>
              </div>
            </div>
            <p className="text-lightPink text-lg lg:text-xl md:py-4">
              Put a bird on it af vibecession sustainable aesthetic bicycle
              rights everyday carry. Bushwick salvia polaroid beard artisan
              green juice tousled organic schlitz pok pok master cleanse plaid
              church-key big mood listicle. Yr scenester selfies, williamsburg
              affogato semiotics crucifix pok pok microdosing squid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
