import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <VStack spacing={10} w="full" align="center">
        <NavBar />
        {children}
      </VStack>
    </Box>
  );
};

export default Layout;
