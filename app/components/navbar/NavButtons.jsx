import React from "react";

const NavButtons = () => {
  return (
    <div className="flex flex-col  gap-[41px] lg:gap-0 lg:flex-row items-center justify-between">
      {/* secondary buttons */}
      <div className="flex flex-col w-full lg:w-auto lg:flex-row  gap-4 ">
        <button className="text-black text-start font-medium text-2xl py-2 px-5 rounded-[10px] hover:bg-secondary/20 lg:hover:bg-primary xl:text-3xl">
          Home
        </button>
        <button className="text-black text-start font-medium text-2xl py-2 px-5 rounded-[10px] hover:bg-secondary/20 lg:hover:bg-primary xl:text-3xl">
          Title1
        </button>
        <button className="text-black text-start font-medium text-2xl py-2 px-5 rounded-[10px] hover:bg-secondary/20 lg:hover:bg-primary xl:text-3xl">
          Title2
        </button>
        <button className="text-black text-start font-medium text-2xl py-2 px-5 rounded-[10px] hover:bg-secondary/20 lg:hover:bg-primary xl:text-3xl">
          Pricing
        </button>
      </div>

      {/* primary buttons */}
      <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-5 xl:gap-14 ">
        <button className="text-white font-medium text-lg py-2 px-[20px] xl:text-2xl xl:py-4 w-full lg:w-[175px] bg-secondary rounded-[10px]">
          Buy Now
        </button>
        <button className="text-white font-medium text-lg py-2 px-[20px] xl:text-2xl xl:py-4 w-full lg:w-[175px] bg-secondary rounded-[10px]">
          Help
        </button>
        <button className="text-white font-medium text-lg py-2 px-[20px] xl:text-2xl xl:py-4 w-full lg:w-[175px] bg-secondary rounded-[10px]">
          Admin
        </button>
      </div>
    </div>
  );
};

export default NavButtons;
