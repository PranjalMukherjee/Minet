import React from "react";
import { Stack } from "@mui/material";
import theme from "../../../theme";
import ImageAtom from "../../atoms/Image";
import ProfitIcon from "../../../../public/images/profit.svg";
import LossIcon from "../../../../public/images/loss.svg";
import TypographyAtom from "../../atoms/Typography";
import GraphAtom from "../../atoms/Graph";

import {
  StyledGraphContentBox,
  StyledIconContentBox,
  StyledMainBox,
  StyledTextBox,
} from "./styles";
import { CyptoProps } from "../../../interface";
import { singleCryptoData } from "../../../utils/constant";

const CyptoCardGraph = (props: CyptoProps) => {
  const { name } = props;
  const valueLabel = `$${props.valuePerOneCoin.toLocaleString("en-US")}`;
  const isProfit = props.profitOrLossPercentage >= 0;
  const profitOrLossIcon = isProfit ? ProfitIcon : LossIcon;
  const profitOrLossPercentageLabelColor = isProfit
    ? theme.palette.success[500]
    : theme.palette.error[500];
  return (
    <div>
      <StyledMainBox onClick={props.onClick}>
        <StyledIconContentBox>
          <ImageAtom sourceImage={props.icon} style={{width:"42px",height:"42px"}} />
          <Stack gap={"18px"}>
          <Stack gap={"2px"}>
            <TypographyAtom
              variant="body1"
              color={theme.palette.text.highEmphasis}
              label={name}
            />
            <TypographyAtom
              variant="body1"
              color={theme.palette.text.highEmphasis}
              label={valueLabel}
            />
          </Stack>
          <StyledTextBox>
                <TypographyAtom
                  variant="overline"
                  label="24h"
                  color={theme.palette.text.mediumEmphasis}
                />
              </StyledTextBox>
          </Stack>
        </StyledIconContentBox>
        <StyledGraphContentBox>
          <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"}>
            <ImageAtom sourceImage={profitOrLossIcon} />
            <TypographyAtom
              variant="overline"
              color={profitOrLossPercentageLabelColor}
              label={props.profitOrLossPercentage}
            />
          </Stack>

          <Stack  width={"99%"}>
            <GraphAtom
              graphData={singleCryptoData}
              enableYGrid={false}
              showLegends={false}
              showXAxis={false}
              height="58px"/>
          </Stack>
        </StyledGraphContentBox>
      </StyledMainBox>
    </div>
  );
};

export default CyptoCardGraph;
