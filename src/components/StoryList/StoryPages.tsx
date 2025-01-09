// StoryPages.tsx
import React from "react";
import useIsLargeScreen from "../../hooks/useIsLargeScreen";

interface StoryPagesProps {
  pages: string[];
}

const StoryPages: React.FC<StoryPagesProps> = ({ pages }) => {
  const isLargeScreen = useIsLargeScreen();
  const maxVisiblePages = isLargeScreen
    ? pages.length <= 7
      ? 7
      : 6
    : pages.length <= 5
    ? 5
    : 4;

  return (
    <div className="flex gap-[5px]">
      {pages.slice(0, maxVisiblePages).map((page, index) => (
        <img
          key={index}
          src={page}
          alt={`Page ${index + 1}`}
          className="w-[29px] h-[52px] rounded-sm object-cover"
        />
      ))}
      {pages.length > maxVisiblePages && (
        <div className="w-[29px] h-[52px] rounded-sm bg-gray-lighter flex items-center justify-center text-sm">
          <span className="text-dark-primary opacity-75">
            +{pages.length - maxVisiblePages}
          </span>
        </div>
      )}
    </div>
  );
};

export default StoryPages;
