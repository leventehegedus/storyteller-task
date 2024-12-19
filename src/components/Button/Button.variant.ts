import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("flex items-center gap-2 p-1 rounded-sm", {
  variants: {
    variant: {
      green: ["bg-green-500", "text-white"],
      red: ["border", "border-red-500", "text-red-500", "bg-white"],
    },
  },
  defaultVariants: {
    variant: "green",
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
}
