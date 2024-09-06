import React from "react";
import img1 from "./../../../public/assets/images/img1.jpeg";
import img2 from "./../../../public/assets/images/img2.jpeg";
import three_dots from "./../../../public/assets/images/three_dots.svg";
import Image from "next/image";
const Marketing = () => {
  return (
    <section className="w-full py-9">
      <div className="container ">
        <h1 className="text-[28px] sm:text-[52px] font-bold mb-1 sm:mb-5 text-center">Title 2</h1>
        <h3 className="text-center text-sm sm:text-[18px] py-1 sm:py-3">
          Ponke is available for trading on major exchanges.
        </h3>
        <div className="bg-primary border-4 px-5 xl:px-0 border-secondary rounded-2xl my-5 sm:my-9 py-3 lg:py-[90px] flex items-center justify-center">
          <div className="rounded-[36px] flex flex-col xl:flex-row bg-secondary px-9 xl:px-12 max-w-[73rem] w-full py-6 lg:py-10">
            <div className="left w-full  xl:w-[40%] flex flex-col-reverse xl:flex-col ">
              {/* youtube video */}
              <div className="border-4 w-full  border-white rounded-3xl xl:max-w-[430px]">
                <iframe
                  // height="245px"
                //   width="100%"
                  className="object-cover w-full h-[132px] sm:h-[245px] rounded-3xl"
                  src="https://www.youtube.com/embed/NKHzcXwTdB4?si=v83w7BQ676thBhQd"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  // allowfullscreen
                ></iframe>
              </div>

              {/* title */}
              <h1 className="text-white font-bold text-[24px] lg:text-[34px] pr-10 xl:mt-10 mb-5 lg:mb-10 xl:mb-0 leading-10">
                RETRORUSH: PIXEL PINNACLE
              </h1>
            </div>
            <div className="right w-full xl:w-[60%] pl-2 sm:pl-10">
              <div className="hidden top xl:grid grid-cols-2 gap-10">
                <Image
                  src={img1}
                  alt="img1"
                  className="object-cover border-4 border-white h-[245px] bg-center overflow-hidden w-full rounded-3xl"
                />
                <Image
                  src={img2}
                  alt="img2"
                  className="object-cover border-4 border-white h-[245px] bg-center overflow-hidden w-full rounded-3xl"
                />
              </div>
              {/* bottom part */}
              <div className="mt-6 flex xl:block flex-col items-center justify-center">
                <Image src={three_dots} alt="three_dots" />
                <p className="text-[10px] sm:text-[12px] mt-3  text-white">
                  Prepare for a blast from the past, where nostalgia meets
                  modern gaming thrills. Dive into a pixelated universe where
                  every jump. dodge, and power-up takes you on a journey through
                  history.
                </p>
                <button className="float-right bg-learn-more-bg w-[95px] h-[33px] bg-contain bg-no-repeat sm:w-[170px] sm:h-[62px] text-white text-[9px] sm:text-base mt-8">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="max-w-[78rem] text-[10px] sm:text-[20px] text-center">
            Prepare for a blast from the past, where nostalgia meets modern
            gaming thrills. Dive into a pixelated universe where every jump.
            dodge, and power-up takes you on a journey through history.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
