import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Icons from "../../atoms/IconAtom";
import Left from "../../../../public/images/leftarrow.svg";
import Right from "../../../../public/images/rightarrow.svg";
import ChipAtom from "../../atoms/Chip";
import { CURRENCY_SELECTOR } from "../../../utils/constant";
import theme from "../../../theme";
export interface CurrencyProps {
  handleCurrencyClick: (id: number) => void;
}
interface ChipStyle {
  background: string;
  borderRadius: string;
  border?: string;
}
const OuterBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  height: "38px",
  justifyContent:"space-between",

  gap: "16px",
  background: theme.palette.primary[100],
});

const CurrencySelector = ({ handleCurrencyClick }: CurrencyProps) => {
  const [clickedStates, setClickedStates] = useState<boolean[]>([false, false]);

  const toggleClickedState = (index: number) => {
    setClickedStates((prevClickedStates) => {
      const newClickedStates = [...prevClickedStates];

      newClickedStates[index] = !newClickedStates[index];
      return newClickedStates;
    });
  };
  const getChipStyle = (clicked: boolean, value: { id: number; label?: string; style: ChipStyle; }) => {
    if (clicked) {
      if (value.id === 1) {
        return { ...value.style, border: "3px solid #F7931A" };
      } else {
        return { ...value.style, border: "3px solid #627EEA33" };
      }
    } else {
      return value.style;
    }
  };
  return (
    <OuterBox data-testid="currency_test">
      <Icons
        src={Left}
        alt="Icon not avialable"
        style={{ margin: "0px -13px 5px 0px" }}
      />
      {CURRENCY_SELECTOR.map((value, index) =>
        value.label !== "Bitcoin" && value.label !== "Ethereum" ? (
          <ChipAtom
            chipLabel={value.label}
            style={value.style}
            key={value.id}
          />
        ) : (
          <ChipAtom
            data-testid={"chip-atom-" + value.label}
            chipLabel={value.label}
            key={value.id}
            style={getChipStyle(clickedStates[index], value)}
            onClick={() => {
              toggleClickedState(index);
              handleCurrencyClick(value.id);
            }}
          />
        )
      )}
      <Icons
        src={Right}
        alt="Icon not avialable"
        style={{ margin: "0px 0px 5px -13px" }}
      />
    </OuterBox>
  );
};

export default CurrencySelector;
