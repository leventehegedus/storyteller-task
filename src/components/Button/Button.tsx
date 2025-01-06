import React from "react";
import { ButtonProps, buttonVariants } from "./Button.variant";
import { cn } from "../../lib/utils";

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  variant,
  size,
  className,
  onClick,
}) => {
  const styles = buttonVariants({ variant, size, className });

  return (
    <button
      className={cn(styles, {
        "gap-0": !icon || !text,
      })}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
