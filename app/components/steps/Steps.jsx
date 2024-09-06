import pizza1 from "./../../../public/assets/images/pizza1.jpeg";
import pizza2 from "./../../../public/assets/images/pizza2.jpeg";
import pizza3 from "./../../../public/assets/images/pizza3.jpeg";
import stepsbg from "./../../../public/assets/images/steps_bg.svg";
import Image from "next/image";

import Step from "./Step";
const Steps = () => {
  return (
    <div className="w-full overflow-hidden relative">

      <div className="container  sm:mt-[136px]">
        <Step step={1} image={pizza1} />
        <Step step={2} image={pizza2} />
        <Step step={3} image={pizza3} />

        <Image
          src={stepsbg}
          alt="steps"
          className="absolute top-[117px] -right-[166px]"
        />

        <Image
          src={stepsbg}
          alt="steps"
          className="absolute bottom-[231px] -left-[166px]"
        />
      </div>
    </div>
  );
};

export default Steps;
