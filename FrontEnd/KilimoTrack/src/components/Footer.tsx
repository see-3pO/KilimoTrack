import {
  Box,
  Container,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <Container maxW="container.lg">
      <Flex py={6}>
        <Box>
          <Text>© 2024 KilimoTrack</Text>
          <Text>Made by Patience Chiri</Text>
        </Box>
        <Spacer />

        <LinkBox>
          <LinkOverlay href="https://github.com/see-3pO" isExternal>
            <Image alt="Github Logo" />
          </LinkOverlay>
        </LinkBox>
      </Flex>
    </Container>
  );
};

export default Footer;
