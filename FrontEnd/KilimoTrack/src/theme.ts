import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// const breakpoints = {
//   base: "0em",
//   sm: "30em", // 480px
//   customBreakpoint: "26.25em", // 420px
//   md: "48em", // 768px
//   lg: "62em", // 992px
//   xl: "80em", // 1280px
// };

// color mode configuration
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// extending the theme
const theme = extendTheme({
  // breakpoints,
  config,
  colors: {
    brand: {
      50: "#fdffdb",
      100: "#fefdaf",
      200: "#fbf680",
      300: "#faed4f",
      400: "#f9e020",
      500: "#dfc006",
      600: "#aea100",
      700: "#7c7c00",
      800: "#464a00",
      900: "#1a1b00",
    },
  },
});

export default theme;
