import { Card, HStack, Stack, Text,Icon, Button } from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { PiCurrencyBtcFill   } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import { MdCurrencyBitcoin } from "react-icons/md";
import React from "react";

const Transaction = () => {
  const trans = [
    {
      icon: FaRupeeSign ,
      name: "INR Deposit",
      date: "2022-06-09 7:06 PM",

      value: "+ ₹81,123.10",
    },
    {
      icon: MdCurrencyBitcoin ,
      name: "BTC Sell ",
      date: "2022-06-09 7:06 PM",

      value: "- 12.48513391 BTC",
    },
    {
      icon: FaRupeeSign,
      name: "INR Withdraw",
      date: "2022-06-09 7:06 PM",

      value: "- ₹55,123.10",
    },
  ];
  return (
    <Card bg="white" borderRadius="xl" p="6">
      <Stack gap={4}>
        <Text w="50%" color="black.80" fontSize="14px">
          Recent Transactions
        </Text>
        {
            trans.map((data) => (
                <HStack justifyContent="space-between" key={data.name}>
                    <HStack>
                    <Icon as={data.icon} />
                    <Stack gap={0}>
                        <Text textStyle="h6" fontWeight="bold">{data.name}</Text>
                        <Text>{data.date}</Text>
                    </Stack>
                    </HStack>
                    <Text>{data.value}</Text>
                </HStack>
            ))
        }
        <Button>View All</Button>
      </Stack>
    </Card>
  );
};

export default Transaction;
