import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import MinetTheme from "../../../theme";
import { ISliderProps } from "../../../interface/slider-interface";

const StyledSlider = styled(Slider)({
  height: "88px",
  width: "2px",
  color: MinetTheme.palette.text.lowEmphasis,
  "& .MuiSlider-thumb": {
    width: "12px",
    height: "12px",
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    boxShadow: "none",
    "&:before": {
      boxShadow: "none",
    },
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none",
    },
    "&.Mui-active": {
      width: 20,
      height: 20,
    },
  },
  "& .MuiSlider-rail": {
    opacity: 1,
  },
  "& .MuiSlider-markLabel": {
    color: MinetTheme.palette.text.mediumEmphasis,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px",
  },
});

const SliderAtom = ({
  max,
  min,
  step,
  value,
  marks,
  onChange,
}: ISliderProps) => {
  return (
    <StyledSlider
      orientation="vertical"
      max={max}
      min={min}
      value={value}
      step={step}
      marks={marks}
      onChange={onChange}
    />
  );
};

export default SliderAtom;
