import Image from "next/image";
import logoLarge from "./../../../public/assets/images/logo_large.svg";
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full    bg-opacity-60 bg-center h-[25rem] sm:h-[56rem]">
      <Image src={logoLarge} alt="logo" className="h-[118px] w-[118px] sm:w-[310px] sm:h-[310px]" width={310} height={310} />
      <h1 className="text-[28px] sm:text-[52px] font-bold my-5">Pizza.Chat</h1>
      <h2 className="text-lg md:text-2xl font-semibold text-center max-w-[344px] md:max-w-[979px] ">
        Explanation of what pizza chat is, advantages, etc. etc. etc. etc. etc.
        etc. (2 lines max)
      </h2>
      {/* buy now button */}
      <button className="text-white font-medium border-2 border-black text-base py-[6px] px-[30px] xl:text-[20px] xl:py-4 xl:px-[65px] bg-secondary hover:text-secondary hover:bg-white transition-all duration-300 rounded-[10px] mt-8">
        Buy Now
      </button>
    </section>
  );
};

export default Hero;
