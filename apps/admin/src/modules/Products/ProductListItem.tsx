import { Tr, Td, Image } from '@3shop/ui';

type ProductListItemProps = {
  id: string;
  image: string;
  name: string;
  price: number;

  goToProduct(): void;
};

export const ProductListItem = ({
  image,
  name,
  price,

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
  </Tr>
);
