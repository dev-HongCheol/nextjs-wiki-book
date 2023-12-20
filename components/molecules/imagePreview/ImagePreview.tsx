import React, { MouseEvent } from "react";
import { CloseIcon } from "@components/atoms/IconButton/IconButton";

export interface ImagePreviewProps {
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
  onRemove?: (src: string) => void;
}

const ImagePreview = ({ src, alt, height, width, onRemove }: ImagePreviewProps) => {
  const handleCloseClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && src && onRemove(src);

    return false;
  };

  return (
    <div
      className="relative"
      style={{
        width,
        height,
      }}
    >
      <img src={src} alt={alt} width={width} height={height} />
      <div className="items-center justify-center" onClick={handleCloseClick}>
        <CloseIcon className="absolute top-0 right-0 w-[30px] h-[30px] rounded border bg-[rgba(44,44,44,0.66)] cursor-pointer" />
      </div>
    </div>
  );
};

export default ImagePreview;
