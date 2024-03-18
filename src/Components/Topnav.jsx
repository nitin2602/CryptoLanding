import { Box, Button, Flex, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";


const Topnav = ({title,onOpen}) => {
  return (
    <Box  boxShadow="xl " bg="white" >
      <HStack
        
        maxW="60rem"
        justifyContent="space-between"
        p="20px"
        mx="auto"
        h="64px"
      >
        <Icon onClick={onOpen} as={TiThMenu} display={{
          base:"block",
          lg:"none",
        }}/>
        <Heading fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton ><Icon as={CgProfile} fontSize="30px" /></MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
