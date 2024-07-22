import { Container, Heading } from "@chakra-ui/react";
import FertilizerGrid from "./FertilizerGrid";

// interface Props {
//   category: string;
// }

// const categories = ["Planting", "Weeding"];

const Shop = () => {
  return (
    <Container maxW="900px" m="auto">
      <Heading mb={4} textAlign="start" size="lg">Planting fertilizers</Heading>
      <FertilizerGrid />
    </Container>
  );
};

export default Shop;

