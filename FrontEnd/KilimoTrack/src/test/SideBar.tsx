import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaHome, FaUser, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";
import ColorModeSwitch from "../components/ColorModeSwitch";
import { IconType } from "react-icons";

interface LinkItemProps {
  label: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface SideBarProps extends BoxProps {
  onClose: () => void;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const menuList: LinkItemProps[] = [
  { label: "Home", icon: FaHome },
  { label: "Shop", icon: FaShoppingCart },
  { label: "About", icon: FaInfoCircle },
  { label: "Contact Us", icon: MdEmail },
  { label: "Login/Register", icon: FaUser },
];

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} display={{ base: "flex", md: "none" }} />
    </>
  );
};

export default SideBar;

const SideBarContent = ({ onClose, ...props }: SideBarProps) => {
  return (
    <Box {...props}>
      <Flex>
        <Text>KilimoTrack</Text>
        <CloseButton onClick={onClose} display={{ base: "flex", md: "none" }} />
      </Flex>
      {menuList.map((link) => (
        <NavItem icon={link.icon} key={link.label}>
          {link.label}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...props }: NavItemProps) => {
  return (
    <Box as="a" href="#" style={{ textDecoration: "none" }} {...props}>
      <Flex {...props}>
        {icon && (<Icon as={icon} />) }
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...props }: MobileProps) => {
  return (
    <Flex {...props}>
      <IconButton aria-label="hamburger menu" icon={<HamburgerIcon />} />
      <Text>KilimoTrack</Text>
      <ColorModeSwitch />
    </Flex>
  );
};
