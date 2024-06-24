import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import countiesInKenya from "../../data/counties";
import { useState, KeyboardEvent } from "react";

const Register = () => {
  const [crops, setCrops] = useState<string[]>([]);
  const [cropInput, setCropInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputCrop = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && cropInput.trim() !== "") {
      if (!crops.includes(cropInput.trim())) {
        setCrops([...crops, cropInput.trim()]);
      }
      setCropInput("");
      event.preventDefault();
    }
  };

  const handleRemoveCrop = (cropToRemove: string) => {
    setCrops(crops.filter((crop) => crop !== cropToRemove));
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Box>
        <Center>
          <Stack>
            <VStack as="header" spacing={6} mt={8}>
              <Heading as="h1">KilimoTrack</Heading>
              <Text fontSize='xl' fontWeight={500}>Online Registration</Text>
            </VStack>

            <Card variant="outline" minWidth="900px" >
              <CardBody>
                <form>
                  <Stack>
                    {/* personal info */}
                    <Text fontSize='lg'>Personal Information</Text>
                    <Card>
                      <CardBody>
                        <HStack>
                          <FormControl isRequired>
                            <FormLabel size="sm">Full Name</FormLabel>
                            <Input type="text" placeholder="Full Name"  focusBorderColor='brand.200'/>
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel size="sm">National ID</FormLabel>
                            <Input type="number" placeholder="National ID" focusBorderColor='brand.200' />
                          </FormControl>
                        </HStack>

                        <HStack mt={4}>
                          <FormControl isRequired>
                            <FormLabel size="sm">Phone Number</FormLabel>
                            <InputGroup>
                              <InputLeftAddon>+254</InputLeftAddon>
                              <Input type="tel" placeholder="Phone Number" focusBorderColor='brand.200' />
                            </InputGroup>
                          </FormControl>
                          <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="email" focusBorderColor='brand.200' />
                          </FormControl>
                        </HStack>
                      </CardBody>
                    </Card>

                    {/* farm section */}
                    <Text fontSize='lg'>Farm Details</Text>
                    <Card>
                      <CardBody>
                        <HStack spacing={4}>
                          <FormControl>
                            <FormLabel>Farm Size</FormLabel>
                            <NumberInput min={0.1} precision={1} step={0.1} focusBorderColor='brand.200'>
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </FormControl>
                          <FormControl>
                            <FormLabel>Farm Location</FormLabel>
                            <Select placeholder="Select County" >
                              {countiesInKenya.map((county) => (
                                <option key={county.id}>{county.name}</option>
                              ))}
                            </Select>
                          </FormControl>
                        </HStack>
                        <FormControl mt={4}>
                          <FormLabel>Crops Grown</FormLabel>

                          <HStack>
                            {crops.map((crop) => (
                              <Tag
                                size="md"
                                key={crop}
                                borderRadius="full"
                                variant="solid"
                                colorScheme="green"
                              >
                                <TagLabel>{crop}</TagLabel>
                                <TagCloseButton
                                  onClick={() => handleRemoveCrop(crop)}
                                />
                              </Tag>
                            ))}
                          </HStack>

                          <Input
                            placeholder="Enter a crop and press Enter"
                            value={cropInput}
                            onChange={(e) => setCropInput(e.target.value)}
                            onKeyDown={handleInputCrop}
                            focusBorderColor='brand.200'
                          />
                        </FormControl>
                      </CardBody>
                    </Card>

                    {/* password section */}
                    <Text fontSize='lg'>Create Password</Text>
                    <Card>
                      <CardBody>
                        <FormControl>
                          <FormLabel>
                            <InputGroup>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                focusBorderColor='brand.200'
                              />
                              <InputRightElement width="5rem">
                                <Button
                                  h="1.7rem"
                                  size="sm"
                                  bg="brand.500"
                                  onClick={handleShowPassword}
                                >
                                  {showPassword ? "Hide" : "Show"}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                          </FormLabel>
                        </FormControl>

                        {/*Confirm Password*/}
                        <FormControl>
                          <FormLabel>
                            <InputGroup>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                focusBorderColor='brand.200'
                              />
                              <InputRightElement width="5rem">
                                <Button
                                  h="1.7rem"
                                  size="sm"
                                  bg="brand.500"
                                  onClick={handleShowPassword}
                                >
                                  {showPassword ? "Hide" : "Show"}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                          </FormLabel>
                        </FormControl>
                      </CardBody>
                    </Card>

                    {/* Register Button */}
                    <Center>
                      <Button size="md" width="150px" variant="solid" bg="brand.500">
                        Register
                      </Button>
                    </Center>
                  </Stack>
                </form>
              </CardBody>
            </Card>
          </Stack>
        </Center>
      </Box>
    </>
  );
};

export default Register;
