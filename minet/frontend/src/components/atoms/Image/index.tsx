import React from "react";
import { ImageProp } from "../../../interface/index";

const ImageAtom = ({ sourceImage, style }: ImageProp) => {
  return <img src={sourceImage} style={style} data-testid={"image"} />;
};
export default ImageAtom;
