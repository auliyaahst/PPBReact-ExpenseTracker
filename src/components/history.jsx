import { React, useState } from "react";

import {
  Flex,
  Box,
  Text,
  Heading,
  useColorModeValue,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Stat,
  StatArrow,
} from "@chakra-ui/react";

export default function History(props) {
  const colors = useColorModeValue(
    ["#153B44", "#3D0000"],
    ["teal.900", "#9B0000"]
  );

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs"];

  return (
    <Flex
      className="container-history"
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginTop="10px"
    >
      <Box
        className="total"
        color="whiteAlpha.900"
        borderRadius="10px"
        bgGradient="linear(to-r, #8E0E00, #1F1C18)"
        width="350px"
        gap="10px"
      >
        <Heading marginTop="15px" marginLeft="15px" fontSize="2xl">
          CASH FLOW
        </Heading>
        <Text marginLeft="15px" fontWeight="bold">${props.total.Earned} Earned</Text>
        <Text marginLeft="15px" marginBottom="15px" fontWeight="bold">
          ${Math.abs(props.total.Spent)} Spent
        </Text>
      </Box>
      <Box>
        {sizes.map((size) => (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
            borderRadius="30px"
            bg="#9CB4CC"
          >
            Transactions History
          </Button>
        ))}

        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontWeight="bold">Transactions History</DrawerHeader>
            <DrawerBody>
              <Box className="container-drawer-history" fontSize="lg">
                {props.history.Income.map((data) => (
                  <Box
                    border="1px"
                    borderRadius="10px"
                    marginBottom="5px"
                    display="flex"
                  >
                    <Text marginLeft="5px" color="#519D6B" fontWeight="bold">
                      ${data}
                    </Text>
                    <Stat>
                      <StatArrow type="increase" />
                    </Stat>
                  </Box>
                ))}
                {props.history.Expense.map((data) => (
                  <Box border="1px"
                  borderRadius="10px"
                  marginBottom="5px"
                  display="flex">
                    <Text marginLeft="5px" color="#C25050" fontWeight="bold">
                      ${Math.abs(data)}
                    </Text>
                    <Stat>
                      <StatArrow type="decrease" />
                    </Stat>
                  </Box>
                ))}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
}
