import Image from "next/image";

const Step = ({ step, image }) => {
  return (
    <div className="step mb-[55px] mr-5 sm:mr-20 xl:mr-0 flex justify-end xl:justify-start items-end xl:items-center ">
      {/* serial */}
      <div className="serial pb-[100px] sm:pb-[200px] xl:pb-0">
        <div className="w-[47px] h-[47px] sm:w-[122px] sm:h-[122px] rounded-full border flex items-center justify-center font-semibold text-[20px] sm:text-[36px] border-secondary">
          0{step}
        </div>
      </div>
      {/* image & texts */}
      <div className=" pl-[10px] sm:pl-[40px] lg:pl-[95px] flex items-end xl:items-start flex-col-reverse xl:flex-row  ">
        <div className="image_holder w-[202px] h-[210px] sm:w-[400px] sm:h-[433px] rounded-[10px] mr-[18px] bg-primary relative">
          <Image
            src={image}
            alt={step}
            className=" w-[202px] h-[210px] sm:w-[400px] sm:h-[433px] rounded-[10px] absolute left-[18px] bottom-[18px]"
          />
        </div>
        {/* texts */}
        <div className="ml-[16px] sm:ml-[93px] flex flex-col items-center sm:items-end w-[232px] sm:w-[370px] mb-10 ">
          <h3 className="font-bold text-[28px] ">Step {step}</h3>
          <p className="text-[18px] sm:text-[26px] text-center xl:text-end mt-8">
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
