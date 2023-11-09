import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import MinetTheme from "../../../theme";
import TypographyAtom from "../../atoms/Typography";
import CryptoCard from "../../molecules/CryptoCard";
import { ICrypto, OriginalData } from "../../../interface";
import { getCoins } from "../../../services/watchlist";
const StyledOutline = styled(Box)({
  gap: "12px",
  background: MinetTheme.palette.background.paper,
});

const StyledOuterBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  flexWrap: "wrap",
  maxHeight: 328,
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

const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  padding: "24px",
  borderRadius: "4px",
});
const CryptoSelection = ({
  transaction_type,
  selectedCoin,
  setSymbol,
  setUnitPrice,
  setCoinName,
}: ICrypto) => {
  const [coinSelected, setCoinSelected] = useState(selectedCoin);
  const [coinsData, setCoinsData] = useState<
    {
      id: string;
      icon: string;
      name: string;
      unitPrice: number;
      isChecked: boolean;
    }[]
  >([]);
  const cryptoCoinsMap = useMemo(() => {
    const map = new Map();
    return map;
  }, []);
  const reloadContent = (id: string) => {
    const cyptoPriceSymbol = cryptoCoinsMap.get(id);
    setCoinSelected(id);
    setSymbol(cyptoPriceSymbol.symbol);
    setUnitPrice(cyptoPriceSymbol.unitPrice);
    sessionStorage.setItem("selectedCoinId", id);
    setCoinName(id);
  };
  useEffect(() => {
    const getData = async () => {
      await getCoins().then((response) => {
        const coins_data: OriginalData[] = response;
        const convertedData = coins_data?.map((item: OriginalData) => {
          const coinInfo = {
            id: item.id,
            icon: item.image,
            name: item.name,
            unitPrice: item.current_price,
            isChecked: item.id === coinSelected,
          };
          cryptoCoinsMap.set(item.id, {
            symbol: item.symbol,
            unitPrice: item.current_price,
          });

          return coinInfo;
        });
        setCoinsData(convertedData);
      });
    };
    getData();
  }, [coinSelected, cryptoCoinsMap]);

  return (
    <>
      <TypographyAtom
        label={`${transaction_type === "BUY" ? "Buy" : "Sell"} Crypto`}
        variant="subtitle1"
        color={MinetTheme.palette.text.highEmphasis}
      />
      <StyledOutline>
        <StyledContainer>
          <TypographyAtom
            label={"Choose crypto"}
            variant="body1"
            color={MinetTheme.palette.text.highEmphasis}
            sx={{ paddingBottom: "20px" }}
          />
          <StyledOuterBox>
            {coinsData?.map((data) => (
              <CryptoCard
                key={data.id}
                isChecked={data.isChecked}
                currencyImage={data.icon}
                currencyName={data.name}
                currencyValue={data.unitPrice.toString()}
                handleClick={() => reloadContent(data.id)}
              />
            ))}
          </StyledOuterBox>
        </StyledContainer>
      </StyledOutline>
    </>
  );
};
export default CryptoSelection;
