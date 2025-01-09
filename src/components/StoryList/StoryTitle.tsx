import React from "react";

interface StoryTitleProps {
  title: string;
  subtitle?: string;
}

const StoryTitle: React.FC<StoryTitleProps> = ({ title, subtitle }) => (
  <div className="font-medium text-base leading-5 text-ellipsis">
    <div className="text-blue-primary text-nowrap -tracking-[.01em] truncate max-w-[162px] lg:max-w-[222px] 2xl:max-w-[calc(100vw-1336px)]">
      {title}
    </div>
    {subtitle && (
      <div className="text-gray text-nowrap -tracking-[.01em] truncate max-w-[162px] lg:max-w-[222px] 2xl:max-w-[calc(100vw-1336px)]">
        {subtitle}
      </div>
    )}
  </div>
);

export default StoryTitle;
