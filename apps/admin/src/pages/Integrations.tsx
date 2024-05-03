import { Box, VStack, Divider, Heading } from '@3shop/ui';
import { ProductTutorial } from '../modules/Resources/ProductTutorial';
import { IntegrationTutorial } from '../modules/Resources/IntegrationTutorial';
import { ShopifyIntegration } from '../modules/Resources/ShopifyIntegration';

export const Integrations = () => (
  <>
    <Box padding="4" boxShadow="base" borderRadius="lg">
      <VStack spacing="5">
        <ProductTutorial />
        <Box height="10px" /> 
        <Divider borderColor="gray.400" width="full" />
        <Box height="10px" /> 
        <IntegrationTutorial />
        <Box height="10px" /> 
        <Divider borderColor="gray.400" width="full" />
        <Box height="10px" />
        <ShopifyIntegration />
      </VStack>
    </Box>
  </>
);
