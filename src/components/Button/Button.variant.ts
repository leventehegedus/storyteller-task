import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("flex items-center gap-1 rounded-sm px-4", {
  variants: {
    variant: {
      green: "bg-green text-white border-0",
      red: "border border-red border-solid text-red bg-white px-[15px]",
    },
    size: {
      small: "h-8",
      medium: "h-9",
    },
  },
  defaultVariants: {
    variant: "green",
    size: "small",
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  icon?: React.ReactNode;
  text?: string;
  onClick?: () => void;
}
