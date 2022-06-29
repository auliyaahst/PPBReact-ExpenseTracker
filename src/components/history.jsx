import React from "react";

import {
  Flex,
  Box,
  Text,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

export default function History(props) {
  return (
    <Flex className="container-history" direction="column">
      <Box className="total" color='whiteAlpha.800'>
        <Heading>CASH FLOW</Heading>
        <Text>$0 Earned</Text>
        <Text>$0 Spent</Text>
      </Box>
      <Box
        className="box-history"
        color="whiteAlpha.800"
        width="300px"
        my="15px"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Earned</Tab>
            <Tab>Spent</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
