import { CloseIcon, Td, Tr } from '@3shop/ui';
import type { GateItemType } from './Gates';

export const GateListItem = ({
  exclusive_access,
  name,
  discount,
  id,
  handleOpenDeleteGateModal,
}: GateItemType) => (
  <Tr
    sx={{
      _hover: {
        backgroundColor: '#0077ff1e',
        cursor: 'pointer',
      },
    }}
  >
    <Td>{name}</Td>
    <Td>{exclusive_access ? 'Exclusive Access' : `Discount ${discount}%`}</Td>
    <Td>
      <CloseIcon onClick={() => handleOpenDeleteGateModal({ id, name })} />
    </Td>
  </Tr>
);
