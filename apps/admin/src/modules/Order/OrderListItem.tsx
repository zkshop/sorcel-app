import { Td, Tr } from '@3shop/ui';

type OrderListItemProps = {
  id: string;
  address: string;
  firstname: string;
  email: string;
  lastname: string;
  productId: string;
  status: string;
};

export const OrderListItem = ({
  address,
  firstname,
  lastname,
  productId,
  status,
  email,
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
    <Td>{productId}</Td>
  </Tr>
);
