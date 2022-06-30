import React from "react";

import { Box, Text, Heading } from "@chakra-ui/react";

export default function Balance(props) {
  return (
    <Box
      className="container-balance"
      justifyContent="center"
      alignContent="center"
      textAlign="left"
      width="200px"
      marginLeft="5px"
      display="flex"
      flexDirection="column"
    >
      <Heading fontSize="xl" fontWeight="normal">
        My Balance
      </Heading>
      <Text fontWeight="bold">${props.saldo}</Text>
    </Box>
  );
}
