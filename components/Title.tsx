import React from "react";

const Title = ({ children }: { children: string }) => {
  return (
    <>
      <div className="flex items-center gap-2 justify-center relative">
        <h1 className="text-3xl text-white mb-12">{children}</h1>
        <div className="rounded-full h-2 bg-utama w-[200px] absolute"></div>
        <div className="rounded-full h-2 bg-kedua w-[200px] absolute mt-5 translate-x-8"></div>
      </div>
    </>
  );
};

export default Title;
