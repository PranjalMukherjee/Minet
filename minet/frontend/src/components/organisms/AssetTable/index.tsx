/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Tabs from "../../molecules/Tabs";
import { TradeTabItems } from "../../../utils/constant";
import theme from "../../../theme";
import TypographyAtom from "../../atoms/Typography";
import Switch from "../../../../public/images/switch.svg";
import IconAtom from "../../atoms/Icon";
import TradeCard from "../../molecules/TradeCard";
import SearchIcon from "../../../../public/images/searchicon.svg";
import DropDown from "../../../../public/images/textdrop.svg";
import DropDownIcon from "../../../../public/images/dropdowntext.svg";

import { useNavigate } from "react-router-dom";
import { IAssetTable, OriginalData, WatchlistType } from "../../../interface";
import { getCoins, getWatchlistByUser } from "../../../services/watchlist";
import { CoinDetails} from "../../../utils/type";
import { addWatchlist } from "../../../services/details";
import { getUserIdFromSessionStorage } from "../../../utils/Utility";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 18px",
  borderRadius: "4px",
});
const StyledIconButton = styled(IconButton)({
  padding: "0px 0px 6px 0px",
  height: "10px",
  width: "13px",
});
const StyledIconComponent = styled(IconAtom)({
  paddingBottom: "18px",
});
const StyledMainBox = styled(Box)({
  sx: { width: "91vw" },
  minHeight: "600px",
});
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    height: "40px",
    paddingRight: "5px",
    borderRadius: "4px",
    "&:hover fieldset": {
      border: `1px solid ${theme.palette.grey[100]}`,
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.grey[100]} !important`,
    padding: "0px",
  },
  input: {
    "&::placeholder": {
      color: theme.palette.text.mediumEmphasis,
      fontFamily: theme.typography.body2,
    },
  },
  variant: "outlined",
  width: "20vw",
  height: "40px",
});
const AssetTable = ({ selectedTab }: IAssetTable) => {
  const [tabsValue, setTabsValue] = useState(selectedTab);
  const navigate = useNavigate();
  const [result, setResult] = useState<OriginalData[]>([]);
  const [rowData, setRowData] = useState<OriginalData[]>([]);
  const userId = getUserIdFromSessionStorage("userId");
  useEffect(() => {
    const coinIdToWatchlist: { [key: string]: boolean } = {};
    const fetchData = async () => {
      const coinsData = await getCoins();
      const watchlistData: WatchlistType[] = await getWatchlistByUser(userId);

      watchlistData.forEach((item: WatchlistType) => {
        coinIdToWatchlist[item.coinId] = item.watchlist;
      });
      const originalData = coinsData.map((coin: CoinDetails) => ({
        ...coin,
        is_watchlisted: coinIdToWatchlist[coin.id] || false,
      }));
      setResult(originalData);
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    setRowData(result);
  }, [result]);
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const handleSearchFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.target.value.toLowerCase().replace(/\s/g, "");
    const data = result.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setRowData(data);
  };

  const toggleWatchlist = (id: string, isWatchlisted: boolean) => {
    const updateWatchList = async () => {
      await addWatchlist(userId, id, !isWatchlisted);
    };
    updateWatchList();
    const updatedData = rowData.map((item) => {
      if (item.id === id) {
        return { ...item, is_watchlisted: !item.is_watchlisted };
      }
      return item;
    });
    setRowData(updatedData);
  };

  const HeadingTabs = (
    <StyledBox>
      <TypographyAtom
        sx={{ minWidth: "140px", fontSize: "14px" }}
        color={theme.palette.grey[500]}
        variant="body1"
        label="Name"
      />
      <TypographyAtom
        sx={{ minWidth: "115px", fontSize: "14px" }}
        color={theme.palette.grey[500]}
        variant="body1"
        label="Price"
      />
      <TypographyAtom
        color={theme.palette.grey[500]}
        variant="body1"
        label="Change"
        sx={{ fontSize: "14px" }}
      />
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"12px"}
        alignItems={"center"}
        minWidth={"130px"}
      >
        <TypographyAtom
          color={theme.palette.grey[500]}
          variant="body1"
          label="Market Cap"
          sx={{ fontSize: "14px" }}
        />
        <StyledIconButton data-testid="market-cap-button">
          <StyledIconComponent
            src={Switch}
            alt={"Icon is not found"}
            style={{ paddingTop: "27px" }}
          />
        </StyledIconButton>
      </Box>
      <TypographyAtom
        color={theme.palette.grey[500]}
        variant="body1"
        label="Watch"
        sx={{ fontSize: "14px" }}
      />
    </StyledBox>
  );

  return (
    <Box data-testid="asset-table" paddingTop={"2px"}>
      <Box
        display="flex"
        justifyContent={"space-between"}
        sx={{ width: "91vw" }}
      >
        <Box data-testid="tabs-component">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Tabs
              tabItems={TradeTabItems}
              value={tabsValue}
              handleChange={handleChange}
              sx={{
                textTransform: "none",
                width: "150px",
                "&.Mui-selected": {
                  color: theme.palette.primary[500],
                },
                color: theme.palette.text.mediumEmphasis,
              }}
              activeIndex={tabsValue}
            />
            <Box display={"flex"} gap={"12px"}>
              <StyledTextField
                placeholder={"Search all assets"}
                onChange={handleSearchFilterChange}
                sx={{
                  "& input": {
                    fontFamily: theme.typography.body2,
                    fontWeight: 400,
                  },
                }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconAtom src={SearchIcon} alt={"Seacrh Icon"} />
                    </InputAdornment>
                  ),
                }}
              />
              <Box display={"flex"} gap={"12px"}>
                <IconAtom src={DropDown} alt="24dropdown" />
                <IconAtom src={DropDownIcon} alt="assets icon" />
              </Box>
            </Box>
          </Box>
          <StyledMainBox
            id="1"
            data-testid={tabsValue === 0 ? "assests" : "watchlist"}
          >
            {HeadingTabs}
            <Box>
              {rowData
                .filter((item) =>
                  tabsValue === 1 ? item.is_watchlisted === true : true
                )
                .map((data:OriginalData) => (
                  <Box key={data.id} marginBottom="16px">
                    <TradeCard
                      cyptoDetail={{
                        heading: data.name,
                        subHeading: data.symbol,
                        icon: data.image,
                      }}
                      price={data.current_price.toString()}
                      change={data.price_change_percentage_24h.toString()}
                      marketCap={data.market_cap.toString()}
                      watchListed={data.is_watchlisted}
                      onClick={() =>
                        toggleWatchlist(data.id, data.is_watchlisted)
                      }
                      handleRedirect={() => {
                        sessionStorage.setItem("selectedCoinId", data.id);
                        navigate("/details", {
                          state: {
                            coinName: data.id,
                            showTabs: true,
                            tabValue: 0,
                            coinWatchlisted: data.is_watchlisted,
                          },
                        });
                      }}
                      data-testid={data.name.toLowerCase() + "-test"}
                    />
                  </Box>
                ))}
            </Box>
          </StyledMainBox>
        </Box>
      </Box>
    </Box>
  );
};

export default AssetTable;
