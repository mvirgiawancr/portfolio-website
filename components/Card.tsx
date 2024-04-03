import React from "react";
import { Meteors } from "./ui/meteors";

const Card = ({ name, icon }: { icon: any; name: any }) => {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-20 py-20 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 self-center">
            {icon}
          </h1>

          <p className="font-normal self-center text-base text-slate-500 mb-4 relative z-50">
            {name}
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default Card;
