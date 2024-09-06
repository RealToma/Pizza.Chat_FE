import React from "react";

const NavButtons = ({handleNavClick}) => {
  return (
    <div className="flex flex-col  gap-4 lg:gap-0 lg:flex-row items-center justify-between">
      {/* secondary buttons */}
      <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-2 md:gap-0 xl:gap-4 ">
        <button onClick={()=>handleNavClick('/')} className="text-black text-start font-medium text-[20px] py-2 px-5 rounded-[10px] hover:bg-secondary/20 transition-all duration-300   xl:text-[24px]">
          Home
        </button>
        <button className="text-black text-start font-medium text-[20px] py-2 px-5 rounded-[10px] hover:bg-secondary/20 transition-all duration-300   xl:text-[24px]">
          Title1
        </button>
        <button className="text-black text-start font-medium text-[20px] py-2 px-5 rounded-[10px] hover:bg-secondary/20 transition-all duration-300   xl:text-[24px]">
          Title2
        </button>
        <button className="text-black text-start font-medium text-[20px] py-2 px-5 rounded-[10px] hover:bg-secondary/20 transition-all duration-300   xl:text-[24px]">
          Pricing
        </button>
      </div>

      {/* primary buttons */}
      <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-5 xl:gap-4 ">
        <button className="text-white font-medium text-lg py-2.5 px-[16px] xl:text-[20px] xl:py-3 w-full lg:w-[150px] bg-secondary rounded-[10px] hover:text-secondary transition-all duration-300 hover:bg-white active:text-secondary active:bg-white">
          Buy Now
        </button>
        <button className="text-white font-medium text-lg py-2.5 px-[16px] xl:text-[20px] xl:py-3 w-full lg:w-[150px] bg-secondary rounded-[10px] hover:text-secondary transition-all duration-300 hover:bg-white active:text-secondary active:bg-white">
          Help
        </button>
        <button onClick={()=>handleNavClick('orders')} className="text-white font-medium text-lg py-2.5 px-[16px] xl:text-[20px] xl:py-3 w-full lg:w-[150px] bg-secondary rounded-[10px] hover:text-secondary transition-all duration-300 hover:bg-white active:text-secondary active:bg-white">
          Admin
        </button>
      </div>
    </div>
  );
};

export default NavButtons;
