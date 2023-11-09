import { InputAdornment, OutlinedInput, styled } from "@mui/material";
import React from "react";
import InputFieldProp from "../../../interface";
import MinetTheme from "../../../theme";

const StyledInputField = styled(OutlinedInput)({
  width: "100%",
  height: "100%",
  borderRadius: 8,
  font: MinetTheme.palette.text.lowEmphasis,
  
});

const InputFieldAtom = ({
  inputId,
  isRequired,
  placeholder,
  value,
  type,
  borderColor,
  onChange,
  icon,
}: InputFieldProp) => {
  return (
    <StyledInputField
      id={inputId}
      required={isRequired}
      endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
      placeholder={placeholder}
      value={value}
      type={type}
      sx={{ borderColor: borderColor, fontFamily: MinetTheme.typography.body2 }}
      onChange={onChange}
    />
  );
};
export default InputFieldAtom;
