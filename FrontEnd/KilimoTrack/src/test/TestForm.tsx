import {
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";

import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const TestForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(6, "Username is too short"),
        password: Yup.string()
          .required("Password required")
          .min(6, "Password is too short"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} style={{ height: "100vh" }}>
          <VStack
            as="form"
            mx="auto"
            h="100vh"
            w={{ base: "90%", md: 500 }}
            justifyContent="center"
          >
            <Heading>Sign Up</Heading>

            <TextField name="username" placeholder="enter username..." />
            <TextField
              name="password"
              type="password"
              placeholder="enter password..."
            />

            <Button type="submit" variant="outline" colorScheme="teal">
              Create Account
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default TestForm;
