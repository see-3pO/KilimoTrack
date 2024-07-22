import { Card, CardBody, Image } from "@chakra-ui/react";
import tractorImage from "../../assets/images/tractorspic.jpg";

const FeaturedProductCard = () => {
  return (
    <Card w={[200, 300, 400]} h={[200, 300, 400]}>
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
    </Card>
  );
};

export default FeaturedProductCard;
