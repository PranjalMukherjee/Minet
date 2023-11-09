import { Box, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import WatchList from "../../components/organisms/WatchList";
import {
  CURRENCY_INFO,
  cryptoData,
  singleCryptoData,
} from "../../utils/constant";
import TypographyAtom from "../../components/atoms/Typography";
import theme from "../../theme";
import Icons from "../../components/atoms/IconAtom";
import PortfolioValue from "../../../public/images/portfoliovalue.svg";
import Info from "../../../public/images/info.svg";
import PortfolioGraph from "../../components/organisms/PortfolioGraph";
import CurrencySelector from "../../components/molecules/CurrencySelector";
import { IDashboardProps } from "../../interface";
import EmptyGraph from "./emptyGraph";
const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
const TypoIcon = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
const LeftBody = (props: IDashboardProps) => {
  const [cryptoId, setCryptoId] = useState<number>(0);
  const handleClick = (id: number) => {
    setCryptoId(id);
  };
  const renderPortfolioGraph = () => {
    if (props.totalInvestment === 0) {
      return <EmptyGraph />;
    } else if (cryptoId === 1) {
      return (
        <PortfolioGraph
          legends={true}
          coinCost={"12,400"}
          coinPercent={"8.2"}
          graphData={cryptoData}
          coinName="Bitcoin"
          totalPercent="1.2"
          totalCost={props.totalInvestment}
        />
      );
    } else if (cryptoId === 4) {
      return (
        <PortfolioGraph
          legends={true}
          coinCost={"13,400"}
          coinPercent={"3.5"}
          graphData={cryptoData}
          coinName="Etherium"
          totalPercent="1.2"
          totalCost={props.totalInvestment}
        />
      );
    } else {
      return (
        <PortfolioGraph
          legends={true}
          coinCost={""}
          coinPercent={""}
          graphData={singleCryptoData}
          coinName=""
          totalPercent="1.2"
          totalCost={props.totalInvestment}
        />
      );
    }
  };
  return (
    <OuterBox data-testid="left-body">
      <WatchList />
      <TypoIcon>
        <TypographyAtom
          variant="subtitle1"
          label={"My portfolio value"}
          color={theme.palette.text.highEmphasis}
        />
        <Icons src={PortfolioValue} alt="no" />
      </TypoIcon>
      {renderPortfolioGraph()}

      {props.totalInvestment !== 0 ? (
        <>
          {" "}
          <InfoBox>
            <TypographyAtom
              variant="body1"
              label={"10 coins (2 active)"}
              color={theme.palette.text.highEmphasis}
            />
            <Stack direction={"row"} alignItems={"center"}>
              <Icons src={Info} alt="no" />
              <TypographyAtom
                label={CURRENCY_INFO}
                variant="caption2"
                color={theme.palette.text.highEmphasis}
              />
            </Stack>
          </InfoBox>
          <CurrencySelector
            handleCurrencyClick={(id) => {
              handleClick(id);
            }}
            data-testid="chip-test"
          />
        </>
      ) : null}
    </OuterBox>
  );
};

export default LeftBody;
