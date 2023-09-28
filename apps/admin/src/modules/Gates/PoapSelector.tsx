import { Box, Button, CloseIcon, FormLabel, HStack, Input, Text } from '@3shop/ui';
import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';

type PoapSelectorProps = {
  control: any;
};

export const PoapSelector = ({ control }: PoapSelectorProps) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'poapIds' });
  const [input, setInput] = useState<string>('');

  return (
    <>
      <HStack>
        <Box>
          <FormLabel>POAP ID</FormLabel>
          <Input onChange={(e) => setInput(e.target.value)} />
        </Box>
        <Button alignSelf="flex-end" size="md" onClick={() => append({ value: Number(input) })}>
          Add Poap
        </Button>
      </HStack>
      {fields.map((field, index) => (
        <HStack key={`poap-id-${index}`}>
          {/* @ts-ignore */}
          <Text>{field.value}</Text>
          <CloseIcon onClick={() => remove(index)} />
        </HStack>
      ))}
    </>
  );
};
