import { Card, CardBody, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const FormSection = ({ title, children }: Props) => {
  return (
    <Card>
      <CardBody>
        <Text fontSize="large">{title}</Text>
        {children}
      </CardBody>
    </Card>
  );
};

export default FormSection;
