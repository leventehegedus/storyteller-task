import React from "react";
import { ButtonProps, buttonVariants } from "./Button.variant";

const Button: React.FC<ButtonProps> = ({ icon, text, variant, onClick }) => {
  const styles = buttonVariants({ variant });

  return (
    <button className={styles} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
