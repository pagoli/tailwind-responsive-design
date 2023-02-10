import React from "react";
import { Feature_item } from "./Feature_item";

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
          <Feature_item
            num="1"
            featureHeading="Birdy birdy birdy"
            description="Put a bird on it af vibecession sustainable aesthetic bicycle
              rights everyday carry. Bushwick salvia polaroid beard artisan
              green juice tousled organic schlitz pok pok master cleanse plaid
              church-key big mood listicle. Yr scenester selfies, williamsburg
              affogato semiotics crucifix pok pok microdosing squid."
          />

          {/* List Item 2 */}
          <Feature_item
            num="2"
            featureHeading="Very chirpy things"
            description="Put a bird on it af vibecession sustainable aesthetic bicycle
              rights everyday carry. Bushwick salvia polaroid beard artisan
              green juice tousled organic schlitz pok pok master cleanse plaid
              church-key big mood listicle. Yr scenester selfies, williamsburg
              affogato semiotics crucifix pok pok microdosing squid."
          />

          {/* List Item 3 */}
          <Feature_item
            num="3"
            featureHeading="Chirpy birds hooray!"
            description="Put a bird on it af vibecession sustainable aesthetic bicycle
              rights everyday carry. Bushwick salvia polaroid beard artisan
              green juice tousled organic schlitz pok pok master cleanse plaid
              church-key big mood listicle. Yr scenester selfies, williamsburg
              affogato semiotics crucifix pok pok microdosing squid."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
