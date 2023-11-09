import { styled } from "@mui/system";
import MinetTheme from "../../../theme";
import { Box } from "@mui/material";
import Dolor from "../../../../public/images/dolor.svg";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import {
  DEFAULT,
  PAYMENT_METHOD,
  TOTAL_BALANCE,
  USD_COIN,
} from "../../../utils/constant";
import Icons from "../../atoms/Icon";
import { IPaymentMethodProps } from "../../../interface";

export const StyledOutline = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  padding: "24px",
  borderRadius: "4px",
  background:MinetTheme.palette.background.paper
});

export const StyledOuterBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
});

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const StyledContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  padding: "16px",
  borderRadius: "4px",
});

const PaymentMethod = ({ cost }: IPaymentMethodProps) => {
  return (
    <StyledOutline>
      <TypographyAtom
        label={PAYMENT_METHOD}
        variant="body1"
        color={MinetTheme.palette.text.highEmphasis}
      />
      <StyledContainer>
        <StyledOuterBox>
          <Icons src={Dolor} alt={"dolor"} />
          <StyledInnerBox>
            <TypographyAtom
              variant="caption1"
              color={MinetTheme.palette.text.highEmphasis}
              label={USD_COIN}
            />
            <TypographyAtom
              variant="subtitle1"
              color={MinetTheme.palette.text.mediumEmphasis}
              label={`${TOTAL_BALANCE} - $${cost}`}
            />
          </StyledInnerBox>
        </StyledOuterBox>
        <TypographyAtom
          variant="caption1"
          color={MinetTheme.palette.text.mediumEmphasis}
          label={DEFAULT}
        />
      </StyledContainer>
    </StyledOutline>
  );
};

export default PaymentMethod;
