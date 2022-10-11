import { Box, Text } from '@chakra-ui/layout';
import { MainLayout } from 'ui';

const IframePage = () => (
  <MainLayout>
    <Box m={3} height="85vh" display="flex" flexDirection="column">
      <Text fontSize="26px" p={2} textAlign="center" fontWeight={500}>
        Exemple of the app integrated in an iframe
      </Text>

      <iframe
        src="/iframe"
        title="the app in an iframe"
        width="100%"
        height="100%"
        id="iframe-zkshop"
      />
    </Box>
  </MainLayout>
);

export default IframePage;
