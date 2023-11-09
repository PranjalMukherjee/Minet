import React from "react";
import {
  StyledContent,
  StyledOutline,
} from "../../components/organisms/PortfolioGraph/styles";
import { Box, Stack, styled } from "@mui/material";
import TimePeriod from "../../components/molecules/TimePeriod";
import TypographyAtom from "../../components/atoms/Typography";
import { TOTAL_INVESTMENT } from "../../utils/constant";
import MinetTheme from "../../theme";
import Icons from "../../components/atoms/IconAtom";
import Empty from "../../../public/images/nobalance.svg";
import Profit from "../../../public/images/profit.svg";

const StyledImageBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const Title = (text?: string) => (
  <TypographyAtom
    label={text}
    variant="caption1"
    color={MinetTheme.palette.text.mediumEmphasis}
  />
);

const Cost = (cost?: string | number) => (
  <TypographyAtom
    label={`$${cost}`}
    variant="h6"
    color={MinetTheme.palette.text.highEmphasis}
  />
);

const EmptyGraph = () => {
  return (
    <StyledOutline data-testid="test-graph">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Stack justifyContent={"flex-start"} gap={"10px"}>
          {Title(TOTAL_INVESTMENT)}
          {Cost("0.0")}
        </Stack>
        <Stack direction={"row"}>
          <Icons src={Profit} alt="no" style={{ marginTop: -5 }} />
          <TypographyAtom
            label={`+0.0%`}
            variant="caption2"
            color={MinetTheme.palette.success[500]}
           sx={{marginRight:"700px"}}
          />
        </Stack>
        <StyledContent>
          <TimePeriod isUnderlined={true} />
        </StyledContent>
      </Stack>
      <StyledImageBox>
        <Icons src={Empty} alt="no" />
      </StyledImageBox>
    </StyledOutline>
  );
};

export default EmptyGraph;
