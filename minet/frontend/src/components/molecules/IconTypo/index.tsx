import React from "react";
import TypographyAtom from "../../atoms/Typography";
import IconTypoProp from "../../../interface/icon-typo-inteface";
import ImageAtom from "../../atoms/Image";
import { Stack } from "@mui/material";

const IconTypo = ({ iconImge, text }: IconTypoProp) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <ImageAtom sourceImage={iconImge} />
      &nbsp;
      <TypographyAtom variant="overline" label={text} />
    </Stack>
  );
};

export default IconTypo;
