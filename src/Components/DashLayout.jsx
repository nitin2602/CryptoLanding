import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React, { Children } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrawer from "./Sidedrawer";

const DashLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <Sidedrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <Topnav title={title} onOpen={onOpen} />
          <Container mt="4" maxW="60rem">{children}</Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashLayout;
