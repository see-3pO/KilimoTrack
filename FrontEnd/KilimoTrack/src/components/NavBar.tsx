import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link as ReactRouterLink } from "react-router-dom";

import NavLink from "./NavLink";
import NavMenu from "./NavMenu";
import FloatingSearchBar from "./FloatingSearchBar";
import ProfileMenuOff from "./ProfileMenuOff";
import { useState } from "react";
import ProfileMenuOn from "./ProfileMenuOn";
import ShoppingCartLink from "./ShoppingCartLink";
import NotificationLink from "./NotificationLink";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Features", href: "/features" },
  { label: "Orders", href: "/orders"},
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const NavBar = () => {
  const [loginState, setLoginState] = useState(false);
  return (
    <Container
      maxW="container.xl"
      pos="sticky"
      top="0px"
      backdropFilter="auto"
      backdropBlur="6px"
    >
      <Box px={4} w="full" borderRadius="md">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={4}>
            <NavMenu />
            <Box h="full">
              <Heading fontSize={{base:"xl", sm: "2xl", md: "3xl"}} >
                <ChakraLink
                  as={ReactRouterLink}
                  to="/"
                  _hover={{ textDecoration: "none" }}
                  color="brand.500"
                >
                  KilimoTrack
                </ChakraLink>
              </Heading>
            </Box>
          </HStack>

          <HStack spacing={4} alignItems={"center"}>
            <Box>
              <HStack as="nav" display={{ base: "none", md: "flex" }} gap={10}>
                {links.map((link) => (
                  <NavLink path={`${link.href}`} key={link.label}>
                    <Text fontWeight="medium" fontSize={{base:"sm", sm: "md", md:"lg"}}>
                      {link.label}
                    </Text>
                  </NavLink>
                ))}
              </HStack>
            </Box>
          </HStack>

          <Flex justifyContent={"space-between"} gap={4}>
            <HStack gap={4} as="nav" display={{ base: "none", md: "flex" }}>
              <FloatingSearchBar />
              {loginState ? <ProfileMenuOn /> : <ProfileMenuOff />}
              {/* <ProfileMenuOff /> */}
              <ShoppingCartLink />
              <NotificationLink />
            </HStack>

            <ColorModeSwitch />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default NavBar;

// navbar background options
//bg={useColorModeValue("gray.100", "gray.900")}

//navicons for navigation
// {navIcons.map((icon) => {
//   return (
//     <List key={icon.label}>
//       <ListItem as={ReactRouterLink} to={icon.path}>
//         <ListIcon as={icon.Icon} />
//       </ListItem>
//     </List>
//   );
// })}
