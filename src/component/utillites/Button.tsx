import React from "react";
interface buttonProp {
  title: string;
}
const Button: React.FC<buttonProp> = ({ title }) => {
  return (
    <div className="cursor-pointer bg-[#2379F9] text-white rounded-[42px] px-7 py-4 w-[235px] h-[51px] flex justify-center items-center">
      {title}
    </div>
  );
};

export default Button;
