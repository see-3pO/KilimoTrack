import { Container, Text, VStack } from "@chakra-ui/react";
import Feature from "./Feature";
import DepotPic from "../../assets/images/Depot.jpg";
import OnlineOrderPic from "../../assets/images/OnlineOrder.jpg";
import NotificationPic from "../../assets/images/NotifyLetter.jpg";
import LetterPic from "../../assets/images/LetterPost.jpg";
import BillOrder from "../../assets/images/BillOrder.jpg";

interface FeatureType {
  title: string;
  description: string;
  imageSrc: string;
}

const features: FeatureType[] = [
  {
    title: "Order Management",
    description: "Place and track your fertilizer orders easily.",
    imageSrc: BillOrder,
  },
  {
    title: "Inventory Updates",
    description: "Get real-time updates on fertilizer availability.",
    imageSrc: LetterPic,
  },
  {
    title: "Payment Processing",
    description: "Make payments through MPesa, bank transfers, and more.",
    imageSrc: OnlineOrderPic,
  },
  {
    title: "Depot Information",
    description: "View depot locations and schedule pickups.",
    imageSrc: DepotPic,
  },
  {
    title: "Notifications and Alerts",
    description: "Receive timely alerts and notifications for your orders.",
    imageSrc: NotificationPic,
  },
];

const FeatureSection = () => {
  return (
    <Container maxW="container.xl">
      <VStack w="full" id="features" spacing={16} py={[16, 0]}>
        <Text fontWeight={500} fontSize="2xl" color="brand.600">
          Features
        </Text>
        {features.map(
          ({ title, description, imageSrc }: FeatureType, i: number) => {
            return (
              <Feature
                key={`feature_${i}`}
                title={title}
                description={description}
                image={imageSrc}
                reverse={i % 2 === 1}
              />
            );
          }
        )}
      </VStack>
    </Container>
  );
};

export default FeatureSection;
