import { Header, Text } from '@3shop/ui';

export const ProductTutorial = () => (
  <>
    <Header title="Product Tutorial" />
    <Text mb={2} variant="H500">
      Learn how to add products and gate them with NFTs or POAPs
    </Text>
    <div
      style={{
        position: 'relative',
        paddingBottom: 'calc(51.19840213049268% + 41px)',
        height: 0,
        width: '100%',
      }}
    >
      <iframe
        src="https://demo.arcade.software/7bNQCOdYzs1e1HK1dE2Q?embed&show_copy_link=true"
        title="Sorcel Admin"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: 'absolute',
          border: '0px',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          colorScheme: 'light',
        }}
      ></iframe>
    </div>
  </>
);
