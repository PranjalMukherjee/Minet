import React from "react";
import { Box, Grid } from "@mui/material";

export interface TemplateProp {
  img: React.ReactNode;
  body: React.ReactNode;
}

const SignInTemplate = ({ body, img }: TemplateProp) => {
  return (
    <Grid container sx={{ overflow: "hidden" }}>
      <Grid item sx={{ width: "100%" }} xs={6}>
        {img}
      </Grid>
      <Grid item padding={"90px"} xs={6}>
        <Box>{body}</Box>
      </Grid>
    </Grid>
  );
};

export default SignInTemplate;
