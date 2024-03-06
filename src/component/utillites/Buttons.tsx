import React from "react";
interface buttonProp {
  title: string;
}
const Buttons: React.FC<buttonProp> = ({ title }) => {
  return (
    <div className="cursor-pointer hover:bg-[#2379F9] hover:text-white rounded-[42px] w-[160px] h-[39px] text-[16px] font-[500] border border-[#2379F9] text-[#2379F9] px-7 py-4 flex justify-center items-center">
      {title}
    </div>
  );
};

export default Buttons;
