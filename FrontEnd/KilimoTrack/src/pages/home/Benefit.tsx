import { Box, Text } from "@chakra-ui/react";

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <Box p={4} rounded="md">
      <Text fontSize="4xl">{icon}</Text>
      <Text fontWeight={500}>{title}</Text>
      <Text color="gray.500" mt={4}>{description}</Text>
    </Box>
  );
};

export default Benefit;
