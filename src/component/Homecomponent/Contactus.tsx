import React from "react";
import call from "../../assets/Call.svg";
import home from "../../assets/Home.png";
import mail from "../../assets/Mail.svg";
const Contactus: React.FC = () => {
  return (
    <div className="mb-[140px] mt-[140px]">
      <div>
        <div>
          <div>
            <h1 className="text-[#2379F9] text-[20px]">Contact us</h1>
            <p className="mt-5 text-[#1C3C70] text-[36px] font-play font-bold">
              Connect with Us Anytime, <br /> Your Health is Our Priority
            </p>
            <p className="mt-[23px] ">
              We Are always open for your need. Connect with us for your <br />{" "}
              healthcare. Our service is open 24/7 to help you.
            </p>
          </div>
          <div className="info mt-[48px] font-play font-bold text-[20px] text-[#1C3C70]">
            <div className="flex gap-2">
              <img src={call} alt="" />
              <div>
                <p>+880158285858</p>
                <p>+880158285858</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={mail} alt="" />
              <p>ulttaralakeviewsphospital@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <img src={home} alt="" />
              <p>
                House: 34, Road:5A/10B, Sector:11, Uttara , Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contactus;
