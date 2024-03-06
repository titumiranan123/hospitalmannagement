import React from "react";
import doctor from "../../assets/bookappoinment.png";
import Button from "../utillites/Button";
const Bookappoinment: React.FC = () => {
  return (
    <div className="mt-[119px] flex  items-center gap-[87px]">
      <div>
        <img src={doctor} alt="" />
      </div>
      <div className="">
        <h1 className="text-[20px] text-left text-[#2379F9] font-bold leading-[22px]">
          BOOK APPOINTMENT{" "}
        </h1>
        <h1 className="text-[36px] text-left mt-2 font-bold font-play leading-[44px] text-[#1c3c70]">
          Book An Appoinment With A <br /> Doctor Today{" "}
        </h1>
        <p className="mt-[23px] text-[16px] text-[#07003B] text-opacity-75">
          Booking Appoinment is way more easier now . You can book your <br />
          Appoimtment from anyWhere online.
        </p>
        <div className="flex  mt-[43px] items-center gap-7">
          <Button title="Make an Appointment" />
          <div className="cursor-pointer rounded-[42px] text-[17px] font-[500] border border-[#2379F9] text-[#2379F9] px-7 py-4 flex justify-center items-center">
            {" "}
            Find Doctor{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookappoinment;
