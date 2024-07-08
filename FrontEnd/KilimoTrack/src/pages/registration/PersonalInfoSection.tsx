import { HStack } from "@chakra-ui/react";
import FormSection from "./FormSection";
import FormField from "../../components/FormField";

const PersonalInfoSection = () => {
  return (
    <FormSection title="Personal Information">
      <HStack>
        <FormField label="First Name" name="firstName" type="text" />
        <FormField label="Last Name" name="lastName" type="text" />
      </HStack>
      <HStack>
        <FormField label="National ID" name="nationalID" type="number" />
        <FormField label="Phone Number" name="phoneNumber" type="number" placeholder="+2547..."/>
      </HStack>
      <FormField
        label="Email"
        name="email"
        placeholder="Enter email.."
        type="email"
      />
    </FormSection>
  );
};

export default PersonalInfoSection;
