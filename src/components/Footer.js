import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF5F1">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    ></Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "12px", xs: "9px" } }}
      mt="21px"
      textAlign="center"
      pb="30px"
    >
      Load Exercises may not work because of too many requests
    </Typography>
  </Box>
);

export default Footer;
