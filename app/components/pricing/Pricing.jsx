import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <div className=" flex flex-col items-center justify-center pt-5 pb-10 bg-secondary/30 mt-[23px] rounded-[32px]">
        <h1 className="text-[28px] sm:text-[52px] font-bold text-center">Pricing</h1>
        <div className="bg-price-bg h-[136px] w-[141px] flex items-center justify-center">
          <p className="font-bold text-[24px]">15$</p>
        </div>
        <p className="max-w-[312px] xl:max-w-[930px] text-[10px] xl:text-[18px] text-center">
          The PONKE Stating Smart Contract is Programwed To Distribute Tokens To
          All Staters In The Pool Over A Period Of Two Years, Providing
          Sustained Passive Rewa rds
        </p>
        <button className="text-white font-medium border-2 border-black text-[16px] py-2 px-[20px] xl:text-[18px] xl:py-3 xl:px-[65px] bg-secondary hover:bg-white hover:text-secondary transition-all duration-300 rounded-[10px] mt-8">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Pricing;
