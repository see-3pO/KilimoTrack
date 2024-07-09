import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import NavLink from "./NavLink";
import navIcons from "../constants/navIcons";
import NavMenu from "./NavMenu";
import FloatingSearchBar from "./FloatingSearchBar";
import ProfileMenuOff from "./ProfileMenuOff";
import { useState } from "react";
import ProfileMenuOn from "./ProfileMenuOn";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const NavBar = () => {
  const [loginState, setLoginState] = useState(false);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={4}>
            <NavMenu />
            <Box>
              <Heading as={Link} fontSize="2xl">
                KilimoTrack
              </Heading>
            </Box>
          </HStack>

          <HStack spacing={4} alignItems={"center"}>
            <Box>
              <HStack as="nav" display={{ base: "none", md: "flex" }} gap={6}>
                {links.map((link) => (
                  <NavLink key={link.label}>
                    <Text fontWeight={"medium"}>{link.label}</Text>
                  </NavLink>
                ))}
              </HStack>
            </Box>
          </HStack>

          <Flex justifyContent={"space-between"} gap={6}>
            <HStack gap={6} as="nav" display={{ base: "none", md: "flex" }}>
              <FloatingSearchBar />
              {loginState ? <ProfileMenuOn /> : <ProfileMenuOff />}
              {/* <ProfileMenuOff /> */}
              {navIcons.map((icon) => {
                return (
                  <List key={icon.label}>
                    <ListItem as={Link} href={icon.path}>
                      <ListIcon as={icon.Icon} />
                    </ListItem>
                  </List>
                );
              })}
            </HStack>

            <ColorModeSwitch />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
