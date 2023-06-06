import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Header,
  Heading,
  Input,
  Section,
  Text,
} from '@3shop/ui';

export const Customization = () => (
  <Box>
    <Header title="Customization" />

    <Section>
      <Heading fontSize="xl">
        <Text>General Information</Text>
      </Heading>

      {/* Background color */}
      <FormControl>
        <FormLabel mb={1}>Background color</FormLabel>

        <Input placeholder="#FFFFFF" />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      {/* Text color */}
      <FormControl>
        <FormLabel mb={1}>Text color</FormLabel>

        <Input placeholder="#000000" />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    </Section>
  </Box>
);
