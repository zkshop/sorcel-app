import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { themes } from ".";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";
import { useAppSelector } from "../store/store";

type ThemeDecoratorProps = {
  pageProps: AppProps["pageProps"];
  children: AppProps["Component"];
};

function ThemeDecorator({ children, pageProps }: ThemeDecoratorProps) {
  const theme = useAppSelector((state) => state.theme);
  const {} = useUpdateThemeOnConnection();

  return (
    <ChakraProvider theme={themes[theme]}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default ThemeDecorator;
