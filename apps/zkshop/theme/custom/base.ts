import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./extensions/breakpoints";

export const base = extendTheme({
  ...breakpoints,
});
