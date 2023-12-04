import { Box, CloseIcon, Td, Tr } from '@3shop/ui';
import { PoapPreview } from './PoapPreview';

type Props = {
  index: number;
  value: number;
  isOverlayVisible: boolean;
  deletePoapFromList(index: number): void;
};

export const PoapSelectorTableItem = ({
  index,
  value,
  isOverlayVisible,
  deletePoapFromList,
}: Props) => (
  <Tr>
    <Td>
      <PoapPreview id={value} />
    </Td>
    <Td position="relative">
      {value}
      {isOverlayVisible && (
        <Box
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-125%, -50%)"
          textAlign="center"
          bg="white"
          zIndex="1"
          px="2"
          fontWeight="bold"
        >
          OR
        </Box>
      )}
    </Td>
    <Td>
      <CloseIcon cursor="pointer" float="right" onClick={() => deletePoapFromList(index)} />
    </Td>
  </Tr>
);
