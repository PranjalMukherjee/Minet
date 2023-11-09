import React from "react";

export interface IconProps {
  src: string;
  alt: string;
  style?: React.CSSProperties | object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Icons = ({ style, ...props }: IconProps) => {
  return (
    <img
      {...props}
      style={{ cursor: "pointer", ...style }}
      data-testid={"icon-" + props.alt}
    />
  );
};

export default Icons;
