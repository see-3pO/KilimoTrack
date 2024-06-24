import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';


const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>

  );
};

export default ColorModeSwitch;
