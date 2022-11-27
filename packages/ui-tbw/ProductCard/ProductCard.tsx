import { Box, Text, Image } from '@chakra-ui/react';

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
      <Image
        alt="product"
        src={srcItem}
        sx={{
          height: '140px',
          width: '100%',
        }}
      />

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

  return <a href={externalLink || `#`}> {content} </a>;
};
