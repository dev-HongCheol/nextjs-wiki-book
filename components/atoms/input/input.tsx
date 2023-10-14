import React from "react";

export type InputProps = {
  hasError?: boolean;
  className?: string;
};

const Input = ({
  hasError = false,
  className = "",
  ...porps
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...porps} className={`border ${hasError ? "border-red-500" : ""} ${className}`} />;
};

export default Input;
