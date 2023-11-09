import { Card, CardHeader, CardContent } from "@mui/material";
import React from "react";
import { TradeCardProp } from "../../../interface";
import styled from "@emotion/styled";
import AvatorAtom from "../../atoms/Avator";
import UnFilledStar from "../../../../public/images/unfilledStar.svg";
import Star from "../../../../public/images/star.svg";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import ButtonAtom from "../../atoms/Button";
import IconAtom from "../../atoms/Icon";

const StyledCard = styled(Card)({
  display: "flex",
  width: "94vw",
  height: 74,
  radius: 4,
  border: "1px solid",
  padding: "10px",
  alignItems: "center",
  borderColor: MinetTheme.palette.grey[100],
  backgroundColor: MinetTheme.palette.background.paper,
  boxShadow: "none",
});

const StyledCardHeader = styled(CardHeader)({
  minWidth: "380px",
  height: 42,
  color: MinetTheme.palette.text.highEmphasis,
});

const TradeCard = ({
  cyptoDetail,
  change,
  marketCap,
  price,
  watchListed,
  onClick,
  handleRedirect,
}: TradeCardProp) => {
  const cyptoChangePercent = `${
    change?.startsWith("-") ? change : "+" + change
  }%`;
  return (
    <StyledCard>
      <StyledCardHeader
        avatar={<AvatorAtom src={cyptoDetail.icon} />}
        title={
          <TypographyAtom
            variant="body1"
            label={cyptoDetail.heading}
            color={MinetTheme.palette.text.highEmphasis}
          />
        }
        subheader={
          <TypographyAtom
            variant="overline"
            label={cyptoDetail.subHeading.toUpperCase()}
            color={MinetTheme.palette.text.mediumEmphasis}
          />
        }
        onClick={handleRedirect}
        data-testid={cyptoDetail.heading + "-deatils"}
      />
      <CardContent
        sx={{
          minWidth: "350px",
          height: 42,
          alignItems: "center",
          display: "flex",
        }}
      >
        <TypographyAtom
          variant="body2"
          label={`$ ${price}`}
          color={MinetTheme.palette.text.highEmphasis}
        />
      </CardContent>
      <CardContent
        sx={{
          width: "1200px",
          paddingLeft: "135px",
          height: 42,
          alignItems: "center",
          display: "flex",
        }}
      >
        <TypographyAtom
          variant="body2"
          label={cyptoChangePercent}
          color={
            change?.startsWith("-")
              ? MinetTheme.palette.error[500]
              : MinetTheme.palette.success[500]
          }
        />
      </CardContent>
      <CardContent
        sx={{
          width: "100vw",
          paddingLeft: "135px",
          height: 42,
          alignItems: "center",
          display: "flex",
        }}
      >
        <TypographyAtom
          variant="body2"
          label={`$ ${marketCap}`}
          color={MinetTheme.palette.text.highEmphasis}
        />
      </CardContent>
      <CardContent
        sx={{
          width: "440px",
          paddingLeft: "100px",
          height: 42,
          alignItems: "center",
          display: "flex",
        }}
      >
        <ButtonAtom
          startIcon={
            watchListed ? (
              <IconAtom src={Star} alt="Star" />
            ) : (
              <IconAtom src={UnFilledStar} alt="UnFilledStar" />
            )
          }
          onClick={onClick}
          data-testid={watchListed ? "test-star" : "test-unstar"}
        />
      </CardContent>
    </StyledCard>
  );
};
export default TradeCard;
