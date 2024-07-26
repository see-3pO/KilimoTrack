import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import Benefit from "./Benefit";

interface BenefitType {
  icon: string;
  title: string;
  description: string;
}

const benefits: BenefitType[] = [
  {
    icon: "🌿",
    title: "Easy Order Management",
    description:
      "Simplify the process of ordering and managing subsidized fertilizers with just a few clicks.",
  },
  {
    icon: "📦",
    title: "Real-Time Order Tracking",
    description:
      "Track your fertilizer orders from placement to delivery, ensuring you stay informed at all times.",
  },
  {
    icon: "💰",
    title: "Secure Payment Processing",
    description:
      "Use secure payment methods like MPesa and bank transfers for hassle-free transactions.",
  },
  {
    icon: "📊",
    title: "Insightful Reporting",
    description:
      "Access detailed reports and analytics to make informed decisions and optimize your farming operations.",
  },
];

const BenefitsSection = () => {
  return (
    <Container maxW="container.md" centerContent py={[8, 28]}>
      <Text fontWeight={500} fontSize="2xl">
        Benefits
      </Text>
      <SimpleGrid column={2} spacingX={10} spacingY={20} minChildWidth="300px">
        {benefits.map(({ icon, title, description }, i: number) => (
          <Benefit
            key={`benefit_${i}`}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BenefitsSection;
