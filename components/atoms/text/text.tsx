import React, { ReactNode } from "react";

export type TextProps = {
  variant: "primary" | "secondary";
  className?: string;
  children: ReactNode;
};

const variantCss = {
  primary: "text-primary",
  secondary: "text-secondary",
};

const Text = ({ variant, className = "", children }: TextProps) => {
  return <span className={`${variantCss[variant]} ${className}`}>{children}</span>;
};

export default Text;
