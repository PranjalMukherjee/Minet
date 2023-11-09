import {
  SxProps,
  Theme,
  Typography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";

export interface TypographyProps extends MuiTypographyProps {
  color?: string;
  label?: string | number;
  sx?: SxProps<Theme>;
}
const TypographyAtom = (props: TypographyProps) => {
  return (
    <Typography
      sx={{
        typography: props.variant ?? "auto",
        ...props.sx,
      }}
      {...props}
      color={props.color}
      data-testid={"typography"}
    >
      {props.label}
    </Typography>
  );
};

export default TypographyAtom;
