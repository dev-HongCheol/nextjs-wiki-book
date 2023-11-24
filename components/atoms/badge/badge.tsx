import React, { ReactNode } from "react";

export type BadgeProps = {
  className?: string;
  children: ReactNode;
};

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <p
      className={`inline-flex min-w-[20px] border rounded-[20px] height-[20px] justify-cetner items-center ${className} px-2 py-0.5`}
    >
      <span className="text-white font-md select-none">{children}</span>
    </p>
  );
};

export default Badge;
