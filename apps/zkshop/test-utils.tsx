import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiClient, chains } from 'clients/wagmi';
import { ThemeDecorator } from 'components/ThemeDecorator';
import { WagmiConfig } from 'wagmi';
import { wrapper } from 'store/store';
import { FormProvider, useForm } from 'react-hook-form';

type OnlyChildren = { children: React.ReactNode };

const AllTheProviders = wrapper.withRedux(({ children }: OnlyChildren) => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <ThemeDecorator>{children}</ThemeDecorator>
    </RainbowKitProvider>
  </WagmiConfig>
));

export const FormTestProvider = ({ children }: OnlyChildren) => {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
