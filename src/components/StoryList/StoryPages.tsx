// StoryPages.tsx
import React from "react";

interface StoryPagesProps {
  pages: string[];
}

const StoryPages: React.FC<StoryPagesProps> = ({ pages }) => (
  <div className="flex gap-[5px]">
    {pages.slice(0, 6).map((page, index) => (
      <img
        key={index}
        src={page}
        alt={`Page ${index + 1}`}
        className="w-[29px] h-[52px] rounded-sm object-cover"
      />
    ))}
    {pages.length > 6 && (
      <div className="w-[29px] h-[52px] rounded-sm bg-gray-lighter flex items-center justify-center text-sm">
        <span className="text-dark-primary opacity-75">
          +{pages.length - 6}
        </span>
      </div>
    )}
  </div>
);

export default StoryPages;
