import { Box, Stack } from "@mui/material";
import React from "react";
import { IHeaderProps } from "../../../interface";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import ButtonAtom from "../../atoms/Button";
import { BUY, ICON_LIST, SELL, URL_DOMAIN } from "../../../utils/constant";
import { styled } from "@mui/system";
import Icons from "../../atoms/IconAtom";
import { useAuth0 } from "@auth0/auth0-react";

const StyledOutline = styled(Box)({
  display: "flex",
  padding: "20px 24.5px",
  justifyContent: "space-between",
  alignItems: "center",
  background: MinetTheme.palette.background.paper,
  borderLeft: `1px solid ${MinetTheme.palette.grey[50]}`,
});

const StyledBorder = styled(Box)({
  border: `1px solid ${MinetTheme.palette.grey[100]}`,
  width: "0px",
  height: "30px",
});

const Header = ({ buttons, title,handleBuy,handleSell,buyDisabled,sellDisabled }: IHeaderProps) => {
  const { logout } = useAuth0();
    const handleLogout = () => {
      logout({ logoutParams: { returnTo:`${URL_DOMAIN}` }});
      sessionStorage.clear()
    }
  return (
    <StyledOutline>
      <TypographyAtom
        label={title}
        variant="h6"
        color={MinetTheme.palette.text.highEmphasis}
      />
      <Stack gap={"21px"} direction={"row"} alignItems={"center"}>
        {buttons && (
          <Stack gap={"12px"} direction={"row"}>
            <ButtonAtom
              disabled = {sellDisabled}
              variant="contained"
              sx={{
                background: MinetTheme.palette.warning[300],
                padding: "0px 43.5px",
                "&:hover": {
                  background: MinetTheme.palette.warning[300],
                },
                "&.Mui-disabled": {
                  color: MinetTheme.palette.text.disabled,
                  background: MinetTheme.palette.warning[300],
                },
                }}
                onClick={handleSell}
            >
              <TypographyAtom
                label={SELL}
                variant="button"
                color={MinetTheme.palette.background.paper}
              />
            </ButtonAtom>
            <ButtonAtom
              disabled = {buyDisabled}
              variant="contained"
              sx={{
                background: MinetTheme.palette.primary[500],
                padding: "0px 43.5px",
                "&:hover": {
                  background: MinetTheme.palette.primary[500],
                },
                "&.Mui-disabled": {
                  color: MinetTheme.palette.text.disabled,
                  background: MinetTheme.palette.primary[500],
                },
              }}
              onClick={handleBuy}
            >
              <TypographyAtom
                label={BUY}
                variant="button"
                color={MinetTheme.palette.background.paper}
              />
            </ButtonAtom>
          </Stack>
        )}
        <StyledBorder />
        <Stack direction={"row"} alignItems={"center"} onClick={handleLogout}>
          {ICON_LIST.map((item) => <Icons key={item.id} src={item.icon} alt={item.alt} />)}
        </Stack>
      </Stack>
    </StyledOutline>
  );
};

export default Header;
