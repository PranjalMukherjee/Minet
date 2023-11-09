import React from "react";
import { IconProps } from "../../../interface";

const IconAtom = ({ style,...props }: IconProps) => {
  return <img {...props} style={{cursor:"pointer", ...style}} />;
};

export default IconAtom;
