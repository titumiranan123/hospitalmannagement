import React from "react";
import Button from "../utillites/Button";
import play from "../../assets/Header/Play.png";
import img from "../../assets/Header/male-doctor-light-surface 6.png";
import time from "../../assets/Header/Time Circle.png";
import online from "../../assets/Header/online.png";
const Header: React.FC = () => {
  return (
    <div className="mt-[109px]">
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center">
        <div>
          <h1 className="md:text-[48px] text-[36px] font-bold font-play leading-[57.6px] text-[#1C3C70]">
            Multispecialty Hospital <br /> Chain in Uttara
          </h1>
          <p className=" mt-4 text-[16px] text-[#07003B] text-opacity-75">
            We are committed to delivering the most effective care to <br />{" "}
            patients through high quality services that is accessible.
          </p>
          <div className="mt-[75px] flex gap-7  items-center">
            <Button title="Make an Appointment" />
            <div className="flex justify-center  items-center gap-4">
              <img className="w-[51px] h-[51px]" src={play} alt="" />
              <a
                className="underline text-[18px]   text-[#07003B] text-opacity-75"
                href=""
              >
                See How We Treat
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="" src={img} alt="" />
          <div className="w-[259px] absolute top-60 -right-20 gap-3 bg-blue-500 bg-opacity-50 rounded-l-full h-[68px] rounded-none flex justify-center items-center text-[16px] text-[#07003B] text-opacity-75">
            <img className="w-[24px] h-[24px]" src={time} alt="" />
            <p>24/7 Service </p>
          </div>
          <div className="w-[259px] absolute bottom-0 left-0 bg-blue-500 gap-3 bg-opacity-50 rounded-r-full h-[68px] rounded-none flex justify-center items-center text-[16px] text-[#07003B] text-opacity-75">
            <img className="w-[30px] h-[30px]" src={online} alt="" />
            <p>100+ Doctors Online </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
