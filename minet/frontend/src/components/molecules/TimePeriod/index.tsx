import TypographyAtom from "../../atoms/Typography";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme";
import { TIMES } from "../../../utils/constant";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  boxShadow: "0px 1px 10px 0px rgba(44, 44, 44, 0.08)",
  borderRadius: "100px",
  color: theme.palette.primary[900],
  background: theme.palette.primary[300],
};

interface ITimePeriodProps {
  isUnderlined: boolean;
}

const TimePeriod = ({ isUnderlined }: ITimePeriodProps) => {
  const [selected, setSelected] = useState(3);
  const handleClick = (index: number) => {
    setSelected(index);
  };
  return (
    <Stack
      direction={"row"}
      height={theme.spacing(13)}
      gap={"16px"}
      alignItems={"center"}
      border={`1px solid ${theme.palette.grey[100]}`}
      padding={`${theme.spacing(2.5)} ${theme.spacing(4)}`}
      sx={{
        cursor: "pointer",
      }}
      maxWidth={"244px"}
    >
      {TIMES.map((item, index) => {
        return (
          <Box
            key={index}
            onClick={() => handleClick(index)}
            sx={selected === index && !isUnderlined ? styles : undefined}
          >
            <TypographyAtom
              variant={selected == index ? "caption1" : "caption2"}
              color={
                selected == index
                  ? theme.palette.primary[900]
                  : theme.palette.text.mediumEmphasis
              }
              sx={
                isUnderlined
                  ? {
                      textUnderlineOffset:
                        selected == index ? theme.spacing(2) : 0,
                      textDecoration: selected == index ? "underline" : "none",
                    }
                  : undefined
              }
              label={item}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default TimePeriod;
