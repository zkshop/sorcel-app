import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from '@chakra-ui/react';
import { NftAttribute } from 'domains';
import { NftAttributePicker } from './NftAttributePicker';

type GateFieldsProps = {
  nftAttributes: NftAttribute<any>[] | null;
};

export const GateFields = ({ nftAttributes }: GateFieldsProps) => {
  if (!nftAttributes) return null;

  return (
    <>
      <FormControl>
        <FormLabel>Discount</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            %
          </InputLeftElement>

          <Input placeholder="Discount for holders" />
        </InputGroup>
      </FormControl>

      <NftAttributePicker attributes={nftAttributes} />
    </>
  );
};
