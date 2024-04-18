// src/image.tsx
import { chakra } from "@chakra-ui/react";
import NextImage from "next/image.js";
var imageProps = [
  "src",
  "alt",
  "sizes",
  "width",
  "height",
  "fill",
  "loader",
  "quality",
  "priority",
  "loading",
  "placeholder",
  "blurDataURL",
  "unoptimized",
  "onLoadingComplete",
  "alt",
  "crossOrigin",
  "decoding",
  "loading",
  "referrerPolicy",
  "sizes",
  "src",
  "useMap"
];
var Image = chakra(NextImage, {
  shouldForwardProp: (prop) => imageProps.includes(prop)
});

export {
  Image
};
