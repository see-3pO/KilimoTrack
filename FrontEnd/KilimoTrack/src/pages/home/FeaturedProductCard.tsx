import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Icon,
  Image,
  Text,
  Tooltip,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import tractorImage from "../../assets/images/tractorspic.jpg";
import { FiShoppingCart } from "react-icons/fi";

const FeaturedProductCard = () => {
  return (
    // <Card h={{ base: "250px", sm: "300px", md: "350px", lg: "320px" }}
    // _hover={{

    // }}>
    //   <CardBody>
    //     <Image
    //       src={tractorImage}
    //       objectFit="cover"
    //       w="100%"
    //       h="100%"
    //       pos="absolute"
    //       top="0"
    //       left="0"
    //       right="0"
    //       bottom="0"
    //     />
    //   </CardBody>
    //   <CardFooter>

    //   </CardFooter>
    // </Card>

    <Flex p={30} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        position="relative"
      >
        <Image src={tractorImage} alt="Product Image" roundedTop="lg" />
        <Box>
          <Flex m="2" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Product Name
            </Box>
            <Box color={useColorModeValue("gray.800", "white")} fontSize="2xl">
              <Box as="span" color="gray.600" fontSize="lg">
                Ksh
              </Box>
              1000
            </Box>
            <Tooltip
              label="Add to Cart"
              bg="white"
              placement="top"
              color={"gray.800"}
              fontSize="1.2em"
            >
              <chakra.a href="#" display="flex">
                <Icon as={FiShoppingCart} h={6} w={6} alignSelf="center" />
              </chakra.a>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default FeaturedProductCard;

// w={[200, 300, 400]} h={[200, 300, 400]}
