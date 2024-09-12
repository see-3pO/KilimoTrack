import { Box, VStack } from "@chakra-ui/react";
// import React from "react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import SideBar from "../test/SideBar";
// interface Props {
//   children: React.ReactNode;
// }

import { useLayoutEffect } from "react";
import ScrollToAnchor from "./ScrollToAnchor";

const Layout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Box>
      <VStack spacing={2} w="full" align="center">
        <NavBar />
        <ScrollToAnchor />
        <Outlet />
        <Footer />
      </VStack>
    </Box>
  );
};

export default Layout;
