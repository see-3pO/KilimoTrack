import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    // <Button onClick={toggleColorMode}>
    //     {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    // </Button>
    <IconButton
      onClick={toggleColorMode}
      isRound={true}
      aria-label="ThemeSwitch"
      variant="solid"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      size="sm"
    />
  );
};

export default ColorModeSwitch;
