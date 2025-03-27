import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const Btn = ({ label, className,iconColor }) => {
  return (
    <button
      className={`border-white border text-white hover:bg-amber-700 font-medium p-1 rounded-full flex items-center transition-colors ${className}`}
    >
      <span className="bg-primary py-2 px-4 text-sm rounded-full">{label}</span>
      <HiOutlineChevronRight className={`h-4 w-4 ${iconColor}`} />
    </button>
  );
};

export default Btn;
