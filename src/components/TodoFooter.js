import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TodoFooter = () => (
  <Box bottom={"0px"} mt="80px" bgcolor="#FFF5F1">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    ></Stack>
    <Typography
      fontFamily={"Ariel"}
      variant="h5"
      sx={{ fontSize: { lg: "15px", xs: "9px" } }}
      mt="21px"
      textAlign="center"
      pb="30px"
    >
      <Link to={"/ptodolist"}> Go to Private TodoList </Link>
    </Typography>
  </Box>
);

export default TodoFooter;
