import { TypographyProps } from "@mui/material";

export default interface InputLabelProps {
    variant?: TypographyProps["variant"];
  
    label?: string;
    placeholder?: string;
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: (e: any) => void;
    value?: string;
    type?: string;
    icon?: React.ReactNode;
  }