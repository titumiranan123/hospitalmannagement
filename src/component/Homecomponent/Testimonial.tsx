import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Heading from "../utillites/Heading";
import img from "../../assets/testimonialman.png";
import comma from "../../assets/comma.png";
const Testimonial: React.FC = () => {
  return (
    <div className="mt-[130px]">
      <div>
        <Heading title="TESTIMONIAL" description="What Our Patients Say" />
      </div>
      <div className="mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialData.map((data) => (
            <div key={data.name}>
              <SwiperSlide>
                <TestimonialCard
                  description={data.description}
                  img={data.img}
                  name={data.name}
                  designation={data.designation}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

interface testimonialProp {
  description: string;
  img: string;
  name: string;
  designation: string;
}
const TestimonialCard: React.FC<testimonialProp> = ({
  description,
  img,
  name,
  designation,
}) => {
  return (
    <div className="flex flex-col justify-center items-center  h-[320px]">
      <img src={comma} alt="" />
      <p className="text-[#07003B] mt-[18px] text-opacity-75 text-[18px] leading-[27px] font-poppins">
        {description?.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </p>
      <div className="flex justify-center items-center flex-col mt-12">
        <img src={img} alt="" />
        <p className="text-[30px] font-bold font-play text-center text-[#1C3C70]">
          {name}
        </p>
        <p className="text-[#1C3C70] text-center text-[16px] font-poppins ">
          {designation}
        </p>
      </div>
      <div></div>
    </div>
  );
};

const testimonialData = [
  {
    img: img,
    name: "Nizam Shaik",
    designation: "Assistant Teacher",
    description:
      "Best healthcare in Uttara Dhaka, Uttara Lake View Hospital team \nBest consultant, best service ,everything is best.",
  },
  {
    img: img,
    name: "Nizam Shaik",
    designation: "Assistant Teacher",
    description:
      "Best healthcare in Uttara Dhaka, Uttara Lake View Hospital team \nBest consultant, best service ,everything is best.",
  },
  {
    img: img,
    name: "Nizam Shaik",
    designation: "Assistant Teacher",
    description:
      "Best healthcare in Uttara Dhaka, Uttara Lake View Hospital team \nBest consultant, best service ,everything is best.",
  },
];
