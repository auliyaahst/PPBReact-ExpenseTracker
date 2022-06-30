import React from "react";
import { Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box className="container-header" width="350px">
      <Heading fontSize="2xl" textAlign="left" mb="25px">
        OwL Expense
      </Heading>
    </Box>
  );
}
