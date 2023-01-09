import { Table as ChakraTable, TableContainer, Th, Thead, Tbody } from '@chakra-ui/react';

type TableProps<Item> = {
  heads?: string[];
  data: Item[];
  renderRow(item: Item): React.ReactNode;
};

export const Table = <Item extends object>({ heads = [], data, renderRow }: TableProps<Item>) => (
  <TableContainer
    bg="white"
    borderRadius="lg"
    p={8}
    borderWidth="1px"
    borderStyle="solid"
    borderColor="lightgrey"
  >
    <ChakraTable>
      <Thead>
        {heads.map((title, index) => (
          <Th key={`order-list-th-${index}`}>{title}</Th>
        ))}
      </Thead>
      <Tbody>{data.map((item) => renderRow(item))}</Tbody>
    </ChakraTable>
  </TableContainer>
);
