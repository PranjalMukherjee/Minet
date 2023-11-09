import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import {
  ENTER_PASSWORD,
  LOGIN,
  PASSWORD_ERROR,
  PASSWORD_REGEX,
  RESET,
  RE_ENTER,
} from "../../../utils/constant";
import InputLabel from "../../molecules/InputLabel";
import ButtonAtom from "../../atoms/Button";
import Icons from "../../atoms/IconAtom";
import Close from "../../../../public/images/eyeicon.svg";
import Open from "../../../../public/images/eye.svg";
import ResetCard from "../../molecules/ResetCard";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../services/resetPassword";


const StyledOutline = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  maxWidth: "512px",
});

const StyledForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const ResetPassword = () => {
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [reset, setReset] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (
      PASSWORD_REGEX.test(password) &&
      PASSWORD_REGEX.test(confirmPassword) &&
      password === confirmPassword
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [password, confirmPassword]);

  const updatePassword = async() => {
    await resetPassword(state?.resetEmail,password).then(() => { setReset(false) })
  }

  const handleButton = () => {
    reset ? updatePassword() : navigate("/")
  }


  return (
    <StyledOutline data-testid="resetpassword-component">
      <TypographyAtom
        variant="h4"
        color={MinetTheme.palette.text.highEmphasis}
        label={RESET}
      />
      {reset ? 
      (<StyledForm>
        <InputLabel
          value={password}
          label={ENTER_PASSWORD}
          placeholder={ENTER_PASSWORD}
          type={showConfirmPassword ? "text" : "password"}
          icon={
            <Icons
              src={showConfirmPassword ? Open : Close}
              alt="eye"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputLabel
          value={confirmPassword}
          label={RE_ENTER}
          placeholder={ENTER_PASSWORD}
          type={showPassword ? "text" : "password"}
          icon={
            <Icons
              src={showPassword ? Open : Close}
              alt="eye"
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TypographyAtom
          label={PASSWORD_ERROR}
          variant="caption2"
          color={MinetTheme.palette.gray[500]}
        />
      </StyledForm>)
      :
      (
        <ResetCard />
      )
    }
      <ButtonAtom
        onClick={() => handleButton()}
        disabled={isValid}
        variant="contained"
      >
        {
          <TypographyAtom
            label={reset ? RESET : LOGIN}
            variant="button"
            color={MinetTheme.palette.background.paper}
          />
        }
      </ButtonAtom>
    </StyledOutline>
  );
};

export default ResetPassword;
