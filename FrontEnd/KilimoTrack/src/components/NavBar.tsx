import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./NavLink";
import navIcons from "../constants/navIcons";
import NavMenu from "./NavMenu";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const NavBar = () => {
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
              {navIcons.map((icon) => {
                return (
                  <List>
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
