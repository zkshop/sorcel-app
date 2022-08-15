import { extendTheme } from "@chakra-ui/react";
import { base } from './base'

export const first = extendTheme({
  ...base,
  colors: {
    bannerLeft: "#0987A0",
    bannerRight: "#805AD5",
    super: "#ff00bf"
  },
});
