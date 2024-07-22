import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FertilizerCardContainer = ({ children }: Props) => {
  return <Box overflow="hidden">{children}</Box>;
};

export default FertilizerCardContainer;
