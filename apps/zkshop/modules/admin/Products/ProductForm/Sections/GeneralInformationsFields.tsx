import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Checkbox,
  HStack,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { Section, ChatRightTextIcon } from 'ui';

import { PRODUCTS_FIELDS } from '../../constants';

export const GeneralInformationsFields = () => {
  const { register } = useFormContext();

  return (
    <Section>
      <Heading fontSize="xl"> General Information </Heading>

      <FormControl>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.name.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            -
          </InputLeftElement>
          <Input placeholder="Name" {...register('name')} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.description.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <ChatRightTextIcon />
          </InputLeftElement>

          <Input placeholder="Description" {...register('description')} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.price.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            $
          </InputLeftElement>

          <Input placeholder="Price" {...register('price')} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel mb={1}>Discount</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            %
          </InputLeftElement>

          <Input placeholder="Discount for holders" {...register('discount')} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <HStack>
          <Checkbox isChecked={true} />

          <FormLabel>Enable discount only for holders</FormLabel>
        </HStack>
      </FormControl>
    </Section>
  );
};
