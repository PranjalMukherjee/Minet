import React, { useEffect, useState } from "react";
import Details from "../../components/templates/Details";
import { Stack } from "@mui/material";
import Banner from "../../components/molecules/Banner";
import {
  COIN_DETAILS,
  CONTENT,
  CORRELATION,
  DetailTabItems,
  GRAPH_DETAILS,
  RESOURCES_LIST,
} from "../../utils/constant";
import SubHeader from "../../components/organisms/SubHeader";
import Tabs from "../../components/molecules/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import PortfolioGraph from "../../components/organisms/PortfolioGraph";
import WalletBody from "../../components/organisms/WalletBody";
import { getCoinById } from "../../services/details";
const DetailsPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const coinName: string = state ? state.coinName : undefined;
  const coinWatchlisted = state ? state.coinWatchlisted : false;
  const [coinDetails, setCoinDetails] = useState(COIN_DETAILS);
  const [tabValue, setTabValue] = useState(state?.tabValue);
  const showTabs = state?.showTabs;
  const showAllTranscation = state?.showAllTranscation;

  useEffect(() => {
    const fetchData = async () => {
      setCoinDetails(await getCoinById(coinName));
    };
    fetchData();
  }, [coinName]);
  console.log("coindetails",coinDetails);

  return (
    <Details
      title="Trade"
      buttons
      handleBuy={() => {
        navigate(`/purchase`, {
          state: {
            transaction_type: "BUY",
            coin_name: coinDetails.id.toLowerCase(),
            symbol: coinDetails.symbol.toUpperCase(),
            unit_price: coinDetails.current_price,
            image: coinDetails.image,
            coinId: coinDetails.id
          },
        });
      }}
      handleSell={() =>
        navigate(`/purchase`, {
          state: {
            transaction_type: "SELL",
            coin_name: coinDetails.name.toLowerCase(),
            symbol: coinDetails.symbol.toUpperCase(),
            unit_price: coinDetails.current_price,
            image: coinDetails.image,
            coinId: coinDetails.id
          },
        })
      }
      body1={
        <Stack gap={"24px"} height={"100%"}>
          {showTabs ? (
            <>
              <SubHeader
                id={coinDetails.id}
                cryptoName={coinDetails.name}
                circulatingSupply={coinDetails.circulating_supply}
                growthRate={coinDetails.price_change_percentage_24h}
                icon={coinDetails.image}
                marketCap={coinDetails.market_cap}
                symbol={coinDetails.symbol.toUpperCase()}
                volume={9090}
                isPriceCorrelation={false}
                watchlisted={coinWatchlisted}
              />
              <Tabs
                tabItems={DetailTabItems}
                value={tabValue}
                handleChange={(e, newValue) => setTabValue(newValue)}
                activeIndex={tabValue}
              />
              {tabValue === 0 ? (
                <Stack gap={"24px"}>
                  <PortfolioGraph
                    coinCost={coinDetails.current_price.toString()}
                    coinPercent={coinDetails.price_change_percentage_24h.toString()}
                    graphData={GRAPH_DETAILS.graphData}
                    legends={false}
                  />
                  <Banner
                    name={coinDetails.name}
                    description={CONTENT}
                    items={CORRELATION}
                    resources={RESOURCES_LIST}
                  />
                </Stack>
              ) : (
                <WalletBody
                  totalBalance={undefined}
                  showWallet={false}
                  header={false}
                  coinName={coinDetails.symbol.toUpperCase()}
                  showAllTranscation={false}
                />
              )}
            </>
          ) : (
            <WalletBody
              totalBalance={undefined}
              showWallet={true}
              header={true}
              coinName={coinDetails.symbol.toUpperCase()}
              showAllTranscation={showAllTranscation}
            />
          )}
        </Stack>
      }
    />
  );
};

export default DetailsPage;
