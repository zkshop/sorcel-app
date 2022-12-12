import { Tr, Td, Image } from 'ui';

type ProductListItemProps = {
  id: string;
  image: string;
  name: string;
  price: string;
  discount: string;
  collection: string;
  collectionAddress: string;
  goToProduct(): void;
};

export const ProductListItem = ({
  image,
  name,
  price,
  discount,
  collection,
  collectionAddress,
  goToProduct,
}: ProductListItemProps) => (
  <Tr
    sx={{
      _hover: {
        backgroundColor: '#0077ff1e',
        cursor: 'pointer',
      },
    }}
    onClick={goToProduct}
  >
    <Td>
      <Image src={image} alt={name} width={50} height={50} />
    </Td>
    <Td>{name}</Td>
    <Td>{price}</Td>
    <Td>{discount}</Td>
    <Td>
      {collectionAddress?.slice(0, 3)}...
      {collectionAddress?.slice(-3)}
    </Td>
    <Td>{collection}</Td>
  </Tr>
);
