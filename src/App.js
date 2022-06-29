import React from "react";
import Header from "./components/header";
import Body from "./components/body"

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      bg="blue.900"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Header />
      <Body />
    </Flex>
  );
}

export default App;
