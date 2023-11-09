import { SxProps } from "@mui/system";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface IButtonProps extends ButtonProps {
  sx?: SxProps;
}

const ButtonAtom = ({
  children,
  endIcon,
  onClick,
  startIcon,
  sx,
  variant,
  disabled,
}: IButtonProps) => {
  return (
    <Button
      variant={variant}
      sx={{
        ...sx,
        borderRadius: "4px",
        boxShadow: "none",
      }}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      data-testid="button-click"
    >
      {children}
    </Button>
  );
};

export default ButtonAtom;
