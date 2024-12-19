// variants/story-badge.ts
import { cva, type VariantProps } from "class-variance-authority";

export const storyBadgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-sm",
  {
    variants: {
      variant: {
        live: ["bg-green", "text-white"],
        past: ["bg-gray-light", "text-dark-primary"],
        scheduled: ["bg-blue-light", "text-white"],
        draft: ["bg-gray-light", "text-dark-primary"],
      },
      size: {
        default: "text-sm",
        small: "text-xs",
        large: "text-base",
      },
    },
    defaultVariants: {
      variant: "live",
      size: "default",
    },
  }
);

export interface StoryBadgeProps
  extends VariantProps<typeof storyBadgeVariants> {
  className?: string;
}
