import React from "react";
import logo from "../../assets/logo.png";
const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between  lg:flex-nowrap flex-wrap max-w-[1340px]">
        <div className="lg:w-[25%] md:w-[50%]">
          <img src={logo} alt="" />
          <p className="text-[17px] mt-[17px] font-[400] text-[#1C3C70]">
            We are committed to delivering the most effective care to patients
            through high quality services that is accessible.
          </p>
        </div>
        <div className="text-[#1C3C70] font-[600] ">
          <h1 className="text-[25px] font-[600]">Useful Links </h1>
          <div className="mt-[25px] text-[16px]">
            <p className="hover:underline cursor-pointer">Home </p>
            <p className="hover:underline cursor-pointer">Find Doctor</p>
            <p className="hover:underline cursor-pointer">Our Services</p>
          </div>
        </div>
        <div className="text-[#1C3C70] font-[600] ">
          <h1 className="text-[25px] font-[600]">About </h1>
          <div className="mt-[25px] text-[16px]">
            <p className="hover:underline cursor-pointer">Our Mission </p>
            <p className="hover:underline cursor-pointer">Our Vision</p>
          </div>
        </div>
        <div className="text-[#1C3C70] font-[600] ">
          <h1 className="text-[25px] font-[600]">Contact </h1>
          <div className="mt-[25px] text-[16px]">
            <p className="hover:underline cursor-pointer">Phone </p>
            <p className="hover:underline cursor-pointer">Email</p>
            <p className="hover:underline cursor-pointer">Location</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        &copy; 2024 Uttara Lake View Hospital . All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
