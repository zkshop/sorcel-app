import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { Section, CollectionIcon, CollectionPlayIcon } from 'ui';

export const OnChainDataFields = () => {
  const { register } = useFormContext();

  return (
    <Section>
      <Heading fontSize="xl"> On-Chain Data </Heading>

      <FormControl>
        <FormLabel> Collection Name </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CollectionIcon />
          </InputLeftElement>

          <Input placeholder="Collection Name" {...register('collection')} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel> Collection Address </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CollectionPlayIcon />
          </InputLeftElement>

          <Input placeholder="Collection Address" {...register('curation')} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel> Poap Id </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CollectionIcon />
          </InputLeftElement>

          <Input type="number" placeholder="Poap ID" {...register('poapId')} />
        </InputGroup>
      </FormControl>
    </Section>
  );
};
