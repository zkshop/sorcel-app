import { Box, HStack, Header, Text } from '@3shop/ui';
import { IntegrationCode } from './IntegrationCode';

export const IntegrationTutorial = () => (
  <>
    <Header title="How to integrate the module?" />
    <Text mb={2} variant="H500">
      See how to integrate web3 into your website
    </Text>
    <HStack>
      <Box flex={1}>
        <IntegrationCode />
      </Box>

      <Box flex={1} pos="relative" width="50%" height="0" paddingBottom="28.125%">
        <iframe
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          src="https://www.youtube.com/embed/G_0a_uOh9eg?si=32OjwaX0LVEtjY5G"
          title="Webflow tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
    </HStack>
  </>
);
