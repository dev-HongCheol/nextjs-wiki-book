import type { Preview } from "@storybook/react";
import * as NextImage from "next/image";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

/* 
  stortbook은 nextimage를 사용할 수 없으므로 일반 이미지로 교체
  컴포넌트를 핸들링하므로 확장자 tsx로 변경
*/
//FIXME:오류남..
/* const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
}); */

export default preview;
