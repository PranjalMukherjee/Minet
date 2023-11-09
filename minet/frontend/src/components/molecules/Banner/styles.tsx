import { Box } from "@mui/material";
import { styled } from "@mui/system";
import MinetTheme from "../../../theme";

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "16px 0px 16px 4px",
  gap: "8px",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  borderRadius: "4px",
  background: MinetTheme.palette.background.paper,
});

export const StyledBorder = styled(Box)({
  paddingTop: "12px",
  border: `3px solid ${MinetTheme.palette.grey[300]}`,
  width: "0px",
  height: "145.65px",
  borderRadius: "100px",
});

export const StyledOuterBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 12px 8px 24px",
});

export const StyledLeftBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  width: "100%",
});

export const StyledTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  // justifyContent: "space-between",
});

export const StyledRightBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  alignItems: "flex-end",
});
