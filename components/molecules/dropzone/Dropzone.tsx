import { CloudUploadIcon } from "@components/atoms/IconButton/IconButton";
import React, { ChangeEvent, DragEvent, useCallback, useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isDragEvt = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer;
};

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null;
};

/**
 * 이벤트로부터 입력된 파일을 얻는다
 * @param e DragEvent | ChangeEvent
 * @returns File의 배열
 */
const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent): File[] => {
  if (isDragEvt(e)) {
    return Array.from(e.dataTransfer.files);
  } else if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files);
  }

  return [];
};

type FileType = "image/png" | "image/jpeg" | "video/mp4" | "video/quicktime" | "application/pdf";

export interface DropzoneProps {
  value?: File[];
  name?: string;
  acceptedFileTypes?: FileType[];
  width?: number | string;
  height?: number | string;
  hadError?: boolean;
  onDrop?: (files: File[]) => void;
  onChange?: (files: File[]) => void;
}

const Dropzone = ({
  onDrop,
  onChange,
  value = [],
  name,
  acceptedFileTypes = ["image/jpeg", "image/png"],
  hadError,
  width = "100%",
  height = "100%",
}: DropzoneProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);

    const files = value.concat(
      getFilesFromEvent(e).filter((f) => acceptedFileTypes.includes(f.type as FileType)),
    );

    onDrop && onDrop(files);
    onChange && onChange(files);
  };

  // 드래그 상태에서 마우스 포인터가 영역범위에 드롭되었을 때
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const files = value.concat(
      getFilesFromEvent(e).filter((f) => acceptedFileTypes.includes(f.type as FileType)),
    );

    if (files.length === 0) {
      return alert("해당 확장자만 가능합니다." + acceptedFileTypes.join(" ,"));
    }

    onDrop && onDrop(files);
    onChange && onChange(files);
  };

  // 드래그 상태에서 마우스 포인터가 범위 안에 있을 때
  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(true);
  }, []);

  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (inputRef.current && value && value.length === 0) {
      inputRef.current.value = "";
    }
  }, [value]);

  return (
    <div
      ref={rootRef}
      onDrag={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onClick={handleClick}
      data-testid="drop-zone"
      className={`border border-dashed ${hadError ?? "text-red-600"} rounded-lg cursor-pointer`}
      style={{
        width,
        height,
      }}
    >
      <input
        type="file"
        ref={inputRef}
        name={name}
        accept={acceptedFileTypes.join(",")}
        onChange={handleChange}
        multiple
      />
      <div style={{ width, height }}>
        <CloudUploadIcon size={24} />
        <span className="text-center">기기에서 업로드</span>
      </div>
    </div>
  );
};

export default Dropzone;
