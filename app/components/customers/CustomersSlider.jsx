import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import guy1 from "./../../../public/assets/images/guy1.jpeg";
import guy2 from "./../../../public/assets/images/guy2.jpeg";
import guy3 from "./../../../public/assets/images/guy3.jpeg";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, margin:'auto', display:'flex', alignItems:'center', justifyContent:'center',color:'white', width: "40px", height: "40px", borderRadius: "6px", background:'rgba(95,171,56,0.600)',  zIndex: "1"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, margin:'auto', display:'flex', alignItems:'center', justifyContent:'center',color:'white', width: "40px", height: "40px", borderRadius: "6px", background:'rgba(95,171,56,0.600)',  zIndex: "1"}}
    onClick={onClick}
    > 
    </div>
  );
}

function CustomerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow  />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[200px] sm:h-[268px]  mb-8">
          <Image
            src={guy1}
            className="h-[200px] sm:h-[268px] rounded-[21px] drop-shadow-secondary mx-auto max-w-[250px] sm:max-w-[343px] object-cover border border-primary"
            alt="slider 1"
          />
        </div>
        <div className="h-[200px] sm:h-[268px]  mb-8">
          <Image
            src={guy2}
            className="h-[200px] sm:h-[268px] rounded-[21px] drop-shadow-secondary mx-auto max-w-[250px] sm:max-w-[343px] object-cover border border-primary"
            alt="slider 1"
          />
        </div>
        <div className="h-[200px] sm:h-[268px]  mb-8">
          <Image
            src={guy3}
            className="h-[200px] sm:h-[268px] rounded-[21px] drop-shadow-secondary mx-auto max-w-[250px] sm:max-w-[343px] object-cover border border-primary"
            alt="slider 1"
          />
        </div>
        <div className="h-[200px] sm:h-[268px]  mb-8">
          <Image
            src={guy1}
            className="h-[200px] sm:h-[268px] rounded-[21px] drop-shadow-secondary mx-auto max-w-[250px] sm:max-w-[343px] object-cover border border-primary"
            alt="slider 1"
          />
        </div>
        <div className="h-[200px] sm:h-[268px]  mb-8">
          <Image
            src={guy2}
            className="h-[200px] sm:h-[268px] rounded-[21px] drop-shadow-secondary mx-auto max-w-[250px] sm:max-w-[343px] object-cover border border-primary"
            alt="slider 1"
          />
        </div>
        <div className="h-[200px] sm:h-[268px]  mb-8">
          <Image
            src={guy3}
            className="h-[200px] sm:h-[268px] rounded-[21px] drop-shadow-secondary mx-auto max-w-[250px] sm:max-w-[343px] object-cover border border-primary"
            alt="slider 1"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CustomerSlider;
