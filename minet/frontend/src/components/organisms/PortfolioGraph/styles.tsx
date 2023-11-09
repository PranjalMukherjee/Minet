import { Box } from "@mui/material"
import { styled } from "@mui/system"
import MinetTheme from "../../../theme"

export const StyledOutline = styled(Box)({
    display:"flex",
    flexDirection:"column",
    padding:"24px",
    border:`1px solid ${MinetTheme.palette.grey[100]}`,
    borderRadius:"4px",
    gap: "16px",
    maxWidth:"100vw",
})

export const StyledBorder = styled(Box)({
    height:"54px",
    border:`1px solid ${MinetTheme.palette.grey[100]}`,
})

export const StyledContent = styled(Box)({
    display:"flex",
    flexDirection:"column",
    gap: "24px",
    alignItems:"flex-end",
})