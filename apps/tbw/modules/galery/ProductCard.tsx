import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  priceReduced?: number;
  description?: any;
};

export const ProductCard = ({ id, srcItem, title, description }: ProductCardProps) => (
  <Box
    as={Link}
    href={`product/${id}`}
    sx={{
      width: '100%',
      border: '1px solid #000000',
      borderRadius: '6px',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        height: '140px',
        position: 'relative',
      }}
    >
      <Image alt="product" src={srcItem} fill />
    </Box>

    <Box
      sx={{
        height: '140px',
        p: '8px',
      }}
    >
      <Text
        sx={{
          fontFamily: 'Avenir',
          fontWeight: '800',
          fontSize: '20px',
          lineHeight: '27px',
          color: '#000000',
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Text>

      <Text
        sx={{
          fontFamily: 'Avenir',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '17px',
          color: '#000000',
          marginTop: '8px',
          textTransform: 'capitalize',
        }}
      >
        {description}
      </Text>
    </Box>
  </Box>
);
