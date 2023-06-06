import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Header,
  Heading,
  Input,
  SearchSelect,
  Section,
  Text,
} from '@3shop/ui';
import fonts from '../assets/fonts.json';

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

      {/* Font */}

      <FormControl>
        <FormLabel mb={1}>Font</FormLabel>

        <SearchSelect useBasicStyles name="fonts" options={fonts} />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    </Section>
  </Box>
);
