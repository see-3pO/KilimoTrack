import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";

import { FaHome, FaUser, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const menuList = [
  { label: "Home", Icon: FaHome },
  { label: "Shop", Icon: FaShoppingCart },
  { label: "About", Icon: FaInfoCircle },
  { label: "Contact Us", Icon: MdEmail },
  { label: "Login/Register", Icon: FaUser },
];

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        size={"md"}
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        display={{ md: "none" }}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Heading as={Link} size="sm" onClick={onClose}>
              KilimoTrack
            </Heading>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
            <Box>
            <Input placeholder="Search Here..." />
            </Box>

            <UnorderedList listStyleType={"none"}>
              <ListItem >
                {menuList.map((mlist) => (
                  <Link key={mlist.label}>
                    <HStack>
                      <ListIcon as={mlist.Icon} />
                      <Text>{mlist.label}</Text>
                    </HStack>
                  </Link>
                ))}
              </ListItem>
            </UnorderedList>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
