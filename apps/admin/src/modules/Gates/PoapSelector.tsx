import { Box, Button, FormLabel, HStack, Input, Table, TableContainer } from '@3shop/ui';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { PoapSelectorTableItem } from './PoapSelectorTableItem';

type PoapSelectorProps = {
  control: any;
};

export const PoapSelector = ({ control }: PoapSelectorProps) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'poapIds' });
  const [input, setInput] = useState<string>('');

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function appendPoap() {
    append({ value: Number(input) });
    setInput('');
  }

  return (
    <>
      <HStack>
        <Box>
          <FormLabel>POAP ID</FormLabel>
          <Input value={input} onChange={handleChangeInput} />
        </Box>
        <Button alignSelf="flex-end" size="md" onClick={appendPoap}>
          Add Poap
        </Button>
      </HStack>

      <TableContainer my={2}>
        <Table
          data={fields}
          renderRow={(field) => (
            <PoapSelectorTableItem
              index={field.index}
              /* @ts-ignore */
              value={field.value}
              deletePoapFromList={remove}
            />
          )}
        />
      </TableContainer>
    </>
  );
};
