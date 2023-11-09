import { Box, styled } from "@mui/material";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";
import ImageAtom from "../../atoms/Image";
import { IPortfolioCardProps } from "../../../interface/protfilocard-interface";

const StayledMainBox = styled(Box)({
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
});

const StayledIconBox = styled(Box)({
  display: "flex",
  gap: "10px",
});

const PortfolioCard = ({
  imageSrc,
  coinName,
  sortName,
  valueInDollar,
  growthPercent,
  isPriceCorrelation,
}: IPortfolioCardProps) => {
  const value = `$${valueInDollar}`;
  let textColor;

if (isPriceCorrelation) {
  textColor = theme.palette.text.lowEmphasis;
} else if (growthPercent.startsWith("-")) {
  textColor = theme.palette.error[500];
} else {
  textColor = theme.palette.success[500];
}

  const currency = `${growthPercent.startsWith("-") ? growthPercent : "+" + growthPercent}%`
  ;
  return (
    <StayledMainBox data-testid="portfolio-box">
      <StayledIconBox>
        <ImageAtom sourceImage={imageSrc} style={{width:"42px",height:"42px "}}/>
        <Box>
          <Box>
            <TypographyAtom
              variant="body1"
              color={theme.palette.text.highEmphasis}
              label={coinName}
            />
          </Box>
          <Box>
            <TypographyAtom
              variant="caption2"
              color={theme.palette.text.mediumEmphasis}
              label={sortName}
            />
          </Box>
        </Box>
      </StayledIconBox>
      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
        <Box>
          <TypographyAtom
            variant="body1"
            color={theme.palette.text.highEmphasis}
            label={value}
          />
        </Box>
        <Box textAlign={"right"}>
          <TypographyAtom
            variant="caption2"
            color={
             textColor
            }
            label={currency}
          />
        </Box>
      </Box>
    </StayledMainBox>
  );
};

export default PortfolioCard;
