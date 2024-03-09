import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // If you want to use icons for navigation
import img from "../assets/testimonialman.png";
import comma from "../assets/comma.png";
interface CarouselProps {
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [autoSlideInterval]); // Restart interval whenever currentIndex changes

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out transform"
          style={{
            width: `${testimonialData.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / testimonialData.length)
            }%)`,
          }}
        >
          {testimonialData.map((data) => (
            <div
              key={data.name}
              className="w-full flex justify-center items-center"
            >
              <TestimonialCard
                description={data.description}
                img={data.img}
                name={data.name}
                designation={data.designation}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 px-2 py-2  border  rounded-[12px] border-[#2379f9] text-[#2379f9]"
        onClick={goToPrevSlide}
      >
        <FiChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 px-2 py-2  border  rounded-[12px] border-[#2379f9] text-[#2379f9]"
        onClick={goToNextSlide}
      >
        <FiChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;

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
    <div className="flex flex-col justify-center items-center w-full  h-[320px]">
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
