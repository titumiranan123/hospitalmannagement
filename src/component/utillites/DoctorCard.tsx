import React from "react";
import Buttons from "./Buttons";
interface doctorProp {
  img: string;
  title: string;
  name: string;
}
const DoctorCard: React.FC<doctorProp> = ({ img, title, name }) => {
  return (
    <div className="w-[283px] h-[484px] p-4">
      <img src={img} alt="" />
      <div className="flex flex-col justify-center items-center  gap-2">
        <h1 className="font-play text-center font-bold text[#1C3C70] text-[20px]">
          {name}
        </h1>
        <p className="text-[16px] text-[#07003B] text-opacity-75">{title}</p>
        <div className="mt-[18px]">
          <Buttons title="View Details" />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
