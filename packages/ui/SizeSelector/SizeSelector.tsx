import { Box, HStack, Text } from '@chakra-ui/react';

export const sizesList = [
  {
    id: 1,
    name: 'XS',
    outOfStock: false,
  },
  {
    id: 2,
    name: 'S',
    outOfStock: false,
  },
  {
    id: 3,
    name: 'M',
    outOfStock: true,
  },
  {
    id: 4,
    name: 'L',
    outOfStock: false,
  },
  {
    id: 5,
    name: 'XL',
    outOfStock: false,
  },
  {
    id: 6,
    name: 'XXL',
    outOfStock: false,
  },
];

export const SizeSelector = () => (
  <Box py={6}>
    <Text fontWeight="bold" color="black" bg="#EEEEEF" w="fit-content">
      Size
    </Text>

    <HStack spacing={2} mt={2}>
      {sizesList.map(({ id, name }) => (
        <Box
          key={id}
          role="button"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mW: '48px',
            h: '40px',
            border: id == 3 ? '2px solid black' : '1px solid #dedde0',
          }}
        >
          <Text fontWeight="bold" fontSize="14px" color="black" p={0.5}>
            {name}
          </Text>
        </Box>
      ))}
    </HStack>
  </Box>
);
