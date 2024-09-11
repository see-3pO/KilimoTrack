import { Box, Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import FeaturedProductCard from "./FeaturedProductCard";
import { Link as ReactRouterLink } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Heading my={10} fontWeight={500} fontSize="2xl" color="brand.600">
        Featured Products
      </Heading>
      <Box>
        <SimpleGrid gap={2} minChildWidth={{base:"250px", sm: "300px", md: "350px", lg: "320px"}}>
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
        </SimpleGrid>
      </Box>

      <Button as={ReactRouterLink} to="/shop" my={8}  bg={"brand.400"} _hover={{ bg: "brand.500"}} rounded="full">Shop Now</Button>
    </Container>
  );
};

export default FeaturedProducts;

// templateColumns={[
//   "repeat(1, 1fr)",
//   "repeat(2, 1fr)",
//   "repeat(3, 1fr)",
// ]}
// gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
