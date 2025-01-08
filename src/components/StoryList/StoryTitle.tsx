import React from "react";

interface StoryTitleProps {
  title: string;
  subtitle?: string;
}

const StoryTitle: React.FC<StoryTitleProps> = ({ title, subtitle }) => (
  <div className="font-medium text-base leading-5">
    <div className="text-blue-primary text-nowrap -tracking-[.01em]">
      {title}
    </div>
    {subtitle && (
      <div className="text-gray text-nowrap -tracking-[.01em]">{subtitle}</div>
    )}
  </div>
);

export default StoryTitle;
