import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import tractorImage from "../assets/images/tractorspic.jpg";

const FertilizerCard = () => {
  return (
    <Card>
      <CardBody>
        <Image src={tractorImage} objectFit="cover"/>
        <Stack>
          <Heading size="md">Nitrogen (N) Fertilizer</Heading>
          <Text >
            N-fertilizers are especially useful in the middle phases of a
            plant’s life cycle, when the plant needs the most support to keep
            growing and leafing out.
          </Text>
          <Text>Ksh 2600</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={"center"}>
        <ButtonGroup gap="2">
            <Button>Learn More</Button>
            <Button colorScheme="brand">Place Order</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default FertilizerCard;
