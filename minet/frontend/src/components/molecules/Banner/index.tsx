import { Stack } from "@mui/system";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import {
  BANNER_TITLE,
  RESOURCES,
} from "../../../utils/constant";
import MinetTheme from "../../../theme";
import Icons from "../../atoms/IconAtom";
import {
  StyledBorder,
  StyledInnerBox,
  StyledLeftBox,
  StyledOuterBox,
  StyledRightBox,
  StyledTextBox,
} from "./styles";
import { IBannerProps, ICorrelationType, ResourceType } from "../../../interface";

const IconText = (id:number,icon: string, text: string) => (
  <Stack key={id} direction={"row"} gap={"4px"} alignItems={"center"}>
    <Icons src={icon} alt="icon" />
    <TypographyAtom
      variant="body2"
      color={MinetTheme.palette.primary[500]}
      label={text}
    />
  </Stack>
);

const Banner = ({name,description,items,resources}:IBannerProps) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"column"} gap={"24px"}>
        <Stack direction={"column"} gap={"8px"}>
          <TypographyAtom
            label={`About ${name}`}
            variant="body1"
            color={MinetTheme.palette.text.highEmphasis}
          />
          <TypographyAtom
            label={description}
            variant="body2"
            color={"#000000"}
            sx={{ maxWidth: "810px" }}
          />
        </Stack>
        <Stack direction={"column"} gap={"8px"}>
          <TypographyAtom
            label={RESOURCES}
            variant="body1"
            color={MinetTheme.palette.text.highEmphasis}
          />
          <Stack>
            {resources.map((item:ResourceType) => {
              return IconText(item.id,item.icon,item.label)
            })}
          </Stack>
        </Stack>
      </Stack>
      <StyledInnerBox>
        <TypographyAtom
          label={BANNER_TITLE}
          variant="subtitle1"
          color={MinetTheme.palette.text.highEmphasis}
          sx={{ paddingLeft: "24px" }}
        />
        <Stack gap={"12px"} direction={"row"} paddingRight={"7px"}>
          <Stack gap={"4px"} maxWidth={"370px"}>
            {items.map((item: ICorrelationType) => {
              return (
                <StyledOuterBox
                  key={item.id}
                  sx={
                    item.id === 2
                      ? { boxShadow: "0 1px 10px 0 rgba(44, 44, 44, 0.08)" }
                      : {}
                  }
                >
                  <StyledLeftBox>
                    <Icons src={item.icon} alt="name" />
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <StyledTextBox>
                        <TypographyAtom
                          label={item.name}
                          variant="body1"
                          color={MinetTheme.palette.text.highEmphasis}
                        />
                        <TypographyAtom
                          label={item.description}
                          variant="caption2"
                          color={MinetTheme.palette.text.mediumEmphasis}
                        />
                      </StyledTextBox>
                      <StyledRightBox>
                        <TypographyAtom
                          label={item.cost}
                          variant="body1"
                          color={MinetTheme.palette.text.highEmphasis}
                        />
                        <TypographyAtom
                          label={item.percent}
                          variant="caption2"
                          color={MinetTheme.palette.text.mediumEmphasis}
                        />
                      </StyledRightBox>
                    </Stack>
                  </StyledLeftBox>
                </StyledOuterBox>
              );
            })}
          </Stack>
          <StyledBorder />
        </Stack>
      </StyledInnerBox>
    </Stack>
  );
};

export default Banner;
