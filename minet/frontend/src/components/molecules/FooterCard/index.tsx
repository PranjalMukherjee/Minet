import { Box, styled } from "@mui/material";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";

import DropDown from "../../../../public/images/dropdown.svg";
import Icons from "../../atoms/IconAtom";
import ButtonAtom from "../../atoms/Button";

const WrapperBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "24px",
  background: theme.palette.primary[100],
});
const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "42px",

  gap: "24px",
});
const FirstBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  width: "432px",
  height: "22px",

  gap: "17px",
});
const SecondBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  width: "285px",
  height: "42px",

  gap: "10px",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "170px",
  height: "42px",
  borderRadius: "4px",
  padding: "4px 12px",
  border: `1px solid`,
  borderColor: theme.palette.gray[300],
});

const Footer = () => {
  return (
    <WrapperBox data-testid="test_footer">
      <OuterBox>
        <FirstBox>
          <TypographyAtom
            variant="body2"
            color={theme.palette.primary[500]}
            label="Dashboard"
          />
          <TypographyAtom
            variant="body2"
            color={theme.palette.primary[500]}
            label="Careers"
          />
          <TypographyAtom
            variant="body2"
            color={theme.palette.primary[500]}
            label="Legal & Privacy"
          />
          <TypographyAtom
            variant="body2"
            color={theme.palette.text.highEmphasis}
            label="© 2023 Minet"
          />
        </FirstBox>
        <SecondBox>
          <StyledBox>
            <TypographyAtom
              variant="body2"
              label="English"
              color={theme.palette.text.highEmphasis}
            />
            <Icons src={DropDown} alt="no" />
          </StyledBox>
          <ButtonAtom
            variant="outlined"
            sx={{
              height: "42px",
              width: "114px",
              border: `1px solid ${theme.palette.primary[500]}`,
            }}
          >
            <TypographyAtom
              variant="button"
              label="NEED HELP"
              color={theme.palette.primary[500]}
            />
          </ButtonAtom>
        </SecondBox>
      </OuterBox>
    </WrapperBox>
  );
};

export default Footer;
