import {
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Center>
        <Stack>
          <VStack as="header" spacing={6} mt={8}>
            <Heading as="h1">KilimoTrack</Heading>
            <Text>Welcome Mkulima 👋</Text>
          </VStack>
          <form>
            <Card minWidth="900px">
              <CardBody>
                <FormControl>
                  <FormLabel>Mkulima ID</FormLabel>
                  <Input type="number" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Enter Password</FormLabel>
                  <InputGroup>
                    <Input type="password" />
                    <InputRightElement mr={2}>
                      <Button h="1.7rem" size="sm">
                        Show
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </CardBody>
            </Card>
            {/* Login Button */}
            <Center>
              <Button size="md" width="150px" variant="solid" bg="brand.500">
                Login
              </Button>
            </Center>
          </form>
        </Stack>
      </Center>
    </>
  );
};

export default Login;
