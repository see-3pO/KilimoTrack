import { Box, VStack } from "@chakra-ui/react";
// import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// interface Props {
//   children: React.ReactNode;
// }

const Layout = () => {
  return (
    <Box>
      <VStack spacing={10} w="full" align="center">
        <NavBar />
        <Outlet />
        <Footer />
      </VStack>
    </Box>
  );
};

export default Layout;
