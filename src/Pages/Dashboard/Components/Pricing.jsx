import { Card, HStack, Text, Stack, Button, Icon ,Image} from "@chakra-ui/react";
import React from "react";
import { IoArrowUpSharp } from "react-icons/io5";

const Pricing = () => {
  return (
    <Card bg= "white" borderRadius= "xl" p="6" >
      <Stack>
        <Text w="50%" color="black.80" fontSize="14px">
          Current Balance
        </Text>

        <HStack justifyContent="space-between" alignItems="start">
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              ₹26670.21
            </Text>

            <Text textStyle="h6" color="green" fontWeight="medium">
              0.04%
            </Text>
            <Icon color="green" as={IoArrowUpSharp} />
          </HStack>
          <HStack>
            <Button px={3} fontSize="sm">
              <Text>Buy</Text>
            </Button>
            <Button px={3} fontSize="sm">
              <Text>Sell</Text>
            </Button>
          </HStack>
        </HStack>

        <Image mt={6} src="\Graph.svg" alt="" />
      </Stack>
    </Card>
  );
};

export default Pricing;
