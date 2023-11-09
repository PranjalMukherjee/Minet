import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../../theme";

export const StyledOutline = styled(Box)({
  //maxWidth: 398,
  // maxHeight: 313,
  gap: 20,
  display: "flex",
  flexDirection: "column",
  padding: "0px 24px 0px 24px",
  background: theme.palette.background.paper,
});
export const StyledFirstContainer = styled(Box)({
  gap: "24px",

  display: "flex",
});
export const StyledSecondContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
export const StyledFirstBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
});
export const StyledSecondBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",

  gap: 4,
});

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",

  gap: "4px",
});
export const StyledThirdContainer = styled(Box)({
  gap: 10,
  display: "flex",
  flexDirection: "column",
});
export const StyledTable = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxHeight: "200px",
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
