import { Box, Card, InputAdornment, TextField, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Icons from "../../atoms/IconAtom";
import Dollar from "../../../../public/images/dolor.svg";
import DropDown from "../../../../public/images/dropdown.svg";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";
import ButtonAtom from "../../atoms/Button";

import SearchIcon from "../../../../public/images/searchWallet.svg";
import { BALANCE, DEPOSIT, SEARCH, WITHDRAW } from "../../../utils/constant";
import WalletTransactionCard from "../../molecules/WalletTransactionCard";
import { IWalletBody, OriginalData } from "../../../interface/index";

import { getDate, getMonth, getUserIdFromSessionStorage } from "../../../utils/Utility";
import { PortfolioService, Transaction } from "../../../utils/type";
import { getAllCrypto, getTransactions } from "../../../services/portfolio";
import { getCoins } from "../../../services/watchlist";

const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "24px",
  background: theme.palette.primary[100],
  boxShadow: "none",
});
const WatchList = styled(Card)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "4px",
  border: `1px solid ${theme.palette.grey[100]}`,
  padding: "24px",
  boxShadow: "none",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  gap: 12,
});
const WatchListBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  boxShadow: "none",
});
const InnerTable = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  maxHeight: "658px",
  boxShadow: "none",
  gap: "10px",
});
const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "50px",
  backgroundColor: theme.palette.grey[50],
  boxShadow: "none",
});
const MainTable = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxHeight: "658px",
  boxShadow: "none",
});
const SearchBar = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  boxShadow: "none",
  gap: "10px",
  height: "40px",
  marginTop: "10px",
  marginBottom: "10px",
});
const DataTable = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "24px",
  borderRadius: "0px 0px 4px 4px",
  border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow: "none",
  background: theme.palette.background.paper,
  maxHeight: "490px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#D9D9D9",
    borderRadius: "5px",
    width: "6px",
    height: 145,
    border: " 4px solid transparent",
    backgroundClip: "content-box",
  },
});

const WalletBody = (props: IWalletBody) => {
  const [transactionDetails, setTransactionDetails] =
    useState<PortfolioService[]>();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const userId = getUserIdFromSessionStorage("userId");
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const totalData: PortfolioService[] = [];
    const fetchData = async () => {
      const transactionResponse = await getTransactions();
      const coinResponse = await getCoins();
      const cryptoResponse = await getAllCrypto();

      cryptoResponse?.map(async (value: PortfolioService) => {
        const transactions:Transaction = transactionResponse.filter(
          (data: Transaction) => data.cryptoHoldingId === value.id && value.userId ===userId
        )[0];
        const coinDetails:OriginalData = coinResponse.filter(
          (data: OriginalData) => data.id === value.cryptoId && value.userId ===userId
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

      let filteredData;

      if (!props.showAllTranscation) {
        filteredData = totalData.filter(
          (item: PortfolioService) =>
            item.symbol.toLowerCase() === props.coinName?.toLowerCase()
        );
      } else {
        filteredData = totalData;
      }
      setTransactionDetails(filteredData);
      const totalQuantity = filteredData.reduce(
        (sum: number, transaction: PortfolioService) =>
          sum + transaction.quantity,
        0
      );
      setTotalQuantity(totalQuantity);

      const totalAmount = filteredData.reduce(
        (sum: number, transaction: PortfolioService) =>
          sum + (transaction.purchasePrice || transaction.sellPrice),
        0
      );
      setTotalAmount(totalAmount);
    };
    fetchData();
  }, [props.coinName, props.showAllTranscation]);

  return (
    <OuterBox data-testid="wallet-test">
      {props.header && (
        <WatchList>
          <StyledBox>
            <Icons
              src={Dollar}
              alt="Not found"
              style={{ width: 56, height: 56 }}
            />
            <Box component="div">
              <TypographyAtom
                label="USD Coin"
                variant="h6"
                color={theme.palette.gray[500]}
              />
              <TypographyAtom
                label="Cash"
                variant="body1"
                color={theme.palette.text.mediumEmphasis}
              />
            </Box>
          </StyledBox>
          <WatchListBox>
            <ButtonAtom
              variant="outlined"
              sx={{
                padding: "0px 16px",
                border: `1px solid ${theme.palette.primary[500]}`,
              }}
            >
              <TypographyAtom
                variant="button"
                color={theme.palette.primary[500]}
                label={DEPOSIT}
              />
            </ButtonAtom>
            <ButtonAtom
              variant="outlined"
              sx={{
                padding: "0px 16px",
                border: `1px solid ${theme.palette.primary[500]}`,
              }}
            >
              <TypographyAtom
                variant="button"
                color={theme.palette.primary[500]}
                label={WITHDRAW}
              />
            </ButtonAtom>
          </WatchListBox>
        </WatchList>
      )}
      <InnerTable>
        {props.showWallet && (
          <TypographyAtom
            variant="subtitle2"
            label="Wallet"
            color={theme.palette.gray[500]}
          />
        )}
        <HeaderBox>
          <TypographyAtom
            variant="subtitle1"
            label={BALANCE}
            color={theme.palette.text.highEmphasis}
            sx={{ marginLeft: "25px" }}
          />
          {!props.showAllTranscation ? (
            <TypographyAtom
              variant="subtitle1"
              label={`${totalQuantity} ${props.coinName} ($${totalAmount})`}
              color={theme.palette.text.highEmphasis}
              sx={{ marginRight: "1130px" }}
            />
          ) : (
            <TypographyAtom
              variant="subtitle1"
              label={`$ ${totalAmount}`}
              color={theme.palette.text.highEmphasis}
              sx={{ marginRight: "25px" }}
            />
          )}
        </HeaderBox>
        <MainTable>
          <SearchBar>
            <TextField
              placeholder={SEARCH}
              sx={{
                width: "280px",
                "& input": {
                  height: "5px",
                },
                background: "white",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icons src={SearchIcon} alt="d" />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"4px"}
              width={"94px"}
              height={"35px"}
              sx={{ background: "white", border: "1px solid grey" }}
            >
              <TypographyAtom
                variant="body1"
                color={theme.palette.text.highEmphasis}
                label="1M"
              />
              <Icons src={DropDown} alt="Not found" />
            </Box>
          </SearchBar>

          <DataTable>
            {transactionDetails?.filter((data)=>data.userId===userId).map((value:PortfolioService) => (
              <WalletTransactionCard
                key={value.id}
                date={getDate(value.date)}
                month={getMonth(value.date)}
                transactionStatus={value.status.toLowerCase()}
                cryptoName={`Received ${value.name}`}
                name={value.brokerName}
                crytoAction={value.type}
                cost={value.quantity}
                income={
                  value.type === "Purchased"
                    ? value.purchasePrice.toString()
                    : value.sellPrice.toString()
                }
                symbol={value.symbol}
              />
            ))}
          </DataTable>
        </MainTable>
      </InnerTable>
    </OuterBox>
  );
};

export default WalletBody;
