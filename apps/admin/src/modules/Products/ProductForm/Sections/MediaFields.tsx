import { Heading, FormControl, FormLabel, FormErrorMessage, Section } from '@3shop/ui';
import { useFormContext, Controller } from 'react-hook-form';
import type { AddProductFormValues } from '../types';

import { Dropzone } from '../../../Dropzone';

export const MediaFields = () => {
  const {
    formState: { errors },
    control,
  } = useFormContext<AddProductFormValues>();

  return (
    <Section>
      <Heading fontSize="xl"> Media </Heading>

      <FormControl isInvalid={Boolean(errors.image)}>
        <FormLabel htmlFor="image" mb={1}>
          Image
        </FormLabel>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropzone value={value} onChange={onChange} />
          )}
        />

        <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
      </FormControl>
    </Section>
  );
};
