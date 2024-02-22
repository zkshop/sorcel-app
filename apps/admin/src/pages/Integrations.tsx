import { Box, Text, HStack } from '@3shop/ui';
import ResourceCard from '../modules/Resources/ResourcesCard';
import { ROUTES_PATH } from '../routes/Routes';

export const Integrations = () => (
  <>
    <Box>
      <Text variant="H700" paddingY={2}>
        Resources
      </Text>
      <HStack mb={2}>
        <ResourceCard
          link={`${ROUTES_PATH.PROTECTED.RESOURCES}/product-tutorial`}
          title="How to create a product?"
          description="Learn how to add products and gate them with NFTs or POAPs"
        />
        <ResourceCard
          link={`${ROUTES_PATH.PROTECTED.RESOURCES}/integration-tutorial`}
          title="How to integrate the module?"
          description="See how to integrate the module into your website"
        />
      </HStack>
      <Text variant="H700" paddingY={2}>
        Preview of the module
      </Text>
    </Box>
  </>
);
