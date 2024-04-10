import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const LandingHeader = () => {
  return (
    <button className="flex flex-col w-fit h-fit items-center justify-center gap-1 md:gap-2 noto-sans-1">
      <RiMoneyDollarCircleFill size={100} />
      <h1 className="font-black text-xl md:text-2xl">COINWATCHPRO</h1>
      <h4 className="text-sm">where every penny counts!</h4>
    </button>
  );
};

export default LandingHeader;
