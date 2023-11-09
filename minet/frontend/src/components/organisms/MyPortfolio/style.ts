
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../../theme";

export const StyledOutline = styled(Box)({
  gap: 7,
  display: "flex",
  padding: "0px 24px 0px 24px",
  flexDirection: "column",
  background:theme.palette.background.paper
});
export const StyledFirstContainer = styled(Box)({
  gap: "24px",
  display: "flex",
});

export const StyledSecondContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",

  gap: "16px",
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
