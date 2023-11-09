import { Box, Card, styled } from "@mui/material";
import React from "react";
import Icons from "../../atoms/IconAtom";
import Check from "../../../../public/images/transaction state.svg";
import { CryptoCardProps } from "../../../interface/index";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";
const WrapperBox = styled(Card)({
  width: "159px",
  height: "156px",
  border: "1px solid ",
  position: "relative",
  boxShadow: "none",
});

const CheckIcon = styled(Icons)({
  position: "absolute",
  top: "1px",
  right: "5px",
  zIndex: 1,
});

const BitcoinIcon = styled(Icons)({
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "56px",
  height: "56px",
});
const TextBox = styled(Box)({
  gap: "2px",
  marginTop: "53%",

  alignItems: "center",
  display: "flex",
  flexDirection: "column",

  height: "auto",
  boxShadow: "none",
  justifyContent: "center",
});
const CryptoCard = ({
  isChecked,
  currencyImage,
  currencyName,
  currencyValue,
  handleClick,
}: CryptoCardProps) => {
  return (
    <WrapperBox
      sx={
        isChecked
          ? { borderColor: theme.palette.primary[500] }
          : {
              borderColor: theme.palette.gray[300],
              boxShadow: "0",
              border: "0",
            }
      }
      data-testid="checked-card"
      onClick={handleClick}
    >
      {isChecked && (
        <CheckIcon src={Check} alt={currencyName} data-testid={"icon-check"} />
      )}
      <BitcoinIcon src={currencyImage} alt={currencyName} />
      <TextBox>
        <TypographyAtom
          variant="body1"
          color={theme.palette.gray[500]}
          label={currencyName}
        />
        <TypographyAtom
          variant="caption1"
          color={theme.palette.text.mediumEmphasis}
          label={`$ ${currencyValue}`}
        />
      </TextBox>
    </WrapperBox>
  );
};

export default CryptoCard;
