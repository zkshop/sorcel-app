import { Image, Td, Tr } from '@3shop/ui';
import { Link } from 'react-router-dom';

type OrderListItemProps = {
  id: string;
  address: string;
  firstname: string;
  email: string;
  lastname: string;
  productImage: string;
  status: string;
  productId: string;
};

export const OrderListItem = ({
  address,
  firstname,
  lastname,
  status,
  email,
  productImage,
  productId,
}: OrderListItemProps) => (
  <Tr
    sx={{
      _hover: {
        backgroundColor: '#0077ff1e',
        cursor: 'pointer',
      },
    }}
  >
    <Td>{`${firstname} ${lastname}`}</Td>
    <Td>{email}</Td>
    <Td>{address}</Td>
    <Td>{status}</Td>
    <Td>
      <Link to={`/app/product/edit/${productId}`}>
        <Image height={50} src={productImage} alt="image" />
      </Link>
    </Td>
  </Tr>
);
