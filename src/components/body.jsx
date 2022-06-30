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
} from "@chakra-ui/react";

import Balance from "./balance";
import History from "./history";

export default function Body() {
  const [saldo, setSaldo] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState({
    Earned: 0,
    Spent: 0,
  });
  const [history, setHistory] = useState({
    Expense: [],
    Income: [],
  });

  function updateAmount(e) {
    const amountTemp = e.target.value;
    setAmount(amountTemp);
  }

  function handleSubmit(){
    if(parseInt(amount) > 0){
      setHistory({
        Income: [...history.Income, amount],
        Expense: [...history.Expense]
      });
      setTotal({
        Earned: total.Earned + parseInt(amount),
        Spent: total.Spent
      });
    }
    else{
      setHistory({
        Income: [...history.Income],
        Expense: [...history.Expense, amount]
      });
      setTotal({
        Earned: total.Earned,
        Spent: total.Spent + parseInt(amount)
      });
    }
    setSaldo(saldo + parseInt(amount));
    setAmount(0);
  }

  function errorHandling(e){
    e.preventDefault();
    if (!parseInt(amount)) {
      
    }
    else{
      handleSubmit();
    }
  }

  return (
    <Flex className="container-body" flexDir="column">
      <Balance saldo={saldo} />
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
          <InputLeftAddon children="$" />
          <Input
            onChange={updateAmount}
            type="number"
            placeholder="Enter Amount"
            color="whiteAlpha.800"
          />
        </InputGroup>
        <Button
          type="submit"
          bg="blackAlpha.500"
          color="whiteAlpha.800"
          _hover={{ color: "blackAlpha.500", bg: "whiteAlpha.800" }}
          mt={4}
        >
          Add Expense
        </Button>
      </Box>
      <History total={total} history={history} />
    </Flex>
  );
}
