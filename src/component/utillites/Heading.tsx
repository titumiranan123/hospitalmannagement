import React from "react";
interface headingprop {
  title: string;
  description: string;
}
const Heading: React.FC<headingprop> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-[#2379F9] text-[20px] font-bold">{title}</h1>
      <p className="font-bold text-[36px] text-[#1C3C70]">{description}</p>
    </div>
  );
};

export default Heading;
