import React from "react";
import { StoryBadgeProps, storyBadgeVariants } from "./StatusBadge.variant";
import { cn } from "../../lib/utils";

export const StoryBadge: React.FC<StoryBadgeProps> = ({
  variant,
  className,
}) => {
  return (
    <span className={cn(storyBadgeVariants({ variant }), className)}>
      {variant}
    </span>
  );
};

export default StoryBadge;
