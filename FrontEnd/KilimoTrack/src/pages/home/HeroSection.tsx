import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Center minHeight="100vh" p={4}>
          <VStack>
            <Container maxW="container.md" textAlign="center">
              <Heading
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                mb={4}
                color="gray.700"
              >
                Easily
                <Text as={"span"} color="brand.400">
                  {" "}
                  Manage{" "}
                </Text>
                and
                <Text as={"span"} color="brand.400">
                  {" "}
                  Track{" "}
                </Text>
                Your Fertilizer Orders
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "lg", md: "xl" }}
                color="gray.500"
              >
                Access subsidized fertilizers with ease, track orders, and stay
                informed with real-time updates
              </Text>
              <Button
                mt={8}
                colorScheme="brand"
                bg={"brand.400"}
                rounded="full"
                _hover={{ bg: "brand.500" }}
                fontSize={{base:"sm", sm: "md", md:"lg"}}
              >
                Discover More
              </Button>
              <Text my={2} fontSize="sm" color="gray.500">
                2000+ farmers have ordered with us in the last 30 days
              </Text>
            </Container>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default HeroSection;
