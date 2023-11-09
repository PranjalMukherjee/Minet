import { Box } from "@mui/material";
import { styled } from "@mui/system";
import MinetTheme from "../../../theme";
import React from "react";
import Icons from "../../atoms/Icon";
import Success from "../../../../public/images/success.svg";
import TypographyAtom from "../../atoms/Typography";
import { PROCEED_TEXT, RESET_SUCCESS } from "../../../utils/constant";

const StyledOuterBox = styled(Box)({
  display: "flex",
  gap: "12px",
  padding: "24px",
  alignItems: "flex-start",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  borderRadius: "12px",
  maxWidth: "512px",
  background: MinetTheme.palette.primary[100],
});

const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const ResetCard = () => {
  return (
    <StyledOuterBox>
      <Icons src={Success} alt="success" />
      <StyledInnerBox>
        <TypographyAtom
          variant="body1"
          label={RESET_SUCCESS}
          color={MinetTheme.palette.text.highEmphasis}
        />
        <TypographyAtom
          variant="body2"
          label={PROCEED_TEXT}
          color={MinetTheme.palette.text.mediumEmphasis}
        />
      </StyledInnerBox>
    </StyledOuterBox>
  );
};

export default ResetCard;
