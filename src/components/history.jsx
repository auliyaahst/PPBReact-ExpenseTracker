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
      <Box className="total" color="whiteAlpha.800">
        <Heading>CASH FLOW</Heading>
        <Text>${props.total.Earned} Earned</Text>
        <Text>${Math.abs(props.total.Spent)} Spent</Text>
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
              {props.history.Income.map((data) => (
                <Text>${data}</Text>
              ))}
            </TabPanel>
            <TabPanel>
            {props.history.Expense.map((data) => (
                <Text>${Math.abs(data)}</Text>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
