import React from "react";
import { Avatar, AvatarProps } from "@mui/material";

const AvatorAtom = ({ alt, src, sx, onClick }: AvatarProps) => {
  return (
    <Avatar
      src={src}
      alt={alt}
      onClick={onClick}
      sx={{ ...sx, cursor: "pointer" }}
      data-testid={"avator"}
    />
  );
};

export default AvatorAtom;
