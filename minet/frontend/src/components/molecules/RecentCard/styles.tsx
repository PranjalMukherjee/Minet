import { Box } from "@mui/material";
import { styled } from "@mui/system";
import MinetTheme from "../../../theme";

export const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const StyledInnerContainer = styled(Box)({
  display: "flex",
  gap: "12px",
});

export const StyledOuterBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const StyledTextBox = styled(Box)({
  background: MinetTheme.palette.grey[100],
  borderRadius: "100px",
  padding: "2px 8px",
  width: "fit-content",
});
