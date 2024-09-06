import React from "react";
import img1 from "./../../../public/assets/images/img1.jpeg";
import img2 from "./../../../public/assets/images/img2.jpeg";
import three_dots from "./../../../public/assets/images/three_dots.svg";
import Image from "next/image";
const Marketing = () => {
  return (
    <section className="w-full py-9">
      <div className="container ">
        <h1 className="text-[64px] font-bold mb-5 text-center">Title 2</h1>
        <h3 className="text-center text-2xl py-3">
          Ponke is available for trading on major exchanges.
        </h3>
        <div className="bg-primary border-4 px-8 xl:px-0 border-secondary rounded-2xl my-9 py-[90px] flex items-center justify-center">
          <div className="rounded-[36px] flex flex-col xl:flex-row bg-secondary px-12 max-w-[73rem] w-full py-10">
            <div className="left w-full  xl:w-[40%] flex flex-col-reverse xl:flex-col ">
              {/* youtube video */}
              <div className="border-4 w-full  border-white rounded-3xl xl:max-w-[430px]">
                <iframe
                  height="245px"
                //   width="100%"
                  className="object-cover w-full rounded-3xl"
                  src="https://www.youtube.com/embed/NKHzcXwTdB4?si=v83w7BQ676thBhQd"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              {/* title */}
              <h1 className="text-white font-bold text-[40px] pr-10 xl:mt-10 mb-10 xl:mb-0 leading-10">
                RETRORUSH: PIXEL PINNACLE
              </h1>
            </div>
            <div className="right w-full xl:w-[60%] pl-10">
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
                <p className="text-lg mt-3 text-white">
                  Prepare for a blast from the past, where nostalgia meets
                  modern gaming thrills. Dive into a pixelated universe where
                  every jump. dodge, and power-up takes you on a journey through
                  history.
                </p>
                <button className="float-right bg-learn-more-bg w-[170px] h-[62px] text-white text-base mt-8">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="max-w-[74rem] text-2xl text-center">
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
