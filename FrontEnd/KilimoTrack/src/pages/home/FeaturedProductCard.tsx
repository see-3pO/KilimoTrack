import { Button, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import tractorImage from "../../assets/images/tractorspic.jpg";

const FeaturedProductCard = () => {
  return (
    <Card h={{ base: "250px", sm: "300px", md: "350px", lg: "320px" }}>
      <CardBody>
        <Image
          src={tractorImage}
          objectFit="cover"
          w="100%"
          h="100%"
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
        />
      </CardBody>
      <CardFooter display="none">
        <Button>Buy Now</Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedProductCard;

// w={[200, 300, 400]} h={[200, 300, 400]}
