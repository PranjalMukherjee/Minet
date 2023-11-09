import styled from "@emotion/styled";
import { Box } from "@mui/material";
import MinetTheme from "../../../theme";

export const StyledOutline = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  padding: "12px",
  borderRadius: "4px",
});
export const StyledContainer = styled(Box)({
  justifyContent: "space-between",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "row",
  gap: 33,
  alignItems: "center",
});

export const StyledInnerContainerLeft = styled(Box)({
  justifyContent: "space-between",
  maxWidth: "531px",
  display: "flex",
  flexDirection: "row",
});
export const StyledInnerContainerRight = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: 24,
});

export const StyledTextBox = styled(Box)({
  maxWidth: "308px",
  display: "flex",
  flexDirection: "column",
  gap: 5,
});
export const StyledIconBox = styled(Box)({
  display: "flex",
  gap: "10px",
  maxHeight: 58,
});
