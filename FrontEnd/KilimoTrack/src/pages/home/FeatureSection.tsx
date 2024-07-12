import { VStack } from "@chakra-ui/react";
import Feature from "./Feature";

interface FeatureType {
  title: string;
  description: string;
  imageSrc: string;
}

const features: FeatureType[] = [
  {
    title: "Order Management",
    description: "Place and track your fertilizer orders easily.",
    imageSrc: "",
  },
  {
    title: "Inventory Updates",
    description: "Get real-time updates on fertilizer availability.",
    imageSrc: "image2",
  },
  {
    title: "Payment Processing",
    description: "Make payments through MPesa, bank transfers, and more.",
    imageSrc: "image1",
  },
  {
    title: "Depot Information",
    description: "View depot locations and schedule pickups.",
    imageSrc: "image1",
  },
  {
    title: "Notifications and Alerts",
    description: "Receive timely alerts and notifications for your orders.",
    imageSrc: "image1",
  },
];

const FeatureSection = () => {
  return (
    <VStack w="full" id="features" spacing={16} py={[16, 0]}>
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
  );
};

export default FeatureSection;
