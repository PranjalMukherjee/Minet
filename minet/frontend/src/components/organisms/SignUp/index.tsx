import React, { useEffect, useState } from "react";
import theme from "../../../theme";
import { Grid, Link, Stack } from "@mui/material";
import TypographyAtom from "../../atoms/Typography";
import {
  EMAIL,
  EMAILINVALID_TEXT,
  EMAIL_REGEX,
  FULLNAME,
  FULLNAME_LABEL,
  MAIL,
  PASSWORDINVALID_TEXT,
  PASSWORDLABEL,
  PASSWORD_CREATE,
  PASSWORD_REGEX,
  PASSWORD_VALIDATION_TEXT,
  SIGNUP_BUTTON,
  SIGNUP_HEADING,
  SIGNUP_LINK_TEXT,
  SIGNUP_TEXT,
} from "../../../utils/constant";
import InputLabel from "../../molecules/InputLabel";
import Icons from "../../atoms/IconAtom";
import Close from "../../../../public/images/eyeicon.svg";
import Open from "../../../../public/images/eye.svg";
import ButtonAtom from "../../atoms/Button";
import DividerAtom from "../../atoms/Divider";
import SocialLogin from "../../molecules/SocialLogin";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { singUpToApp } from "../../../services/details";

export const divider = (
  <Grid item>
    <DividerAtom direction={"horizontal"}>
      <TypographyAtom
        variant={"caption1"}
        color={theme.palette.text.mediumEmphasis}
        label="Or"
      />
    </DividerAtom>
  </Grid>
);

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  const [is_Valid, setIs_Valid] = useState(true);
  const [full_Name, setFull_Name] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [pass_word, setPass_word] = useState("");
  const [show_Password, setShow_Password] = useState(false);
  const isFullNameValid = full_Name.trim() !== "";
  const [formErrors, setFormErrors] = useState({
    emailAddress: "",
    pass_word: "",
  });

  const validateField = (
    fieldName: string,
    value: string,
    regex: RegExp,
    errorText: string
  ) => {
    if (!regex.test(value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: errorText,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
    }
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPass_word(value);
    validateField("password", value, PASSWORD_REGEX, PASSWORDINVALID_TEXT);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmailAddress(value);
    validateField("email", value, EMAIL_REGEX, EMAILINVALID_TEXT);
  };

  useEffect(() => {
    if (
      isFullNameValid &&
      EMAIL_REGEX.test(emailAddress) &&
      PASSWORD_REGEX.test(pass_word)
    ) {
      setIs_Valid(false);
    } else {
      setIs_Valid(true);
    }
  }, [isFullNameValid, emailAddress, pass_word]);

  const navigate = useNavigate();

  const handleSingUp = () => {
    const signUp = async () => {
      await singUpToApp(emailAddress, pass_word, full_Name).then((resposne) => {
        if (resposne.id) {
          navigate("/");
        }
      });
    };
    signUp();
  };
  return (
    <div>
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
            label={SIGNUP_HEADING}
          />
        </Grid>
        <Grid item>
          <Grid container gap={theme.spacing(6)} direction={"column"}>
            <Grid item>
              <InputLabel
                label={FULLNAME}
                placeholder={FULLNAME_LABEL}
                value={full_Name}
                onChange={(e) => setFull_Name(e.target.value)}
              />
            </Grid>
            <Grid item>
              <InputLabel
                label={EMAIL}
                placeholder={MAIL}
                value={emailAddress}
                onChange={handleEmail}
              />
              {formErrors.emailAddress && (
                <TypographyAtom
                  variant="caption"
                  color={theme.palette.error.main}
                  label={formErrors.emailAddress}
                />
              )}
            </Grid>
            <Grid item>
              <InputLabel
                value={pass_word}
                label={PASSWORDLABEL}
                placeholder={PASSWORD_CREATE}
                type={show_Password ? "text" : "password"}
                icon={
                  <Icons
                    src={show_Password ? Open : Close}
                    alt="eye"
                    onClick={() => setShow_Password(!show_Password)}
                  />
                }
                onChange={handlePassword}
              />
              {formErrors.pass_word && (
                <TypographyAtom
                  variant="caption"
                  color={theme.palette.error.main}
                  label={formErrors.pass_word}
                />
              )}
            </Grid>
            <Grid item data-testid="signup-button">
              <TypographyAtom
                variant={"caption2"}
                color={theme.palette.gray[500]}
                label={PASSWORD_VALIDATION_TEXT}
              />
            </Grid>
            <Grid item data-testid="signup-button">
              <ButtonAtom
                sx={{
                  padding: "0px 232px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.paper,
                  },
                  "&.Mui-disabled": {
                    color: theme.palette.text.disabled,
                    background: theme.palette.primary[300],
                  },
                  width: "100%",
                }}
                variant="contained"
                disabled={is_Valid}
                onClick={handleSingUp}
              >
                <TypographyAtom
                  variant="button"
                  color={theme.palette.background.paper}
                  label={SIGNUP_BUTTON}
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
              label={SIGNUP_TEXT}
            />
            <Link href={"/"} underline="none">
              <TypographyAtom
                color={theme.palette.primary[500]}
                variant="body1"
                label={SIGNUP_LINK_TEXT}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
