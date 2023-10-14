import React, { ReactNode } from "react";

export type ButtonProps = {
  variant: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variantCss = {
  primary:
    "border border-primary px-2 py-0.5 text-primary hover:border-primaryDark hover:text-primaryDark",
  secondary:
    "border border-secondary px-2 py-0.5 text-secondary hover:border-secondaryDark hover:text-secondaryDark",
};

const Button = ({
  variant = "primary",
  className = "",
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantCss[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
