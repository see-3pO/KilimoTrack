import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import PersonalInfoSection from "./PersonalInfoSection";
import * as Yup from "yup";
import FarmSection from "./FarmSection";

const intitialValues = {
  firstName: "",
  lastName: "",
  nationalID: "",
  phoneNumber: "",
  email: "",
  crops: [],
  cropInput: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  nationalID: Yup.number()
    .typeError("National ID must be a number")
    .required("Required")
    .integer("Please enter a valid ID number without decimal values")
    .positive("ID number should be positive")
    .test(
      "Length of National ID",
      "National ID must have  exactly 8 numbers",
      (val) => val.toString().length === 8
    ),
  phoneNumber: Yup.string()
    .typeError("Phone number must be a number")
    .required("Required")
    .matches(/^\+254\d{9}$/, "Phone number must start with +254"),

  email: Yup.string().email("Invalid Email"),

  crops: Yup.array().of(Yup.string().required('Crop name is required')).min(1, "At least one crop is required"),
  cropInput: Yup.string().required('Crop input is required'),
});

const onSubmit = (values) => {
  console.log("Form Data:", values);
};

const Register = () => {
  return (
    <>
      {/*header*/}
      <VStack as="header">
        <Heading as="h1">Kilimo Track</Heading>
        <Text>Online Registration</Text>
      </VStack>

      {/* form */}
      <Formik
        initialValues={intitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <form>
          <PersonalInfoSection />
          <FarmSection />
          <Center>
            <Button
              type="submit"
              size="md"
              width="150px"
              variant="solid"
              bg="teal"
            >
              Register
            </Button>
          </Center>
        </form>
      </Formik>
    </>
  );
};

export default Register;
