import {
  Button,
  Card,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MdMail } from "react-icons/md";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Supportcard = () => {
  return (
    <Flex mt={10} gap={4} flexDirection={{
        base:"column",
        md:"row"
    }}>
      <Stack >
        <Icon color="p.purple" fontSize={30} as={MdMail} />
        <Text textStyle="h2" fontWeight="bold">
          Contact Us
        </Text>
        <Text>
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card gap={3} p={6} borderRadius={4}>
        <Text fontWeight="medium">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <Stack>
          <Text>Message</Text>
          <Textarea placeholder="Write a message.." />
        </Stack>
        <Checkbox defaultChecked>I agree with terms and Conditions</Checkbox>
        <Button bgColor="#D8DDE2">Send a Message</Button>
        <Button colorScheme="gray">Book a Meeting</Button>
      </Card>
    </Flex>
  );
};

export default Supportcard;
