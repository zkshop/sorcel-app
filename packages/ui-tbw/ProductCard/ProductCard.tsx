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
  externalLink?: string;
  highlight?: boolean;
};

export const ProductCard = ({
  id,
  srcItem,
  title,
  description,
  externalLink,
  highlight = false,
}: ProductCardProps) => {
  const bgColor = highlight ? '#101238' : 'white';
  const textColor = highlight ? 'white' : 'black';
  const content = (
    <Box
      sx={{
        width: '100%',
        border: '1px solid #000000',
        borderRadius: '6px',
        overflow: 'hidden',
        bg: bgColor,
        boxShadow: highlight && '4px 6px 9px #14FFD5',
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
            textTransform: 'capitalize',
            color: textColor,
            fontWeight: '800',
            fontSize: '20px',
            lineHeight: '27px',
          }}
        >
          {title}
        </Text>

        <Text
          sx={{
            fontFamily: 'Avenir',
            textTransform: 'capitalize',
            color: textColor,
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '17px',
            marginTop: '8px',
          }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );

  if (externalLink) {
    return <a href={externalLink}> {content} </a>;
  }

  return <Link href={`/product/${id}`}> {content} </Link>;
};
