const Feature_item = ({ num, featureHeading, description }) => {
  return (
    <>
      {/* List Item 1 */}
      <div className="flex flex-col space-y-6 md:max-w-lg md:space-y-0 lg:max-w-lg xl:max-w-xl">
        {/* Heading */}
        <div className="rounded-l-full bg-lightGreen md:bg-transparent flex flex-wrap">
          <div className="flex items-center space-x-2 flex-wrap ">
            <div className="px-4 py-2 text-white bg-lightPink hover:bg-lightGreen hover:text-black rounded-full md:font-bold md:py-1 md:block lg:text-lg">
              {`0${num}`}
            </div>

            <h3 className="text-xl font-bold md:mb-4 md:hidden  ">
              {featureHeading}
            </h3>
          </div>
          <div>
            <h3 className="hidden text-xl font-bold hover:underline hover:underline-offset-8 md:pl-2 md:block md:text-2xl  ">
              {featureHeading}
            </h3>
          </div>
        </div>
        <p className="text-lightPink text-lg lg:text-xl md:py-4">
          {description}
        </p>
      </div>
    </>
  );
};

export { Feature_item };
