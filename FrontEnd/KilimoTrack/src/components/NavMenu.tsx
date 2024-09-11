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
import { IconType } from "react-icons";

import { FaHome, FaUser, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface LinkItemProps {
  label: string;
  Icon: IconType;
}

const menuList: LinkItemProps[] = [
  { label: "HOME", Icon: FaHome },
  { label: "SHOP", Icon: FaShoppingCart },
  { label: "ABOUT", Icon: FaInfoCircle },
  { label: "CONTACT US", Icon: MdEmail },
  { label: "LOGIN/REGISTER", Icon: FaUser },
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
            <HStack alignContent="center">
              <Heading as={Link} size="md" onClick={onClose}>
                KilimoTrack
              </Heading>
              <DrawerCloseButton size="md" />
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <Input placeholder="Search Here..." />
              </Box>

              <UnorderedList listStyleType={"none"}>
                <ListItem>
                  {menuList.map((mlist) => (
                    <Link key={mlist.label}>
                      <HStack>
                        <ListIcon as={mlist.Icon} size="2xl" />
                        <Text fontSize="xl" fontWeight={500}>
                          {mlist.label}
                        </Text>
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
