import {
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormField from "../../components/FormField";
import PasswordInput from "../../components/PasswordInput";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
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
                <FormField label="Mkulima ID">
                <Input type="number" name="mkulimaNo" />
                </FormField>
                <PasswordInput label="Enter Password" showPassword={showPassword} onToggle={handleShowPassword} />
              </CardBody>
            </Card>
            {/* Login Button */}
            <Center>
              <Button type="submit" size="md" width="150px" variant="solid" bg="brand.500">
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
