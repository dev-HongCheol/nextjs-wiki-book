import Image, { ImageProps } from "next/image";
import React from "react";

export type ShapeImageProps = {
  shape?: "circle" | "square";
  imageProps: ImageProps;
  className?: string;
};
const ShapeImage = ({ shape = "circle", imageProps, className = "" }: ShapeImageProps) => {
  return (
    <div style={{ width: imageProps.width, height: imageProps.height }}>
      <Image
        {...imageProps}
        className={`h-full ${shape === "circle" ? "rounded-full" : ""} ${className}`}
      />
    </div>
  );
};

export default ShapeImage;
