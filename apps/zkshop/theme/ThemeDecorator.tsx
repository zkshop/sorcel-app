import { ChakraProvider } from "@chakra-ui/react";

import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";
import { useAppSelector } from "../store/store";

import { themes } from ".";

function ThemeDecorator({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme);
  const {} = useUpdateThemeOnConnection();

  return <ChakraProvider theme={themes[theme]}>{children}</ChakraProvider>;
}

export default ThemeDecorator;
