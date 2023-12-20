import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";

import ImagePreview, { ImagePreviewProps } from "./ImagePreview";
import Dropzone from "../dropzone/Dropzone";
import { Preview } from "@mui/icons-material";

const meta = {
  title: "molecules/ImagePreview",
  component: ImagePreview,
  tags: ["autodocs"],
} satisfies Meta<typeof ImagePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Image {
  src?: string;
  file?: File;
}
const ImagePreviewRender = ({ alt, height, onRemove, src, width }: ImagePreviewProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    const newImages = [...images];
    for (const file of files) {
      // images에 없는 파일이면 (새로운 파일이면) 배열에 추가
      const index = newImages.findIndex((newImage) => newImage.file === file);
      if (index === -1) {
        newImages.push({
          file,
          src: URL.createObjectURL(file),
        });
      }
    }

    setImages(newImages);
  }, [files]);

  const handleRemove = (src: string) => {
    const image = images.find((img: Image) => img.src === src);
    if (image !== undefined) {
      setImages((images) => images.filter((img) => img.src !== src));
      setFiles((files) => files.filter((file) => file !== image.file));
    }
    onRemove && onRemove(src);
  };
  return (
    <div>
      <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
      {images.map((image) => (
        <ImagePreview src={image.src} width={100} onRemove={handleRemove} key={image.src} />
      ))}
    </div>
  );
};
export const ImagePreviewStories: Story = {
  render: (args: ImagePreviewProps) => <ImagePreviewRender {...args} />,
  args: {
    alt: "testImage",
    height: 200,
    src: "/1.jpg",
    width: 200,
  },
};
