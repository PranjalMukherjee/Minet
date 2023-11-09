import { Box } from "@mui/material"
import { styled } from "@mui/system"
import MinetTheme from "../../../theme"

export const StyledOutline = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
})

export const StyledInnerOutline = styled(Box)({
    display: "flex",
    gap: "12px",
    alignItems: "center",
})

export const StyledLeftBox = styled(Box)({
    display: "flex",
    gap:"9px",
    alignItems: "center",
    cursor: "pointer",
})

export const StyledRightBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
})

export const StyledBorder = styled(Box)({
    height: "22px",
    border :`1px solid ${MinetTheme.palette.grey[100]}`,
})