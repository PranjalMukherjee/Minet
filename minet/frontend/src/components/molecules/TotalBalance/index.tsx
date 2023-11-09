import { Box } from "@mui/material"
import { ITotalBalanceProps } from "../../../interface"
import { styled } from "@mui/system"
import MinetTheme from "../../../theme"
import React from "react"
import TypographyAtom from "../../atoms/Typography"
import { TOTAL_BALANCE } from "../../../utils/constant"
import Icons from "../../atoms/Icon"

const StyledOutline = styled(Box)({
    display:"flex",
    flexDirection:"column",
    gap:"12px",
    border:`1px solid ${MinetTheme.palette.grey[100]}`,
    padding: "24px",
    borderRadius: "4px",
    maxWidth:"710px",
})

const StyledInnerBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"12px",
})

const StyledOuterBox = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    border:`1px solid ${MinetTheme.palette.grey[100]}`,
    padding: "16px",
    borderRadius: "4px",
})

const TotalBalance = ({balance,icon,name}:ITotalBalanceProps) => {
    return(
        <StyledOutline>
            <TypographyAtom label={TOTAL_BALANCE} variant="body1" color={MinetTheme.palette.text.highEmphasis} />
            <StyledOuterBox>
                <StyledInnerBox>
                    <Icons src={icon} alt={name} />
                    <TypographyAtom variant="caption1" color={MinetTheme.palette.text.highEmphasis} label={name} />
                </StyledInnerBox>
                <TypographyAtom variant="subtitle1" color={MinetTheme.palette.text.highEmphasis} label={balance} />
            </StyledOuterBox>
        </StyledOutline>
    )
}

export default TotalBalance;
