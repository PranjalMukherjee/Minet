import { Box, Card, styled } from "@mui/material";
import React from "react";
import Icons from "../../atoms/Icon";
import Google from "../../../../public/images/google.svg";
import Facebook from "../../../../public/images/facebook.svg";
import Microsoft from "../../../../public/images/microsoft.svg";
import TypographyAtom from "../../atoms/Typography";
import theme from "../../../theme";
export interface SocialLoginProps{
  onGoogleSignIn?: ()=> void;
}
const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "96px",
  width: "150px",
  alignItems: "center",
  borderRadius: "12px",
  padding: "20px 40px",
  backgroundColor:theme.palette.primary[100],
  border:`1px solid ${theme.palette.gray[300]}`,
  boxShadow:"none"
});
const WrapperCard = styled(Box)({
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  width:"100%",
  height:"96px",
  borderColor:"white",
  boxShadow:"none"
})
const SocialLogin = ({onGoogleSignIn}:SocialLoginProps) => {
  return (
    <WrapperCard data-testid="social_login">
    <StyledCard onClick={onGoogleSignIn} style={{cursor:"pointer"}}>
      <Icons
        src={Google}
        alt="no"
        style={{ paddingTop: "6px", height: "70px", width: "20px" }}
      />
      <TypographyAtom
        variant="body1"
        label="Google"
        color={theme.palette.text.mediumEmphasis}
        sx={{ padding: "7px", paddingTop: "10px", paddingLeft: "10px" }}
      />
    </StyledCard>
      <StyledCard>
      <Icons
        src={Facebook}
        alt="no"
        style={{ paddingTop: "6px", height: "70px", width: "20px" }}
      />
      <TypographyAtom
        variant="body1"
        label="Facebook"
        color={theme.palette.text.mediumEmphasis}
        sx={{ padding: "7px", paddingTop: "10px", paddingLeft: "10px" }}
      />
    </StyledCard>
      <StyledCard>
      <Icons
        src={Microsoft}
        alt="no"
        style={{ paddingTop: "6px", height: "70px", width: "20px" }}
      />
      <TypographyAtom
        variant="body1"
        label="Microsoft"
        color={theme.palette.text.mediumEmphasis}
        sx={{ padding: "7px", paddingTop: "10px", paddingLeft: "10px" }}
      />
    </StyledCard>
    </WrapperCard>
  );
};

export default SocialLogin;
