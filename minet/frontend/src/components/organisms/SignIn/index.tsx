import React, { useEffect, useState } from "react";
import { Grid, Link, Stack } from "@mui/material";
import theme from "../../../theme";
import TypographyAtom from "../../atoms/Typography";
import Close from "../../../../public/images/eyeicon.svg";
import Open from "../../../../public/images/eye.svg";
import {
  EMAIL,
  EMAIL_INVALID,
  EMAIL_REGEX,
  ENTER_PASSWORD,
  FORGOT_PASSWORD,
  LOGIN_LINK_TEXT,
  LOGIN_TEXT,
  MAIL,
  PASSWORD_LABEL,
  PASSWORD_REGEX,
  SIGNIN_BUTTON,
  SIGNIN_HEADER,
  EMAIL_IS_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_INVALID,
} from "../../../utils/constant";
import ButtonAtom from "../../atoms/Button";
import InputLabel from "../../molecules/InputLabel";
import Icons from "../../atoms/IconAtom";
import { divider } from "../SignUp";
import SocialLogin from "../../molecules/SocialLogin";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { signInToApp } from "../../../services/details";
import {
  setTokenInSessionStorage,
  setUserIdInSessionStorage,
} from "../../../utils/Utility";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: EMAIL_IS_REQUIRED,
      }));
    } else if (!EMAIL_REGEX.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: EMAIL_INVALID,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: PASSWORD_REQUIRED,
      }));
    } else if (!PASSWORD_REGEX.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: PASSWORD_INVALID,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    validatePassword(value);
  };
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    const emailId = email;
    const passwor = password;
    const signIn = async () => {
      await signInToApp(emailId, passwor).then((resposne) => {
        if (resposne?.userId) {
          setUserIdInSessionStorage(resposne.userId);
          setTokenInSessionStorage(resposne.token);
          navigate("/dashboard");
        } else {
          alert(resposne.message);
        }
      });
    };
    signIn();
  };

  useEffect(() => {
    if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [email, password]);

  const buttonStyles = {
    width: "100%",
    height: theme.spacing(10.5),
    borderRadius: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
    },
    "&.Mui-disabled": {
      color: theme.palette.text.disabled,
      background: theme.palette.primary[300],
    },
  };

  return (
    <div data-testid="signin-component">
      <Grid
        container
        gap={theme.spacing(8)}
        direction={"column"}
        justifyContent={"center"}
        padding={theme.spacing(8)}
        maxWidth={"100%"}
      >
        <Grid item>
          <TypographyAtom
            variant={"h4"}
            color={theme.palette.text.highEmphasis}
            label={SIGNIN_HEADER}
          />
        </Grid>
        <Grid item>
          <Grid container gap={theme.spacing(6)} direction={"column"}>
            <Grid item>
              <InputLabel
                label={EMAIL}
                placeholder={MAIL}
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <TypographyAtom
                  variant="caption"
                  color={theme.palette.error.main}
                  label={errors.email}
                />
              )}
            </Grid>
            <Grid item>
              <InputLabel
                value={password}
                label={PASSWORD_LABEL}
                placeholder={ENTER_PASSWORD}
                type={showPassword ? "text" : "password"}
                icon={
                  <Icons
                    src={showPassword ? Open : Close}
                    alt="eye"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                }
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <TypographyAtom
                  variant="caption"
                  color={theme.palette.error.main}
                  label={errors.password}
                />
              )}
            </Grid>
            <Grid item data-testid="forgotpassword">
              <Link href={"/forgotPassword"} underline="none">
                <TypographyAtom
                  color={theme.palette.primary[500]}
                  variant="body2"
                  label={FORGOT_PASSWORD}
                />
              </Link>
            </Grid>
            <Grid item data-testid="signIn-button">
              <ButtonAtom
                sx={buttonStyles}
                variant="contained"
                disabled={isValid}
                onClick={handleFormSubmit}
              >
                <TypographyAtom
                  variant="button"
                  color={theme.palette.background.paper}
                  label={SIGNIN_BUTTON}
                />
              </ButtonAtom>
            </Grid>
          </Grid>
        </Grid>
        {divider}
        <Grid item>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <SocialLogin
              onGoogleSignIn={() => {
                loginWithRedirect();
              }}
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction={"row"} gap={theme.spacing(1)}>
            <TypographyAtom
              variant={"body1"}
              color={theme.palette.text.mediumEmphasis}
              label={LOGIN_TEXT}
            />
            <Link href={"/signUp"} underline="none">
              <TypographyAtom
                color={theme.palette.primary[500]}
                variant="body1"
                label={LOGIN_LINK_TEXT}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
