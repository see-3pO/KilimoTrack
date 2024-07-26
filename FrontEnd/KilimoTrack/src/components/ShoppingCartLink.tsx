import { IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartLink = () => {
  return (
    <IconButton
      aria-label={"Shopping Cart"}
      isRound={true}
      icon={<FaShoppingCart />}
      size="sm"
    />
  );
};

export default ShoppingCartLink;
