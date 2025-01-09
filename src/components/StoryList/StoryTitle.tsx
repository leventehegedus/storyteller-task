import React from "react";
import { cn } from "../../lib/utils";

interface StoryTitleProps {
  title: string;
  subtitle?: string;
}

const truncatedTextClasses =
  "text-nowrap -tracking-[.01em] truncate max-w-[162px] lg:max-w-[182px] 2xl:max-w-[calc(100vw-1336px)]";
const StoryTitle: React.FC<StoryTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="font-medium text-base leading-5 text-ellipsis">
      <div className={cn("text-blue-primary", truncatedTextClasses)}>
        {title}
      </div>
      {subtitle && (
        <div className={cn("text-gray", truncatedTextClasses)}>{subtitle}</div>
      )}
    </div>
  );
};

export default StoryTitle;
