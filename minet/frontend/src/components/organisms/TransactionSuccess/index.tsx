import { Box, styled } from "@mui/material";
import React from "react";
import Icons from "../../atoms/IconAtom";
import Tic from "../../../../public/images/BigTick.svg";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";
import ButtonAtom from "../../atoms/Button";
import { TransactionSuccessProps } from "../../../interface/index";


const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height:"100%",
  gap: "15px",
  background: theme.palette.primary[100],
});
const InnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  paddingTop:"20px",
});
const TransactionSuccess = (props: TransactionSuccessProps) => {
  return (
    <OuterBox data-testid="transaction-test">
      <Icons src={Tic} alt="Not found" />
      <TypographyAtom
        variant="h4"
        color={theme.palette.text.highEmphasis}
        label={props.amount}
      />
      <TypographyAtom
        variant="body2"
        color={theme.palette.text.highEmphasis}
        label={props.message}
        sx={{
          display: "flex",
          flexDirection: "column",
        
          justifyContent: "center",
          textAlign:"center"
        }}
      />
      <InnerBox>
        <ButtonAtom
          variant="outlined"
          sx={{
            padding:"0px 16px",
            borderColor: theme.palette.primary[500],
          }}
        >
          <TypographyAtom
            variant="button"
            color={theme.palette.primary[500]}
            label={props.coinLabel}
          />
        </ButtonAtom>
        <ButtonAtom
          variant="contained"
          sx={{
            padding:"0px 16px",
            background: theme.palette.primary[500],
          }}
          onClick={props.goToUSDCoin}
        >
          <TypographyAtom
            variant="button"
            color={theme.palette.background.paper}
            label="GO TO USD COIN"
          />
        </ButtonAtom>
      </InnerBox>
    </OuterBox>
  );
};

export default TransactionSuccess;
