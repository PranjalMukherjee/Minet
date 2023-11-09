import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import { USD_COIN } from "../../../utils/constant";
import Icons from "../../atoms/IconAtom";
import Dolor from "../../../../public/images/dolor.svg";

import { IMyWallet, OriginalData } from "../../../interface";
import ButtonAtom from "../../atoms/Button";
import {
  StyledFirstBox,
  StyledFirstContainer,
  StyledInnerBox,
  StyledOutline,
  StyledSecondContainer,
  StyledSecondBox,
  StyledThirdContainer,
  StyledTable,
} from "./style";

import RecentCard from "../../molecules/RecentCard";

import {
  getDate,
  getMonth,
  getUserIdFromSessionStorage,
} from "../../../utils/Utility";
import { fetchWalletData } from "../../../services/details";
import { PortfolioService, Transaction } from "../../../utils/type";
import { getAllCrypto, getTransactions } from "../../../services/portfolio";
import { getCoins } from "../../../services/watchlist";

const MyWallet = ({ recentTransaction }: IMyWallet) => {
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const userId = getUserIdFromSessionStorage("userId");
console.log(userId);
  const [transactionData, setTransactionData] = useState<PortfolioService[]>();
  useEffect(() => {
    const totalData: PortfolioService[] = [];
    const fetchData = async () => {
      await fetchWalletData(userId).then(async (res) => {
        setTotalBalance(res?.totalBalance);
        sessionStorage.setItem("totalWalletAmount", res?.totalBalance);
      });

      const transactionResponse = await getTransactions();

      const coinResponse = await getCoins();
      const cryptoResponse = await getAllCrypto();

      cryptoResponse?.map(async (value: PortfolioService) => {
        
        const transactions:Transaction = transactionResponse.filter(
          (data: Transaction) => data.cryptoHoldingId === value.id
        )[0];

        const coinDetails = coinResponse.filter(
          (data: OriginalData) => data.id === value.cryptoId
        )[0];

        const combinedObject = {
          ...value,
          status: transactions.status,
          type: transactions.type,
          date: transactions.date,
          cryptoHoldingId: transactions.cryptoHoldingId,
          name: coinDetails.name,
          symbol: coinDetails.symbol,
        };

        totalData.push(combinedObject);
      });
      setTransactionData(totalData);
    };
    fetchData();
  }, [userId]);


  return (
    <StyledOutline>
      <StyledFirstContainer>
        <TypographyAtom variant="subtitle1" label="My wallets" />
      </StyledFirstContainer>
      <StyledSecondContainer>
        <StyledFirstBox>
          <Icons src={Dolor} alt={"dolor"} />
          <StyledInnerBox>
            <TypographyAtom
              variant="body1"
              color={MinetTheme.palette.text.highEmphasis}
              label={USD_COIN}
            />
            <TypographyAtom
              variant="caption2"
              color={MinetTheme.palette.text.mediumEmphasis}
              label={"US Dollar"}
            />
          </StyledInnerBox>
        </StyledFirstBox>
        <StyledSecondBox>
          <TypographyAtom
            variant="caption1"
            color={MinetTheme.palette.text.mediumEmphasis}
            label={`$ ${totalBalance}`}
          />
        </StyledSecondBox>
      </StyledSecondContainer>
      <StyledThirdContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TypographyAtom variant="body1" label="Recent transactions" />
          <ButtonAtom variant="text" disabled={true}>
            <TypographyAtom
              variant="caption1"
              label="View All"
              color={MinetTheme.palette.primary[500]}
            />
          </ButtonAtom>
        </Box>
        {transactionData && transactionData.length <= 0 ? (
          <Box
            sx={{
              height: 105,
              padding: "10px",
            }}
            data-testid="test-image"
          >
            {recentTransaction}
          </Box>
        ) : (
          <StyledTable>
            {transactionData?.filter((data)=>data.userId===userId).map((value:PortfolioService) => {
              return (
                <RecentCard
                  key={value.id}
                  sold={value.type !== "Purchased"}
                  type={value.type}
                  status={value.status}
                  symbol={value.symbol.toUpperCase()}
                  date={getMonth(value.date) + " " + getDate(value.date)}
                  cost={value.purchasePrice || value.sellPrice}
                  quantity={value.quantity}
                  name={value.name}
                  data-testid="test-recent"
                />
              );
            })}
          </StyledTable>
        )}
      </StyledThirdContainer>
    </StyledOutline>
  );
};
export default MyWallet;
