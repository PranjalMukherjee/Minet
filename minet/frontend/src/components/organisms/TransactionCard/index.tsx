import { Box, Card, Divider, styled } from "@mui/material";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";
import DividerAtom from "../../atoms/Divider";
import Icons from "../../atoms/IconAtom";
import Payment from "../../../../public/images/paymentmethod.svg";
import Truck from "../../../../public/images/vehicle.svg";
import Wallet from "../../../../public/images/wallet.svg";
import Dash from "../../../../public/images/dot.svg";
import Gap from "../../../../public/images/gap.svg";
import ButtonAtom from "../../atoms/Button";
import { ITransactionCardProps } from "../../../interface";
const OuterBox = styled(Card)({
  display: "flex",
  flexDirection: "column",
  maxHeight: "647px",
  maxWidth: "550px",
  gap: "25px",
  padding: 10,
  paddingBottom: "66px",
  boxShadow: "none",
  border: `1px solid ${theme.palette.gray[300]}`,
});
const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "122px",
  gap: "15px",
  boxShadow: "none",
});
const BodyBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  width: "200px",
  height: "200px",
  paddingLeft: "16px",
  boxShadow: "none",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "40px",
  width: "260px",
  boxShadow: "none",
});
const InnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  height: "90px",
  width: "220px",
  padding: "0px, 0px, 0px, 24px",
  gap: "8px",
  boxShadow: "none",
});
const FooterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "122px",
  gap: "12px",
  marginLeft: "20px",
  marginTop: "-17px",
  boxShadow: "none",
});
const FooterContent = styled(Box)({
  display: "flex",
  width: "100%",
  height: "22px",
  flexDirection: "row",
  boxShadow: "none",
});
const TransactionCard = (props: ITransactionCardProps) => {
  return (
    <OuterBox data-testid="test-transaction">
      <HeaderBox>
        <TypographyAtom
          label={props.headerStatement}
          color={theme.palette.text.mediumEmphasis}
          variant="caption1"
          data-testid="test-buy"
        />
        <TypographyAtom
          label={props.amount}
          color={theme.palette.text.highEmphasis}
          variant="h6"
        />

        <TypographyAtom
          label={props.unit}
          color={theme.palette.text.mediumEmphasis}
          variant="caption1"
        />
      </HeaderBox>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        sx={{ maxWidth: "100%" }}
      />
      <BodyBox>
        <InnerBox>
          <Icons src={Payment} alt="Not Found" />
          <StyledBox>
            <TypographyAtom
              variant="caption2"
              color={theme.palette.text.mediumEmphasis}
              label="Payment method"
            />
            <TypographyAtom
              variant="body1"
              color={theme.palette.text.highEmphasis}
              label={props.paymentSource}
            />
          </StyledBox>
        </InnerBox>
        <Icons src={Dash} alt="Not Found" style={{ marginLeft: "19px" }} />
        <InnerBox>
          <Icons src={Truck} alt="Not Found" />
          <StyledBox>
            <TypographyAtom
              variant="caption2"
              color={theme.palette.text.mediumEmphasis}
              label="Delivery fees"
            />
            <TypographyAtom
              variant="body1"
              color={theme.palette.text.highEmphasis}
              label={props.deliveryFees}
            />
          </StyledBox>
        </InnerBox>
        <Icons src={Dash} alt="Not Found" style={{ marginLeft: "19px" }} />
        <InnerBox>
          <Icons src={Wallet} alt="Not Found" />
          <StyledBox>
            <TypographyAtom
              variant="caption2"
              color={theme.palette.text.mediumEmphasis}
              label="Deposit to"
            />
            <TypographyAtom
              variant="body1"
              color={theme.palette.text.highEmphasis}
              label={props.deposit}
            />
          </StyledBox>
        </InnerBox>
      </BodyBox>
      <DividerAtom direction="horizontal" sx={{ outerWidth: "100%" }} />
      <FooterBox>
        <FooterContent>
          <TypographyAtom
            variant="overline"
            color={theme.palette.text.highEmphasis}
            label={props.totalCurrencyQuantity}
          />
          <Box component="div">
            <Icons src={Gap} alt="Not found" style={{ marginLeft: "70px" }} />
          </Box>
          <TypographyAtom
            variant="overline"
            color={theme.palette.text.highEmphasis}
            label={props.totalCurrencyAmount}
          />
        </FooterContent>
        <FooterContent>
          <TypographyAtom
            variant="overline"
            color={theme.palette.text.highEmphasis}
            label="Transaction fee"
          />
          <Icons src={Gap} alt="Not found" style={{ marginLeft: "16px" }} />
          <TypographyAtom
            variant="overline"
            color={theme.palette.text.highEmphasis}
            label="$30.00"
          />
        </FooterContent>
        <FooterContent>
          <TypographyAtom
            variant="body1"
            color={theme.palette.text.highEmphasis}
            label="Total"
          />
          <Icons src={Gap} alt="Not found" style={{ marginLeft: "40px" }} />
          <TypographyAtom
            variant="body1"
            color={theme.palette.text.highEmphasis}
            label={props.totalAmount}
            sx={{ marginLeft: "15px" }}
          />
        </FooterContent>
      </FooterBox>
      <ButtonAtom
        variant="contained"
        onClick={props.handleTransaction}
        data-testid="test-onClick"
        size="medium"
        sx={{ margin: "0px 20px 40px 20px" }}
      >
        <TypographyAtom variant="button" label={props.buttonLabel} />
      </ButtonAtom>
    </OuterBox>
  );
};

export default TransactionCard;
