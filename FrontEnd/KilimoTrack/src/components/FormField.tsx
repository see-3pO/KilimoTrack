import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

const FormField = ({
  label,
  name,
  type,
  placeholder,
  children,
  ...props
}: Props) => {
  const [field, meta] = useField(name);
  return (
    <FormControl isInvalid={!!(meta.error && meta.touched)}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
