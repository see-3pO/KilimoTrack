import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Progress,
  Select,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import countiesInKenya from "../../data/counties";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserInfo = () => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" my={4}>
        User Registration
      </Heading>
      <Stack>
        <Flex gap={2}>
          <FormControl>
            <FormLabel htmlFor="first-name">First Name</FormLabel>
            <Input
              type="text"
              placeholder="First Name"
              id="first-name"
              name="firstName"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="last-name">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Last Name"
              id="last-name"
              name="lastName"
            />
          </FormControl>
        </Flex>
        <Flex gap={2}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" id="email" name="email" />
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" id="phone-number" name="phoneNumber" />
          </FormControl>
        </Flex>
        <FormControl>
          <FormControl>
            <FormLabel>National ID</FormLabel>
            <Input type="number" id="national-id" name="nationalID" />
          </FormControl>
        </FormControl>
      </Stack>
    </>
  );
};

const FarmDetails = () => {
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" my={4}>
        Farm Details
      </Heading>

      <FormControl as={GridItem}>
        <FormLabel>Select County</FormLabel>
        <Select placeholder="Select County" name="county" id="county">
          {countiesInKenya.map((county) => (
            <option key={county.id}>{county.name}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl as={GridItem}>
        <FormLabel>Town</FormLabel>
        <Input
          type="text"
          name="town"
          id="town"
          autoComplete="town"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem}>
        <FormLabel>Farm size (acres)</FormLabel>
        <NumberInput
          min={0.1}
          precision={1}
          step={0.1}
          focusBorderColor="brand.200"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl as={GridItem}>
        <FormLabel>Crops Grown</FormLabel>
        <Input
          type="text"
          name="cropsGrown"
          id="crops"
          placeholder="Enter crops grown"
        />
      </FormControl>
    </>
  );
};

const CreatePass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <>
      <Heading w="100%" textAlign="center" fontWeight="normal" my={4}>
        Create Password
      </Heading>
      <FormControl>
        <FormLabel>Enter new Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="teal"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="teal"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const RegForm = () => {
  const toast = useToast();
  const id = "toast-id";
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      {/*header*/}
      <VStack as="header">
        <Heading as="h1">Kilimo Track</Heading>
      </VStack>
      <Box m="10px auto" maxW={800} p={6} as="form" rounded="lg">
        <Progress
          colorScheme="teal"
          size="xs"
          value={progress}
          isAnimated
        ></Progress>
        {step === 1 ? (
          <UserInfo />
        ) : step === 2 ? (
          <FarmDetails />
        ) : (
          <CreatePass />
        )}

        <ButtonGroup mt={4} w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex gap={4}>
              <Button
                w="7rem"
                colorScheme="teal"
                variant="solid"
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
              >
                Back
              </Button>
              <Button
                w="7rem"
                colorScheme="teal"
                variant="outline"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                variant="solid"
                w="7rem"
                colorScheme="red"
                onClick={() => {
                  if (!toast.isActive(id)) {
                    toast({
                      id,
                      title: "User Registered",
                      description: "We've created your account for you.",
                      position: "top",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }}
              >
                Register
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default RegForm;
