import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledOuterBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 0px 16px 0px",
});

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
export const StyledDateBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
export const StyledTransactionSatusBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "6px",
});
export const StyledSubHeadingBox = styled(Box)({
  display: "flex",
  gap: 10,
});
