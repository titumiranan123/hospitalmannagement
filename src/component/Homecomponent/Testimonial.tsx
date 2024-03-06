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
    <div>
      <div>
        <Heading title="TESTIMONIAL" description="What Our Patients Say" />
      </div>
      <div>
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
                <TestimonialCard description="hello" />
              </SwiperSlide>
            </div>
          ))}

          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

interface testimonialProp {
  description: string;
}
const TestimonialCard: React.FC<testimonialProp> = ({ description }) => {
  return (
    <div>
      <img src={comma} alt="" />
      <p>{description}</p>
      <div className=""></div>
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
      "Best healthcare in Uttara Dhaka, Uttara Lake View Hospital team Best consultant, best service ,everything is best.",
  },
  {
    img: img,
    name: "Nizam Shaik",
    designation: "Assistant Teacher",
    description:
      "Best healthcare in Uttara Dhaka, Uttara Lake View Hospital team Best consultant, best service ,everything is best.",
  },
  {
    img: img,
    name: "Nizam Shaik",
    designation: "Assistant Teacher",
    description:
      "Best healthcare in Uttara Dhaka, Uttara Lake View Hospital team Best consultant, best service ,everything is best.",
  },
];
