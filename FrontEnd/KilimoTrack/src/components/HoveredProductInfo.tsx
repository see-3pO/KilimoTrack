import { Box, Button, HStack, Text } from "@chakra-ui/react";

const HoveredProductInfo = () => {
  return (
    <Box>
      <HStack>
        <Text>Product One</Text>
        <Text>$100</Text>
      </HStack>

      <Button>Buy Now</Button>
    </Box>
  );
};

export default HoveredProductInfo;
