import { CloseIcon, Image, Td, Text, Tr } from '@3shop/ui';
import type { GateItemType } from './Gates';
import { ROUTES_PATH } from '../../routes/Routes';
import { Link } from 'react-router-dom';

export const GateListItem = ({
  exclusive_access,
  name,
  discount,
  id,
  handleOpenDeleteGateModal,
  productId,
  productImage,
  productName,
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
      <Link to={`${ROUTES_PATH.PROTECTED.PRODUCT}/edit/${productId}`}>
        <Image height={50} width={50} src={productImage} alt="image" />
        <Text>{productName}</Text>
      </Link>
    </Td>
    <Td>
      <CloseIcon onClick={() => handleOpenDeleteGateModal({ id, name })} />
    </Td>
  </Tr>
);
