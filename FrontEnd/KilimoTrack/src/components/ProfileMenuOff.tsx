import {
  Button,
  HStack,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";

const ProfileMenuOff = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="right"
    >
      <PopoverTrigger>
        <IconButton icon={<FaUser />} aria-label="user-icon" isRound={true} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            <Link as={ReactRouterLink}>
              <Button>Sign in</Button>
            </Link>

            <HStack mt={4}>
              <Text>Don't have an account?</Text>
              <Link as={ReactRouterLink} to="/register">
                <Button>Register</Button>
              </Link>
            </HStack>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileMenuOff;
