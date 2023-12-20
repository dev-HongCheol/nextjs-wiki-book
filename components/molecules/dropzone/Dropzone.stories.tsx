import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import Dropzone, { DropzoneProps } from "./Dropzone";
import { Button } from "@components/atoms";

const meta = {
  component: Dropzone,
  title: "Atoms/Dropzone",
  tags: ["autodocs"],
} satisfies Meta<typeof Dropzone>;
export default meta;
type Story = StoryObj<typeof Dropzone>;

const DropzoneStory = (props: DropzoneProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const handleDrop = (files: File[]) => {
    console.log("handleDrop");
    setFiles(files);
    props.onDrop && props.onDrop(files);
  };

  const fetchData = async () => {
    const res = await fetch("/1.jpg");
    const blob = await res.blob();
    const file = new File([blob], "1.png", blob);

    setFiles([...files, file]);
  };

  const clearImages = () => {
    setFiles([]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mb-1">
      <Dropzone {...props} onDrop={handleDrop} />
      <div className="mb-2">
        <Button onClick={fetchData} variant="primary">
          이미지 추가
        </Button>
        <Button onClick={clearImages} variant="primary">
          모든 이미지 클리어
        </Button>
      </div>
      <div>
        {files.map((file, index) => (
          <img src={URL.createObjectURL(file)} key={file.name + index} alt={file.name} />
        ))}
      </div>
    </div>
  );
};

export const InputText: Story = {
  render: (args) => <DropzoneStory {...args} />,
  args: {
    height: "500px",
    width: "500px",

    acceptedFileTypes: ["image/jpeg", "application/pdf", "image/jpeg"],
  },
};
