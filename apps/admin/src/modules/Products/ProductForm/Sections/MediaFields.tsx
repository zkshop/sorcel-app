import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Section,
  LinkIcon,
} from '@3shop/ui';
import { useFormContext } from 'react-hook-form';
import type { AddProductFormValues } from '../types';

export const MediaFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddProductFormValues>();

  return (
    <Section>
      <Heading fontSize="xl"> Media </Heading>

      <FormControl isInvalid={Boolean(errors.image)}>
        <FormLabel mb={1}> Url </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <LinkIcon />
          </InputLeftElement>

          <Input placeholder="Image link" {...register('image')} />
        </InputGroup>
        <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
      </FormControl>
    </Section>
  );
};
