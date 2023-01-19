import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Section,
  Box,
  Image,
  Button,
} from '@3shop/ui';
import { useFormContext, Controller } from 'react-hook-form';
import type { AddProductFormValues } from '../types';
import { useDropzone } from 'react-dropzone';
import type { ChangeEvent } from 'react';

type DropzoneProps = {
  onChange(file: ChangeEvent<HTMLInputElement> | File): void;
  value?: File | string;
};

const Dropzone = ({ onChange: originalOnChange, value }: DropzoneProps) => {
  function onDrop(files: File[]) {
    originalOnChange(files[0]);
  }

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop });
  console.log({ acceptedFiles });

  return (
    <Box {...getRootProps()}>
      {typeof value === 'string' && (
        <>
          <Image src={value} maxHeight={200} alt="product" />
          <input {...getInputProps()} />
          <Button>Update file</Button>
        </>
      )}
      {typeof value === 'object' && value.name}
      {typeof value === 'undefined' && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={200}
          border="solid 1px"
          borderStyle="dashed"
        >
          <input {...getInputProps()} />
          <p>Drag and drop your file or click on the area</p>
        </Box>
      )}
    </Box>
  );
};
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
