import { Box, Container, Text, VStack } from "@chakra-ui/react";
import FAQ from "./FAQ";


const faqs = [
  {
    question: "What is KilimoTrack?",
    answer: "KilimoTrack is a web application designed to help farmers manage and track their orders of subsidized fertilizers. It offers features such as user registration, order management, real-time tracking, secure payments, and insightful reporting.",
  },
  {
    question: "How do I register for KilimoTrack?",
    answer: "To register, click on the 'Register' button on the homepage and fill out the registration form with your personal details, farm information, and subsidy program ID. Once submitted, you will receive a confirmation email or SMS.",
  },
  {
    question: "How can I place an order for fertilizers?",
    answer: "After logging in, go to the 'Order Placement' page, select the type and quantity of fertilizer you need, choose your preferred depot for pickup, and submit your order.",
  },
]

const FAQSection = () => {
  return(
    <Container py={28} maxW="container.md">
      <Box w="full">
        <VStack w="full" spacing={10}>
          <Text fontWeight={500} fontSize="2xl" align="center" color="brand.600">Frequently Asked Questions</Text>
          <FAQ items={faqs} />
        </VStack>
      </Box>
    </Container>
  );
};

export default FAQSection;
