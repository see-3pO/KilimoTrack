import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  path: string;
}

const NavLink = ({ children, path }: Props) => {
  return (
    <Box
      // as={ChakraLink}
      rounded={"md"}
    >
      <ChakraLink
        as={ReactRouterLink}
        to={path}
        _hover={{ textDecoration: "underline", textDecorationColor: useColorModeValue("yellow.400", "gray.100"), textDecorationThickness: "3px"}}
      >
        {children}
      </ChakraLink>
    </Box>
  );
};

export default NavLink;
