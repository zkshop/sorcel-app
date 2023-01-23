import { Box } from '@chakra-ui/react';

type NftBadgeProps = {
  title: string;
};

export const NftBadge = ({ title }: NftBadgeProps) => (
  <Box
    sx={{
      zIndex: 2,
      position: 'absolute',
      top: -2,
      right: -1,
      bgGradient: 'linear(to-r, #0987A0, #805AD5)',
      borderRadius: '0px 12px',
      p: 1,
      boxShadow: 'rgba(0, 0, 0, 0.8) 0px 5px 15px',
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      padding: '6px 12px 4px',
    }}
    _after={{
      content: "''",
      position: 'absolute',
      w: 0,
      h: 0,
      borderStyle: 'solid',
      right: '-4px',
      bottom: '-4px',
      borderWidth: '0px 4px 4px 4px',
      borderColor: 'rgb(128, 90, 213) transparent transparent rgb(128, 90, 213)',
    }}
  >
    {title}
  </Box>
);
