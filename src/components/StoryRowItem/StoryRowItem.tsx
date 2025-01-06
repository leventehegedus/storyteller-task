import React from "react";
import { cn } from "../../lib/utils";

interface StoryRowItemProps {
  children: React.ReactNode;
  className?: string;
}

const StoryRowItem: React.FC<StoryRowItemProps> = ({ children, className }) => (
  <div className={cn("py-4 px-5 flex-1 flex items-center", className)}>
    {children}
  </div>
);

export default StoryRowItem;
