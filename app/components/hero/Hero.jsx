import Image from "next/image";
import logoLarge from "./../../../public/assets/images/logo_large.svg";
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-hero-bg-small bg-cover xl:bg-hero-bg   bg-opacity-60 bg-center h-[56rem]">
      <Image src={logoLarge} alt="logo" width={310} height={310} />
      <h1 className="text-[64px] font-bold my-5">Pizza.Chat</h1>
      <h2 className="text-lg md:text-4xl font-semibold text-center max-w-[344px] md:max-w-[979px] ">
        Explanation of what pizza chat is, advantages, etc. etc. etc. etc. etc.
        etc. (2 lines max)
      </h2>
      {/* buy now button */}
      <button className="text-white font-medium border-2 border-black text-lg py-2 px-[20px] xl:text-2xl xl:py-4 xl:px-[65px] bg-secondary rounded-[10px] mt-8">
        Buy Now
      </button>
    </section>
  );
};

export default Hero;
