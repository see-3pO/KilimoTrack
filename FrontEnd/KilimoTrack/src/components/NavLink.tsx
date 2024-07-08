import { Box, Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const NavLink = ({ children }: Props) => {
  return (
    <Box as={Link} rounded={"md"}  _hover={{
        textDecoration: "none",
        // bg: useColorModeValue('gray.200', 'gray.700')
        
    }}>
      {children}
    </Box>
  );
};

export default NavLink;
