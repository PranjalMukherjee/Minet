import React, { useEffect, useState } from "react";
import MinetTheme from "../../../theme";
import TypographyAtom from "../../atoms/Typography";
import SliderAtom from "../../atoms/slider";
import ButtonAtom from "../../atoms/Button";
import {
  StyledOutline,
  StyledOuterContainer,
  StyledInnerContainer,
  StyledSliderBox,
} from "./style";
import { IAmountDetail } from "../../../interface";

const AmountDetail = ({
  cryptoQuantity,
  cryptoPrice,
  cryptoAction,
  symbol,
  setQuantity,
  maximumValue
}: IAmountDetail) => {
  const totalQuantityPrice = () => {
    if (typeof cryptoQuantity === "number") {
      return cryptoQuantity * cryptoPrice;
    }
  };
  console.log("maximumValue",maximumValue)

  const [cryptoTotalPrice, setCryptoTotalPrice] = useState(totalQuantityPrice);
  const [sliderValue, setSliderValue] = useState<number | number[]>(
    cryptoQuantity
  );

  const [changedCryptoQuantity, setChangedCryptoQuantity] = useState<
    number | number[]
  >(cryptoQuantity);
  const handleButtonClick = () => {
    setSliderValue(maximumValue);
  };

  const handleSliderChange = (event?: Event, newValue?: number | number[]) => {
    newValue && setSliderValue(newValue);
  };
  useEffect(() => {
    setChangedCryptoQuantity(sliderValue);
    typeof sliderValue === "number" &&
      setCryptoTotalPrice(sliderValue * cryptoPrice);
    setQuantity(sliderValue);
  }, [cryptoPrice, setQuantity, sliderValue]);

  return (
    <StyledOutline>
      <TypographyAtom
        label="Amount Details"
        variant="body1"
        color={MinetTheme.palette.text.highEmphasis}
      />
      <StyledOuterContainer>
        <StyledInnerContainer>
          <TypographyAtom
            label={
              cryptoAction === "Buy max"
                ? `$  ${cryptoTotalPrice}`
                : `${changedCryptoQuantity} ${symbol.toUpperCase()}`
            }
            variant="subtitle1"
            color={MinetTheme.palette.text.highEmphasis}
          />
          <ButtonAtom
            variant="outlined"
            onClick={() => handleButtonClick()}
            sx={{ padding: "0px 16px" }}
          >
            <TypographyAtom
              label={cryptoAction}
              variant="button"
              color={MinetTheme.palette.primary[500]}
            />
          </ButtonAtom>
        </StyledInnerContainer>
        <StyledSliderBox>
          <SliderAtom
            max={maximumValue}
            min={0}
            value={sliderValue}
            onChange={handleSliderChange}
          />
          <TypographyAtom
            sx={{ width: 150, height: 16 }}
            label={`1 ${symbol.toUpperCase()} = $ ${cryptoPrice}`}
            variant="caption1"
            color={MinetTheme.palette.text.mediumEmphasis}
          />
        </StyledSliderBox>
        <StyledInnerContainer>
          <TypographyAtom
            label={
              cryptoAction === "Buy max"
                ? `${changedCryptoQuantity}`
                : `$ ${cryptoTotalPrice}`
            }
            variant="subtitle1"
            color={MinetTheme.palette.text.highEmphasis}
          />
          <TypographyAtom
            label={
              cryptoAction === "Buy max"
                ? symbol.toUpperCase()
                : "USD coin (cash)"
            }
            variant="body1"
            color={MinetTheme.palette.text.mediumEmphasis}
          />
        </StyledInnerContainer>
      </StyledOuterContainer>
    </StyledOutline>
  );
};
export default AmountDetail;
