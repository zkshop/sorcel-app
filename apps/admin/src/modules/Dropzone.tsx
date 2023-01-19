import { Button, Box, Image } from '@chakra-ui/react';

import type { ChangeEvent } from 'react';
import { useDropzone } from 'react-dropzone';

type DropzoneProps = {
  onChange(file: ChangeEvent<HTMLInputElement> | File): void;
  value?: File | string;
};

export const Dropzone = ({ onChange: originalOnChange, value }: DropzoneProps) => {
  function onDrop(files: File[]) {
    originalOnChange(files[0]);
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  console.log({ value });

  return (
    <Box {...getRootProps()}>
      {typeof value === 'string' && (
        <>
          <Image src={value} maxHeight={200} alt="product" />
          <input data-testid="image" {...getInputProps()} />
          <Button>Update file</Button>
        </>
      )}
      {typeof value === 'undefined' && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={200}
          border="solid 1px"
          borderStyle="dashed"
        >
          <input data-testid="image" {...getInputProps()} />
          <p>Drag and drop your file or click on the area</p>
        </Box>
      )}
      {typeof value === 'object' && value.name}
    </Box>
  );
};
