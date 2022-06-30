import { React, useState } from "react";
import {
  Flex,
  Box,
  Button,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";

import Balance from "./balance";
import History from "./history";

export default function Body() {
  const [saldo, setSaldo] = useState(0);
  const [amount, setAmount] = useState(0);
  const [buttonActive, setButtonActive] = useState(true);
  const [total, setTotal] = useState({
    Earned: 0,
    Spent: 0,
  });
  const [history, setHistory] = useState({
    Expense: [],
    Income: [],
  });
  const { isOpen, onToggle } = useDisclosure();

  function updateAmount(e) {
    const amountTemp = e.target.value;
    setAmount(amountTemp);
  }

  function handleSubmit() {
    if (parseInt(amount) > 0) {
      setHistory({
        Income: [...history.Income, amount],
        Expense: [...history.Expense],
      });
      setTotal({
        Earned: total.Earned + parseInt(amount),
        Spent: total.Spent,
      });
    } else {
      setHistory({
        Income: [...history.Income],
        Expense: [...history.Expense, amount],
      });
      setTotal({
        Earned: total.Earned,
        Spent: total.Spent + parseInt(amount),
      });
    }
    setSaldo(saldo + parseInt(amount));
    setAmount(0);
  }

  function errorHandling(e) {
    e.preventDefault();
    if (!parseInt(amount)) {
    } else {
      handleSubmit();
    }
  }

  function buttonHandle() {
    onToggle();
    setButtonActive(!buttonActive);
  }

  return (
    <Flex className="container-body" flexDir="column" my="20px">
      <Flex
        className="container-balance"
        width="350px"
        height="80px"
        justifyContent="center"
        // gap="5px"
        bg="#F0EBE3"
        borderRadius="10px"
      >
        <Balance saldo={saldo} />
        <Box className="button-body" alignItems="center" justifyContent="center" display="flex">
          <Button
            onClick={buttonHandle}
            borderRadius="30px"
            width="120px"
            bg="#9CB4CC"

          >
            {buttonActive ? "Add" : "Close"}
          </Button>
        </Box>
      </Flex>
      <Box className="cointainer-collapse" width="350px">
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bgGradient="linear(to-l, #525252, #3d72b4)"
            rounded="md"
            shadow="md"
          >
            <Box
              className="input-field"
              as="form"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              onSubmit={errorHandling}
            >
              <InputGroup>
                <InputLeftAddon
                  color="#000000"
                  fontWeight="bold"
                  children="$"
                />
                <Input
                  onChange={updateAmount}
                  type="number"
                  placeholder="Enter Amount"
                  color="whiteAlpha.800"
                />
              </InputGroup>
              <Button
                type="submit"
                bg="#9CB4CC"
                color="black"
                _hover={{ color: "blackAlpha.00", bg: "whiteAlpha.800" }}
                mt={4}
                borderRadius="30px"
              >
                Add Transaction
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Box>
      <History total={total} history={history} />
    </Flex>
  );
}
