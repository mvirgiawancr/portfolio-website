import React from "react";

export function Hero() {
  return (
    <div className="opacity-25 h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="opacity-25 absolute pointer-events-none inset-0 flex items-center justify-centerbg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
