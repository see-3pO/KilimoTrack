import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";

interface Props {
  children: React.ReactNode;
  path: string;
}

const NavLink = ({ children, path }: Props) => {
  return (
    <Box
      // as={ChakraLink}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        // bg: useColorModeValue('gray.200', 'gray.700')
      }}
    >
      <ChakraLink as={ReactRouterLink} to={path}>
        {children}
      </ChakraLink>
    </Box>
  );
};

export default NavLink;
