import styled from "@emotion/styled";
import { Box } from "@mui/material";
import MinetTheme from "../../../theme";

export const StyledOutline = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  padding: "24px",
  borderRadius: "4px",
  maxHeight: "318px",
  background:MinetTheme.palette.background.paper
});
export const StyledOuterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  borderRadius: "4px",
});
export const StyledInnerContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  padding: "16px",
  borderRadius: "4px",
});

export const StyledSliderBox = styled(Box)({
  display: "flex",
  maxWidth: "221.44px",
  maxHeight: "88px",
  alignItems: "center",
  gap: "12px",
  left: "67.69px",
});
