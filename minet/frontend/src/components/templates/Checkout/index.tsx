import React from "react";
import { styled } from "@mui/system";
import LeftNavBar from "../../organisms/LeftNavBar";
import { Box, Stack } from "@mui/material";
import Header from "../../organisms/Header";
import { IDetailsProps } from "../../../interface";
import Footer from "../../molecules/FooterCard";
import MinetTheme from "../../../theme";

const StyledOutline = styled(Box)({
  display: "flex",
  background: MinetTheme.palette.primary[100],
  height: "100vh",
});

const StyledScrollBox = styled(Box)({
  gap: "16px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflow: "auto",
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
const Checkout = ({
  title,
  buttons,
  handleBuy,
  handleSell,
  body1,
  body2,
}: IDetailsProps) => {
  return (
    <StyledOutline>
      <LeftNavBar />

      <Stack direction={"column"} width={"100%"}>
        <Header
          title={title}
          handleBuy={handleBuy}
          handleSell={handleSell}
          buttons={buttons}
        />
        <Stack
          direction={"row"}
          gap={10}
          flex={1}
          overflow="auto"
          border={`1px solid ${MinetTheme.palette.grey[100]}`}
          width={"100%"}
        >
          <Box
            sx={{
              gap: "24px",
              display: "flex",
              flexDirection: "row",
              padding: "24px 24px 24px 50px",
              maxHeight: "1200px",
              overflowY: "auto",
            }}
          >
            <StyledScrollBox>{body1}</StyledScrollBox>
          </Box>
          <Stack>{body2}</Stack>
        </Stack>

        <Footer />
      </Stack>
    </StyledOutline>
  );
};
export default Checkout;
