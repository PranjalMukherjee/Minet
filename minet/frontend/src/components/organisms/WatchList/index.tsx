import { Stack, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  StyledBorder,
  StyledInnerOutline,
  StyledLeftBox,
  StyledOutline,
  StyledRightBox,
} from "./styles";
import TypographyAtom from "../../atoms/Typography";
import {
  DISCOVERY_ASSERTS,
  VIEW_WATCHLIST,
  WATCHLIST,
} from "../../../utils/constant";
import MinetTheme from "../../../theme";
import { CryptoCard, OriginalData, WatchlistType } from "../../../interface";
import Icons from "../../atoms/IconAtom";
import RightArrow from "../../../../public/images/arrow.svg";
import Pen from "../../../../public/images/pen.svg";
import GridIcon from "../../../../public/images/grid.svg";
import CyptoCardGraph from "../../molecules/CyptoCardwithGraph";
import { useNavigate } from "react-router-dom";
import { getCoins, getWatchlistByUser } from "../../../services/watchlist";
import {
  getTokenFromSessionStorage,
  getUserIdFromSessionStorage,
} from "../../../utils/Utility";

const WatchList = () => {
  const navigate = useNavigate();
  const tokenFromStorage = getTokenFromSessionStorage("token");
  const [watchListData, setWatchListData] = useState<CryptoCard[]>([]);
  const mapData = (originalData: OriginalData) => {
    const transformedData = {
      name: originalData.name,
      icon: originalData.image,
      percent: parseFloat(originalData.price_change_percentage_24h.toFixed(2)),
      cost: originalData.current_price,
    };

    return transformedData;
  };
  const userId = getUserIdFromSessionStorage("userId");
  useEffect(() => {
    const fetchData = async () => {
      const coins = await getCoins();
      const watchlist = await getWatchlistByUser(userId);
      const watchlistCoinIds = watchlist
        .filter((item: WatchlistType) => item.watchlist)
        .map((item: WatchlistType) => item.coinId);
      const result = coins
        ?.filter((coin: OriginalData) => watchlistCoinIds.includes(coin.id))
        .map((item: OriginalData) => mapData(item));
      setWatchListData(result);
    };
    if (tokenFromStorage !== null || tokenFromStorage !== undefined)
      fetchData();
  }, [tokenFromStorage, userId]);

  return (
    <StyledOutline>
      <Stack justifyContent={"space-between"} direction={"row"}>
        <StyledInnerOutline>
          <TypographyAtom
            label={WATCHLIST}
            variant="subtitle1"
            color={MinetTheme.palette.text.highEmphasis}
          />
          <StyledBorder />
          <StyledLeftBox
            onClick={() => navigate("/trade", { state: { selectedTab: 0 } })}
          >
            <TypographyAtom
              label={DISCOVERY_ASSERTS}
              variant="caption1"
              color={MinetTheme.palette.primary[500]}
            />
            <Icons src={RightArrow} alt="rightArrow" />
          </StyledLeftBox>
        </StyledInnerOutline>
        <StyledInnerOutline>
          <StyledRightBox
            onClick={() => navigate("/trade", { state: { selectedTab: 1 } })}
          >
            <TypographyAtom
              label={VIEW_WATCHLIST}
              variant="caption1"
              color={MinetTheme.palette.primary[500]}
            />
            <Icons src={Pen} alt="pen" />
          </StyledRightBox>
          <StyledBorder />
          <Icons src={GridIcon} alt="grid" />
        </StyledInnerOutline>
      </Stack>
      <Grid container spacing={6}>
        {watchListData?.map((card: CryptoCard, index) => {
          return (
            <Grid
              role={"gridcell"}
              key={card.id}
              item
              xs={
                index + 1 === watchListData.length &&
                watchListData.length % 2 != 0
                  ? 12
                  : 6
              }
            >
              <CyptoCardGraph
                icon={card.icon}
                profitOrLossPercentage={card.percent}
                name={card.name}
                valuePerOneCoin={card.cost}
                onClick={() =>
                  navigate("/trade", { state: { selectedTab: 0 } })
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </StyledOutline>
  );
};

export default WatchList;
