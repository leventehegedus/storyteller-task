import React from "react";
import { StoryBadgeProps, storyBadgeVariants } from "./StatusBadge.variant";
import { cn } from "../../lib/utils";

export const StoryBadge: React.FC<StoryBadgeProps> = ({
  variant,
  size,
  className,
}) => {
  return (
    <span className={cn(storyBadgeVariants({ variant, size }), className)}>
      {variant}
    </span>
  );
};

export default StoryBadge;
