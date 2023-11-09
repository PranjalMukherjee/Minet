import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import {
  BACK,
  EMAIL,
  EMAIL_REGEX,
  FORGOT_TITLE,
  LOGIN,
  MAIL,
  RESET,
} from "../../../utils/constant";
import InputLabel from "../../molecules/InputLabel";
import ButtonAtom from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const StyledOutline = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  maxWidth: "512px",
});

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate()


  useEffect(() => {
    setIsValid(!EMAIL_REGEX.test(email));
  }, [email]);

  return (
    <StyledOutline data-testid='forgotpassword-component'>
      <TypographyAtom
        variant="h4"
        color={MinetTheme.palette.text.highEmphasis}
        label={FORGOT_TITLE}
      />
      <InputLabel
        label={EMAIL}
        placeholder={MAIL}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ButtonAtom onClick={() => navigate("/resetpassword",{state:{resetEmail:email}})} disabled={isValid} variant="contained">
        {
          <TypographyAtom
            label={RESET}
            variant="button"
            color={MinetTheme.palette.background.paper}
          />
        }
      </ButtonAtom>
      <Stack direction={"row"} gap={"8px"}>
        <TypographyAtom
          variant="body1"
          color={MinetTheme.palette.text.mediumEmphasis}
          label={BACK}
        />
        <TypographyAtom
          variant="body1"
          color={MinetTheme.palette.primary[500]}
          label={LOGIN}
          onClick={() => navigate("/",{state:{resetEmail: email}})}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </StyledOutline>
  );
};

export default ForgetPassword;
