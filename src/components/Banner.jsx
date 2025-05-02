import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[#9538E2] flex justify-center items-center rounded-bl-2xl rounded-br-2xl text-center pb-28 sm:pb-36 md:pb-40 lg:pb-44 xl:pb-48 ">
        <div className="flex flex-col gap-6 justify-center items-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-5xl xl:text-[56px] leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[4.5rem]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base leading-[26px] text-white ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn rounded-3xl bg-white text-[#9538E2] text-base sm:text-lg md:text-xl font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="-mt-28 sm:-mt-40 md:-mt-44 lg:-mt-48 xl:-mt-56 px-12">
        <figure className="max-w-[800px] w-full mx-auto p-4 rounded-2xl border-2 border-[#fff] bg-[rgba(255,255,255,0.3)]">
        <img className="w-full  rounded-2xl " src="banner.jpg" alt="" />
        </figure>
      </div>
    </>
  );
};

export default Banner;
