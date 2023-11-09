import React from "react";
import { StyledOuterBox } from "./style";
import MinetTheme from "../../../theme";
import Tick from "../../../../public/images/tic.svg";
import Pending from "../../../../public/images/pending.svg";
import Rejected from "../../../../public/images/rejected.svg";
import TypographyAtom from "../../atoms/Typography";
import AvatorAtom from "../../atoms/Avator";
import ChipAtom from "../../atoms/Chip";
import { IWalletTransaction } from "../../../interface";
import { Stack } from "@mui/material";
const WalletTransactionCard = ({
  transactionStatus,
  cryptoName,
  crytoAction,
  name,
  month,
  date,
  cost,
  symbol,
  income,
}: IWalletTransaction) => {
  let avatarSrc;
  if (transactionStatus === "success") {
    avatarSrc = Tick;
  } else if (transactionStatus === "pending") {
    avatarSrc = Rejected;
  } else {
    avatarSrc = Pending;
  }

  return (
    <StyledOuterBox
      sx={{ borderBottom: `1px solid ${MinetTheme.palette.grey[100]}` }}
    >
      <Stack direction={"row"} gap={"12px"}>
        <Stack direction={"row"} gap={"12px"}>
          <Stack direction={"column"}>
            <TypographyAtom
              variant="caption2"
              label={month}
              color={MinetTheme.palette.text.mediumEmphasis}
            />
            <TypographyAtom
              variant="subtitle2"
              label={date}
              color={MinetTheme.palette.text.highEmphasis}
            />
          </Stack>
          <Stack>
          <AvatorAtom src={avatarSrc} />
          </Stack>
        </Stack>
        <Stack direction={"column"} gap={"4px"}>
          <TypographyAtom
            variant="body1"
            label={cryptoName}
            color={MinetTheme.palette.text.highEmphasis}
          />
          <Stack direction={"row"} gap={"10px"}>
            <TypographyAtom
              sx={{ width: 100 }}
              variant="caption2"
              label={`${
                crytoAction === "Purchased" ? "From : " : "To : "
              }${name}`}
              color={MinetTheme.palette.text.mediumEmphasis}
            />
            <ChipAtom
              chipLabel={crytoAction}
              style={{
                padding: "2px, 8px",
                backgroundColor: MinetTheme.palette.grey[50],
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"column"} gap={"4px"} alignItems={"flex-end"}>
        <TypographyAtom
          variant="caption1"
          color={MinetTheme.palette.text.highEmphasis}
          label={`${crytoAction==="Purchased"?"+":"-"}${cost} ${symbol?.toUpperCase()}`}
        />
        <TypographyAtom
          variant="overline"
          color={MinetTheme.palette.text.mediumEmphasis}
          label={`${crytoAction==="Purchased"?"-":"+"}$${income}`}
          sx={{ marginLeft: "25px" }}
        />
      </Stack>
    </StyledOuterBox>
  );
};
export default WalletTransactionCard;
