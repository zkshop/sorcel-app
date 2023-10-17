import React, { useState, useEffect } from 'react';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import type { Nullable } from '@3shop/types';
import { useGetAppThemeLazyQuery } from '@3shop/apollo';
import { envVars } from '@3shop/config';
import { merge } from 'lodash';
import { theme as baseTheme } from './theme';
import WebFont from 'webfontloader';

type Props = {
  children?: React.ReactNode;
  customTheme?: boolean;
};

type CustomTheme = {
  font: string | undefined;
  font_color: string | undefined;
  background_color: string | undefined;
};

export const ThemeProvider = ({ children, customTheme = false }: Props) => {
  const [getTheme] = useGetAppThemeLazyQuery({ variables: { appId: envVars.APP_ID || '' } });
  const [theme, setTheme] = useState<Nullable<Record<string, any>>>(baseTheme);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await getTheme();

        if (!response.data) throw new Error('Theme not found');

        const { background_color, font, font_color } = response.data.app as CustomTheme;

        if (font)
          WebFont.load({
            google: {
              families: [font],
            },
          });

        const newTheme = extendTheme(
          merge({
            styles: {
              global: {
                body: {
                  fontFamily: font ? font : 'inherit',
                  color: font_color,
                  backgroundColor: background_color,
                },
              },
            },
          }),
          baseTheme,
        );

        setTheme(newTheme);
      } catch (error) {
        console.error('Erreur lors de la récupération du thème:', error);
      }
    };
    if (customTheme) fetchTheme();
  }, []);

  if (!theme) {
    return <div>Chargement du thème...</div>;
  }

  return (
    <ChakraProvider resetCSS theme={theme} cssVarsRoot="body">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};
