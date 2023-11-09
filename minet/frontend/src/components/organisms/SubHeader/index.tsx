import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MinetTheme from "../../../theme";
import ImageAtom from "../../atoms/Image";
import TypographyAtom from "../../atoms/Typography";
import { ISubHeder } from "../../../interface";
import DividerAtom from "../../atoms/Divider";
import ButtonAtom from "../../atoms/Button";
import StarIcon from "../../../../public/images/star.svg";
import ProfitIcon from "../../../../public/images/profit.svg";
import LossIcon from "../../../../public/images/loss.svg";
import { StyledTextBox } from "../../molecules/Banner/styles";
import {
  StyledOutline,
  StyledContainer,
  StyledIconBox,
  StyledInnerContainerLeft,
  StyledInnerContainerRight,
} from "./style";
import IconAtom from "../../atoms/Icon";
import { addWatchlist } from "../../../services/details";
import { getUserIdFromSessionStorage } from "../../../utils/Utility";

const SubHeader = ({
  id,
  cryptoName,
  icon,
  symbol,
  marketCap,
  volume,
  circulatingSupply,
  growthRate,
  watchlisted,
}: ISubHeder) => {
  const [coinWatchlisted, setCoinWatchlisted] = useState(watchlisted);
  const userId = getUserIdFromSessionStorage("userId");
  const handleButtonClick = () => {
    const updateWatchList = async () => {
      await addWatchlist(userId, id, true).then(() => {
        setCoinWatchlisted(true);
      });
    };
    updateWatchList();
  };
  const isNegativeGrowthRate = growthRate.toString()?.startsWith("-");
  useEffect(() => {}, [coinWatchlisted]);
  return (
    <StyledOutline>
      <StyledContainer sx={{ alignItems: "center" }}>
        <StyledInnerContainerLeft>
          <StyledIconBox>
            <ImageAtom sourceImage={icon} style={{ width: 56, height: 56 }} />
            <Box sx={{ alignItems: "center" }}>
              <Box>
                <TypographyAtom
                  variant="h6"
                  color={MinetTheme.palette.text.highEmphasis}
                  label={cryptoName}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TypographyAtom
                  variant="body1"
                  color={MinetTheme.palette.text.mediumEmphasis}
                  label={symbol}
                />
                <IconAtom
                  src={isNegativeGrowthRate ? LossIcon : ProfitIcon}
                  alt={isNegativeGrowthRate ? "Loss" : "Profit"}
                />
                <TypographyAtom
                  style={{ alignItems: "center", display: "flex" }}
                  variant="overline"
                  color={
                    isNegativeGrowthRate
                      ? MinetTheme.palette.error[500]
                      : MinetTheme.palette.success[500]
                  }
                  label={`${growthRate} %`}
                />
              </Box>
            </Box>
          </StyledIconBox>
          <DividerAtom
            direction={"vertical"}
            sx={{
              width: "40px",
              height: "60px",
              gap: 10,
            }}
          />
        </StyledInnerContainerLeft>
        <StyledInnerContainerRight>
          <StyledTextBox>
            <TypographyAtom
              label="MarketCap"
              variant="caption1"
              color={MinetTheme.palette.text.mediumEmphasis}
            />
            <TypographyAtom label={`$ ${marketCap}`} variant="body1" />
          </StyledTextBox>
          <StyledTextBox>
            <TypographyAtom
              label="Vol. 24H"
              variant="caption1"
              color={MinetTheme.palette.text.mediumEmphasis}
            />
            <TypographyAtom label={`$ ${volume}T`} variant="body1" />
          </StyledTextBox>
          <StyledTextBox>
            <TypographyAtom
              label="Circulating Supply"
              variant="caption1"
              color={MinetTheme.palette.text.mediumEmphasis}
            />
            <TypographyAtom label={`$ ${circulatingSupply}T`} variant="body1" />
          </StyledTextBox>
        </StyledInnerContainerRight>
      </StyledContainer>
      <StyledContainer sx={{ marginLeft: "auto" }}>
        <ButtonAtom
          startIcon={<ImageAtom sourceImage={StarIcon} />}
          variant="outlined"
          sx={{
            maxWidth: 215,
            maxHeight: 42,
            border: "1px solid #0052FF",
            color: "#0052FF",
            padding: "0px 16px 0px 8px",
          }}
          onClick={coinWatchlisted ? () => {} : handleButtonClick}
        >
          {coinWatchlisted ? (
            <TypographyAtom label="ADDED TO WATCHLIST" variant="button" />
          ) : (
            <TypographyAtom label="ADD TO WATCHLIST" variant="button" />
          )}
        </ButtonAtom>
      </StyledContainer>
    </StyledOutline>
  );
};
export default SubHeader;
