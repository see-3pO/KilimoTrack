import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const FloatingSearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        justifyContent="center"
        onClick={onOpen}
        icon={<FaSearch />}
        aria-label="Search Button"
        size="sm"
        isRound={true}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent>
          <InputGroup>
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input type="text" placeholder="Search here" />
          </InputGroup>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FloatingSearchBar;
