import Icons from "../../atoms/Icon";
import {
  StyledInnerContainer,
  StyledContainer,
  StyledOuterBox,
  StyledInnerBox,
  StyledTextBox,
} from "./styles";
import React from "react";
import Tic from "../../../../public/images/tic.svg";
import { IRecentCardProps } from "../../../interface";
import TypographyAtom from "../../atoms/Typography";
import MinetTheme from "../../../theme";
import PENDING from "../../../../public/images/pending.svg";

const RecentCard = ({ quantity,symbol,cost, date, name, sold,type,status }: IRecentCardProps) => {
  const btcSign = sold ? "-" : "+";
  const costSign = sold ? "+" : "-";
  return (
      <StyledContainer>
        <TypographyAtom
          variant="caption2"
          label={date}
          color={MinetTheme.palette.text.highEmphasis}
        />
        <StyledInnerContainer>
          <Icons src={status==="SUCCESS"?Tic:PENDING} alt="tic" />
          <StyledOuterBox>
            <StyledInnerBox>
              <TypographyAtom
                variant="body1"
                label={`${name} ${symbol}`}
                color={MinetTheme.palette.text.highEmphasis}
              />
              <StyledTextBox>
                <TypographyAtom
                  variant="caption2"
                  label={type}
                  color={MinetTheme.palette.grey[500]}
                />
              </StyledTextBox>
            </StyledInnerBox>
            <StyledInnerBox sx={{alignItems: "flex-end"}}>
              <TypographyAtom
                variant="body1"
                label={`${btcSign}${quantity} ${symbol}`}
                color={MinetTheme.palette.text.highEmphasis}
              />
              <TypographyAtom
                variant="caption2"
                label={`${costSign}$${cost}`}
                color={MinetTheme.palette.text.mediumEmphasis}
              />
            </StyledInnerBox>
          </StyledOuterBox>
        </StyledInnerContainer>
      </StyledContainer>
  );
};

export default RecentCard;
