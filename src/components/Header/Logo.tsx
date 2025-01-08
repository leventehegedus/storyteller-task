import React from "react";

const Logo: React.FC = () => (
  <div className="flex items-center gap-[11px] h-[38px]">
    <img
      src="/assets/images/storytellerlogo.svg"
      alt="logo"
      className="w-[37px] h-[34px]"
    />
    <span className="text-[28px] font-bold -tracking-[.01em] leading-[28px] -mt-0.5">
      storyteller
    </span>
  </div>
);

export default Logo;
