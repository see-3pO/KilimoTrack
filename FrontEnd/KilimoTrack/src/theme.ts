import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// color mode configuration
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// extending the theme
const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#defdf5",
      100: "#bbf1e7",
      200: "#96e6d9",
      300: "#6edacd",
      400: "#49cfc3",
      500: "#30b6a1",
      600: "#208e75",
      700: "#10664d",
      800: "#003e29",
      900: "#00170d",
    }
  }
});

export default theme;

