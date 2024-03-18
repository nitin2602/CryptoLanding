import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbCurrencySolana } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import SupportPage from "../Pages/Support/SupportPage";

const Sidenav = () => {
  const location = useLocation();
  const isactiveLink = (link) => {
    return location.pathname === link;
  };
  const sidelinks = [
    {
      icon: MdDashboard,
      name: "Dashboard",
      link: "/Dashboard",
    },
    {
      icon: MdAttachMoney,
      name: "Transaction",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      width={{
        base: "100%",
        lg: "260px",
      }}
      h="100vh"
    >
      <HStack
        gap={0}
        justifyContent="center"
        alignItems="center"
        mt="30px"
        fontSize="20px"
        as="h3"
      >
        <Icon as={TbCurrencySolana} />
        <Text fontWeight="bold">Crypto</Text>
        <Text fontWeight="bold" color="#5F00D9">
          verse
        </Text>
      </HStack>
      <Stack h="100%" mb="10px" justifyContent="space-between">
        <Box mt="6" mx="3">
          {sidelinks.map((nav) => (
            <Link key={nav.name} to={nav.link}>
              <HStack
                cursor="pointer"
                bg={isactiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                textColor={isactiveLink(nav.link) ? "#171717" : "#797E82"}
                _hover={{ bg: "#F3F3F7", color: "#171717" }}
                py="3"
                px="4"
                borderRadius="10px"
                fontWeight="medium"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px">{nav.name}</Text>
              </HStack>
            </Link>
          ))}
        </Box>

        <Box>
          <Link to="/Supportpage">
            <HStack
              top="0"
              cursor="pointer"
              bg={isactiveLink("/Supportpage") ? "#F3F3F7" : "transparent"}
              textColor={isactiveLink("/Supportpage") ? "#171717" : "#797E82"}
              _hover={{ bg: "#F3F3F7", color: "#171717" }}
              py="3"
              px="4"
              borderRadius="10px"
            >
              <Icon as={BiSupport} />
              <Text fontWeight="medium" fontSize="14px">
                Support
              </Text>
            </HStack>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Sidenav;
