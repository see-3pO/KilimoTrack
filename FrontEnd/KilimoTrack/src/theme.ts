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
      50: "#fff7dd",
      100: "#fcecb3",
      200: "#f8e485",
      300: "#f6de56",
      400: "#f3c829",
      500: "#d9a111",
      600: "#a97209",
      700: "#794904",
      800: "#482700",
      900: "#1a0b00",
    },
  },
});

export default theme;
