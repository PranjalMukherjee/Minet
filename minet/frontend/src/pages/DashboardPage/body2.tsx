import React from "react";
import MyPortfolio from "../../components/organisms/MyPortfolio";
import MyWallet from "../../components/organisms/MyWallet";
import ImageAtom from "../../components/atoms/Image";
import RecentTransaction from "../../../public/images/recentTranscations.svg";
import { Box, styled } from "@mui/material";
import theme from "../../theme";

const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: theme.palette.background.paper,
  paddingTop: "24px"
});
const RightBody = () => {
  return (
    <OuterBox data-testid="right-body">
      <MyPortfolio />
      <MyWallet
        cost="1000"
        recentTransaction={
          <ImageAtom
            sourceImage={RecentTransaction}
            style={{ width: 350, height: 90, top: 208, left: 24 }}
          />
        }
      />
    </OuterBox>
  );
};

export default RightBody;
