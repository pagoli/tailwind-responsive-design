import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const TestimonialsCard = ({ imgSource, endorserName, testimonial }) => {
  return (
    <>
      <div className="mt-10 flex-none w-[350px] h-80 shadow-lg snap-always snap-center cursor-pointer xl:w-[380px] lg:w-[290px] lg:h-72">
        <div className="flex w-full flex-col items-center p-6 space-y-6 rounded-lg h-full bg-lightGreen hover:text-white hover:bg-lightPink">
          <img
            src={imgSource}
            alt="random user face"
            className="w-16 -mt-14 rounded-full grayscale"
          />
          <h5 className="text-lg font-bold sm:text-3xl md:text-2xl">
            {endorserName}
          </h5>
          <p className="text-xl md:text-lg lg:text-xl">{`${testimonial}`}</p>
        </div>
      </div>
    </>
  );
};

export { TestimonialsCard };
