import React from "react";
import Typography from "../../atoms/Typography";
import InputField from "../../atoms/InputField";

import { Box, Stack } from "@mui/material";
import theme from "../../../theme";

import {InputLabelProps} from "../../../interface/index";

const InputLabel = (props: InputLabelProps) => {
  return (
    <Box component="div">
      <Stack spacing={2}>
        <Box component="div">
          <Typography
            variant={props.variant}
            color={theme.palette.gray[700]}
            label={props.label}
          />
        </Box>
        <Box component="div">
          <InputField
            placeholder={props.placeholder}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            icon={props.icon}
            borderColor={theme.palette.gray[300]}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default InputLabel;
