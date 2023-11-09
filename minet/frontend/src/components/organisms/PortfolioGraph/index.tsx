import React from "react";
import { StyledBorder, StyledContent, StyledOutline } from "./styles";
import { Stack } from "@mui/material";
import TimePeriod from "../../molecules/TimePeriod";
import TypographyAtom from "../../atoms/Typography";
import { CURRENT_VALUE, TOTAL_INVESTMENT } from "../../../utils/constant";
import MinetTheme from "../../../theme";
import { IPortfolioGraphProps } from "../../../interface";
import Arrow from "../../../../public/images/p&l.svg";
import Icons from "../../atoms/IconAtom";
import GraphAtom from "../../atoms/Graph";
import IconTypo from "../../molecules/IconTypo";
import Orange from "../../../../public/images/organeCircle.svg";
import Blue from "../../../../public/images/blueCircle.svg";
import Loss from "../../../../public/images/loss.svg";

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

const IconStack = (twoWay: boolean, percent?: string) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    gap={"7.48px"}
    paddingTop={twoWay ? "0" : "2px"}
  >
    <Icons src={percent?.startsWith('-') ? Loss : Arrow} alt="arrow" />
    <TypographyAtom
      label={percent?.startsWith('-') ? `${percent}%` : `+${percent}%`}
      variant="caption2"
      color={percent?.startsWith('-') ? MinetTheme.palette.error[500] : MinetTheme.palette.success[500]}
    />
  </Stack>
);

const TwoWayStack = (
  text?: string,
  cost?: string | number,
  percent?: string
) => (
  <Stack direction={"column"} gap={"8px"}>
    <Stack direction={"row"} gap={"11.5px"} alignItems={"center"}>
      {Title(text)}
      {IconStack(true, percent)}
    </Stack>
    {Cost(cost)}
  </Stack>
);

const PortfolioGraph = ({
  coinName,
  totalCost,
  totalPercent,
  coinCost,
  coinPercent,
  graphData,
  legends,
}: IPortfolioGraphProps) => {
  return (
    <StyledOutline>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        {legends ? (
          <Stack direction={"row"} gap={"24px"}>
            {TwoWayStack(TOTAL_INVESTMENT, totalCost, totalPercent)}
            {graphData.length > 1 && <StyledBorder /> &&
              TwoWayStack(coinName, coinCost, coinPercent)}
          </Stack>
        ) : (
          <Stack justifyContent={"flex-start"} gap={"2px"}>
            {Title(CURRENT_VALUE)}
            {Cost(coinCost)}
            {IconStack(false, coinPercent)}
          </Stack>
        )}
        <StyledContent>
          <TimePeriod isUnderlined={legends} />
          {legends && graphData.length > 1 && (
            <Stack direction={"row"} gap={"24px"}>
              {coinName && <IconTypo iconImge={Orange} text={coinName} />}
              <IconTypo iconImge={Blue} text={TOTAL_INVESTMENT} />
            </Stack>
          )}
        </StyledContent>
      </Stack>
      <Stack>
        <GraphAtom
          graphData={graphData}
          enableYGrid={true}
          showXAxis={true}
          showLegends={false}
          height={"246px"}
          margins={{ top: 0, right: 15, bottom: 25, left: 15 }}
        />
      </Stack>
    </StyledOutline>
  );
};

export default PortfolioGraph;
