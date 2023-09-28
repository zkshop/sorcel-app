import { CloseIcon, Td, Tr } from '@3shop/ui';
import { PoapPreview } from './PoapPreview';

type Props = {
  index: number;
  value: number;
  deletePoapFromList(index: number): void;
};

export const PoapSelectorTableItem = ({ index, value, deletePoapFromList }: Props) => (
  <Tr>
    <Td>
      <PoapPreview id={value} />
    </Td>
    <Td>{value}</Td>
    <Td>
      <CloseIcon cursor="pointer" float="right" onClick={() => deletePoapFromList(index)} />
    </Td>
  </Tr>
);
