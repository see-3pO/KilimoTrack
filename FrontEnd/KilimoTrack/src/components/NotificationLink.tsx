import { IconButton } from "@chakra-ui/react";
import { IoMdNotifications } from "react-icons/io";

const NotificationLink = () => {
  return (
    <IconButton
      aria-label={"Shopping Cart"}
      size="sm"
      isRound={true}
      icon={<IoMdNotifications />}
    />
  );
};

export default NotificationLink;
