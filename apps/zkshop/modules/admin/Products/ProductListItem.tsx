import { Box, Tr, Td } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type ProductListItemProps = {
  id: string;
  image: string;
  name: string;
  price: string;
  discount: string;
  collection: string;
  collectionAddress: string;
};

export const ProductListItem = ({
  id,
  image,
  name,
  price,
  discount,
  collection,
  collectionAddress,
}: ProductListItemProps) => (
  <Link href={`/admin/product/edit/${id}`} legacyBehavior>
    <Tr
      sx={{
        _hover: {
          backgroundColor: '#0077ff1e',
          cursor: 'pointer',
        },
      }}
    >
      <Td>
        <Box>
          <Image src={image} alt={name} width={50} height={50} />
        </Box>
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
  </Link>
);
