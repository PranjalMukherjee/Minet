import React from "react";
import { SIDE_NAV_BAR, URL_DOMAIN } from "../../../utils/constant";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import MinetTheme from "../../../theme";
import Icons from "../../atoms/IconAtom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const sideNavBarItems = SIDE_NAV_BAR;

const StyledOuterBox = styled(Box)({
  maxWidth: "80px",
  padding: "24px",
  gap: "72px",
  backgroundColor: MinetTheme.palette.background.paper,
});
const StyledInnerBox = styled(Box)({
  gap: "44px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const LeftNavBar = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  const handleClick = (label: string) => {
    switch (label) {
      case "Logout":
        logout({ logoutParams: { returnTo:`${URL_DOMAIN}` }});
        break;
      case "Dashboard":
        navigate("/dashboard");
        break;
      default:
        break;
    }
  };
  return (
    <StyledOuterBox>
      <StyledInnerBox>
        {sideNavBarItems.map((data) => (
          <Button
            key={data.id}
            startIcon={
              <Icons
                src={data.icon}
                alt={data.label}
                onClick={() => handleClick(data.label)}
                data-testid={"icon-" + data.label}
              />
            }
          />
        ))}
      </StyledInnerBox>
    </StyledOuterBox>
  );
};

export default LeftNavBar;
