// variants/story-badge.ts
import { cva, type VariantProps } from "class-variance-authority";

export const storyBadgeVariants = cva(
  "inline-flex items-center justify-center px-[7px] h-[18px] py-0.5 text-[11px] font-bold rounded-sm text-white capitalize -tracking-[.01em]",
  {
    variants: {
      variant: {
        live: ["bg-green"],
        past: ["bg-gray"],
        scheduled: ["bg-blue-primary"],
        draft: ["bg-blue-primary"],
      },
    },
    defaultVariants: {
      variant: "live",
    },
  }
);

export interface StoryBadgeProps
  extends VariantProps<typeof storyBadgeVariants> {
  className?: string;
}
