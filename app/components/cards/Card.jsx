import React from "react";

const Card = ({ cardNumber }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/*card count */}
      <div className=" bg-secondary w-20 flex items-center justify-center rounded-[10px] mb-4 h-14">
        <p className="text-white font-bold text-2xl">{cardNumber}</p>
      </div>
      {/* card inside */}
      <div className="card flex flex-col items-center justify-around h-[28rem] p-8 rounded-[10px] bg-card-bg bg-primary">
        <h3 className="text-[40px] text-center font-bold">Advantage 1</h3>
        <p className="text-[22px] text-center">
          Download your solana wallet of choice but we recommend phantom or
          solflare chrome extensions.
        </p>
        <button className="px-8 py-2 rounded-lg text-white bg-[#C28D00] border-2 border-black">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
