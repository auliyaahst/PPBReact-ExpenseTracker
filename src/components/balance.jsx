import React from "react";

import { Flex, Box, Text, Heading } from "@chakra-ui/react";

export default function Balance(props) {
  return (
    <Flex
      className="container-balance"
      justifyContent="center"
      alignContent="center"
      textAlign="center"
    >
      <Box className="box-balance" color="whiteAlpha.800">
        <Heading>Balance</Heading>
        <Text>${props.saldo}</Text>
      </Box>
    </Flex>
  );
}
