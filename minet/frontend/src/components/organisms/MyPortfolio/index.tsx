import React, { useEffect, useState } from "react";
import TypographyAtom from "../../atoms/Typography";
import {
  StyledFirstContainer,
  StyledOutline,
  StyledSecondContainer,
} from "./style";
import Grid from "../../../../public/images/Frame 94.svg";
import ImageAtom from "../../atoms/Image";
import { Box } from "@mui/material";
import PortfolioCard from "../../molecules/PortfiloCard";
import DividerAtom from "../../atoms/Divider";
import { IMyPortfolio, OriginalData } from "../../../interface";
import MinetTheme from "../../../theme";


import { fetchWalletData } from "../../../services/details";
import { getUserIdFromSessionStorage } from "../../../utils/Utility";

import { getAllCrypto } from "../../../services/portfolio";
import { getCoins } from "../../../services/watchlist";
import { PortfolioService } from "../../../utils/type";

export const fetchMyPortfolio = async () => {
  const coinsData = await getCoins();
  const cryptoHoldingData = await getAllCrypto();
  const coinCryptoIds: string[] = [];
  cryptoHoldingData?.filter((data:PortfolioService)=>data.userId===getUserIdFromSessionStorage("userId")).map((response: PortfolioService) =>
  
    coinCryptoIds.push(response.cryptoId)
  );
  const portfolioData = coinsData?.filter((data: OriginalData) =>
    coinCryptoIds.includes(data.id)
  );
  return portfolioData;
};

const MyPortfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [walletAmount, setWalletAmount] = useState<number>();

  const userId = getUserIdFromSessionStorage("userId");
  useEffect(() => {
    const walletData = async () => {
      if (userId) {
        await fetchWalletData(userId).then(async (res) => {
          setWalletAmount(res.totalBalance);
        });
      }
    };
    walletData();
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMyPortfolio();
        setPortfolioData(response);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <StyledOutline>
      <StyledFirstContainer>
        <Box>
          <TypographyAtom
            variant="subtitle1"
            label="My Portfolio"
            style={{ marginRight: "auto", marginLeft: "10px" }}
            color={MinetTheme.palette.text.highEmphasis}
          />
        </Box>
        <ImageAtom
          sourceImage={Grid}
          style={{ marginLeft: "auto", alignItems: "end" }}
        />
      </StyledFirstContainer>

      <StyledSecondContainer>
        {portfolioData?.map((data: IMyPortfolio) => (
          <PortfolioCard
            key={data.id}
            imageSrc={data.image}
            coinName={data.name}
            sortName={data.symbol}
            valueInDollar={`${data.current_price}`}
            growthPercent={`${data.price_change_percentage_24h}`}
            data-testid="portfolio-box"
          />
        ))}
      </StyledSecondContainer>
      <DividerAtom direction="horizontal" />
      <StyledFirstContainer>
        <Box>
          <TypographyAtom
            variant="body1"
            label="Total Balance"
            color={MinetTheme.palette.text.mediumEmphasis}
            style={{ marginRight: "auto" }}
          />
        </Box>
        <TypographyAtom
          variant="body1"
          label={"$" + walletAmount}
          color={MinetTheme.palette.text.highEmphasis}
          style={{ marginLeft: "auto", alignItems: "end" }}
        />
      </StyledFirstContainer>
      <DividerAtom direction="horizontal" />
    </StyledOutline>
  );
};
export default MyPortfolio;
