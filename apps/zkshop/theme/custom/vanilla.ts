import { extendTheme } from "@chakra-ui/react";
import { base } from './base'

export const vanilla = extendTheme({
  ...base,
  colors: {
    bannerLeft: "grey",
    bannerRight: "black",
    super: "#ff6600"
  },
});
