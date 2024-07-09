import {
  Avatar,
  AvatarBadge,
  HStack,
  Link,
  ListIcon,
  ListItem,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const popContent = [
  { label: "My Account", popIcon: FaUser },
  { label: "My Cart", popIcon: FaShoppingCart },
  { label: "Settings", popIcon: IoMdSettings },
  { label: "Log Out", popIcon: IoLogOut },
];

const ProfileMenuOn = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Avatar src="https://bit.ly/broken-link" name="Gojo Satoru">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <HStack>
              <Avatar name="Gojo Satoru" src="https://bit.ly/broken-link" />
              <Text>Gojo Satoru</Text>
            </HStack>
          </PopoverHeader>
          <PopoverContent>
            <UnorderedList listStyleType="none">
              <ListItem>
                {popContent.map((pop) => (
                  <Link key={pop.label}>
                    <HStack>
                      <ListIcon as={pop.popIcon} />
                      <Text>{pop.label}</Text>
                    </HStack>
                  </Link>
                ))}
              </ListItem>
            </UnorderedList>
          </PopoverContent>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ProfileMenuOn;
