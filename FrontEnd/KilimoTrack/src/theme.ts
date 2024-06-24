import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// color mode configuration
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// extending the theme
const theme = extendTheme({
  config,
});

export default theme;
