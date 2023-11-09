import { Chip } from "@mui/material";
import React from "react";
import { ChipProp } from "../../../interface/index";
import MinetTheme from "../../../theme";
import TypographyAtom from "../Typography";

const ChipAtom = ({ chipLabel, style ,onClick}: ChipProp) => {
  return (
    <Chip
      label={
        <TypographyAtom
          variant="body2"
          label={chipLabel}
          color={MinetTheme.palette.text.highEmphasis}
          
        />
      }
      sx={style}
     onClick={onClick}
     data-testid={"chip-atom-" + chipLabel}
    />
  );
};
export default ChipAtom;
