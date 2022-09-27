import { extendTheme } from "@chakra-ui/react";

import { common } from "../common/common";

export const first = extendTheme({
  ...common,
  colors: {
    bannerLeft: "#0987A0",
    bannerRight: "#805AD5",
    super: "#ff00bf",
  },
});
