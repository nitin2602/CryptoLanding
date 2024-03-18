import { Button, HStack, Icon, Stack, Tag } from "@chakra-ui/react";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { IoArrowUpSharp } from "react-icons/io5";
import { Text } from "@chakra-ui/react";
import { IoArrowDownSharp } from "react-icons/io5";

const Portfolio = () => {
  return (
    <HStack
      bg="white"
      p={{
        base: "5",
        xl: "6",
      }}
      borderRadius="xl"
      spacing={{
        base: "10",
        lg: "16",
      }}
      justifyContent={{
        base: "left",
        lg: "center",
      }}
      alignItems={{
        base: "left",
        lg: "center",
      }}
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14">Total Portfilio Value</Text>
          <Icon as={IoIosInformationCircleOutline}></Icon>
        </HStack>
        <Text textStyle="h2" fontWeight="medium">
          ₹ 56,23,560.23
        </Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px">Wallet Balance</Text>
        </HStack>
        <HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              22.23450000
            </Text>
            <Tag>BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              2.230
            </Text>
            <Tag>INR</Tag>
          </HStack>
        </HStack>
      </Stack>
      <HStack>
        <Button fontSize="sm">
          <Icon as={IoArrowUpSharp}></Icon>
          <Text>Deposit</Text>
        </Button>
        <Button fontSize="sm">
          <Icon as={IoArrowDownSharp}></Icon>
          <Text>Withdraw</Text>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
