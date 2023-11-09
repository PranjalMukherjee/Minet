import React from "react";
import { styled } from "@mui/system";
import LeftNavBar from "../../organisms/LeftNavBar";
import { Box, Grid, Stack } from "@mui/material";
import Header from "../../organisms/Header";
import { IDetailsProps } from "../../../interface";
import Footer from "../../molecules/FooterCard";
import MinetTheme from "../../../theme";

const StyledOutline = styled(Box)({
  display: "flex",
  background: MinetTheme.palette.primary[100],
  height: "100vh",
});

const MainContent = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
  overflow: "auto",
});

const StyledContent = styled(Stack)({
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  borderRight: "none",
  padding: "24px",
  height:"100vw",
});

const StyledGrid = styled(Grid)({
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  borderRight: "none",
  padding: "24px",
  height: "100%",
});

const Details = ({
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
      <Stack direction={"column"} width={"100vw"}>
        <Header
          title={title}
          handleBuy={handleBuy}
          handleSell={handleSell}
          buttons={buttons}
        />
        <MainContent>
          {body2 ? (
            <Grid container>
              <StyledGrid item xs={8}>
                {body1}
              </StyledGrid>
              <Grid item xs={4} alignItems={"flex-start"} borderLeft={`1px solid ${MinetTheme.palette.background.paper}`} sx={{background:MinetTheme.palette.background.paper}}>
                {body2}
              </Grid>
            </Grid>
          ) : (
            <StyledContent>{body1}</StyledContent>
          )}
          <Footer />
        </MainContent>
      </Stack>
    </StyledOutline>
  );
};

export default Details;