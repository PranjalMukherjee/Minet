import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icons from "../../atoms/Icon";
import TruckIcon from "../../../../public/images/truck.svg";
import {
  StyledOutline,
  StyledInnerBox,
  StyledOuterBox,
} from "../PaymentMethod";

const StyledInnerBoxDropDown = styled(Box)({
  height: "54px",
  padding: "16px 24px 16px 45px",
  justify: "space-between",
  display: "flex",
  alignItems: "end",
});
const StyledInnerBox1 = styled(Box)({
  height: "22px",
  display: "flex",
  justify: "space-between",
});

const StyledInnerBox2 = styled(Box)({
  marginLeft: "auto",
});
const SpeedDeliveryCard = () => {
  return (
    <StyledOutline>
      <TypographyAtom
        label="Select speed delivery"
        variant="body1"
        color={MinetTheme.palette.text.highEmphasis}
      />
      <Accordion
        sx={{
          boxShadow: "none",
          border: "1px solid",
          color: MinetTheme.palette.grey[100],
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StyledOuterBox>
            <Icons src={TruckIcon} alt={"dolor"} />
            <StyledInnerBox>
              <TypographyAtom
                variant="caption1"
                color={MinetTheme.palette.text.highEmphasis}
                label="Instant : 2-5 min"
              />
              <TypographyAtom
                variant="overline"
                color={MinetTheme.palette.text.mediumEmphasis}
                label="Delivery fees : 0.001 BTC"
              />
            </StyledInnerBox>
          </StyledOuterBox>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <StyledInnerBoxDropDown bgcolor={MinetTheme.palette.grey[50]}>
            <StyledInnerBox1>
              <TypographyAtom
                variant="body2"
                color={MinetTheme.palette.text.highEmphasis}
                label="Instant : "
              />
              &nbsp;
              <TypographyAtom
                variant="body1"
                color={MinetTheme.palette.text.highEmphasis}
                label=" 2-5 min"
              />
            </StyledInnerBox1>
            <StyledInnerBox2>
              <TypographyAtom
                sx={{ textAlign: "right" }}
                variant="caption2"
                color={MinetTheme.palette.text.mediumEmphasis}
                label="Delivery fees : 0.001 BTC"
              />
            </StyledInnerBox2>
          </StyledInnerBoxDropDown>
          <Divider />
          <StyledInnerBoxDropDown>
            <StyledInnerBox1>
              <TypographyAtom
                variant="body2"
                color={MinetTheme.palette.text.highEmphasis}
                label="Faster : "
              />
              &nbsp;
              <TypographyAtom
                variant="body1"
                color={MinetTheme.palette.text.highEmphasis}
                label=" 4 hours"
              />
            </StyledInnerBox1>
            <StyledInnerBox2>
              <TypographyAtom
                sx={{ textAlign: "right" }}
                variant="caption2"
                color={MinetTheme.palette.text.mediumEmphasis}
                label="Delivery fees : 0.001 BTC"
              />
            </StyledInnerBox2>
          </StyledInnerBoxDropDown>
          <Divider />
          <StyledInnerBoxDropDown>
            <StyledInnerBox1>
              <TypographyAtom
                variant="body2"
                color={MinetTheme.palette.text.highEmphasis}
                label="Fast : "
              />
              &nbsp;
              <TypographyAtom
                variant="body1"
                color={MinetTheme.palette.text.highEmphasis}
                label=" 120 hours"
              />
            </StyledInnerBox1>
            <StyledInnerBox2>
              <TypographyAtom
                sx={{ textAlign: "right" }}
                variant="caption2"
                color={MinetTheme.palette.text.mediumEmphasis}
                label="Delivery fees : 0.001 BTC"
              />
            </StyledInnerBox2>
          </StyledInnerBoxDropDown>
          <Divider />
          <StyledInnerBoxDropDown>
            <StyledInnerBox1>
              <TypographyAtom
                variant="body2"
                color={MinetTheme.palette.text.highEmphasis}
                label="None"
              />
            </StyledInnerBox1>
          </StyledInnerBoxDropDown>
        </AccordionDetails>
      </Accordion>
    </StyledOutline>
  );
};
export default SpeedDeliveryCard;
