import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../../theme";


export const StyledMainBox = styled(Box)({
  display: "flex",
  gap: "39px",
  alignItems: "center",
  border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  maxHeight: "130px",
  padding: "24px",
  cursor:"pointer"
});

export const StyledGraphContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width:"100%"
});


export const StyledTextBox = styled(Box)({
  background: theme.palette.grey[100],
  borderRadius: "100px",
  width: "fit-content",
  padding:"2px 8px",
});

export const StyledIconContentBox = styled(Box)({
  display: "flex",
  gap: theme.spacing(2.5),
  alignItems:"flex-start",
  maxWidth:"124px",
});
