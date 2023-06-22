import { Table as ChakraTable, TableContainer, Th, Thead, Tbody, Tr } from '@chakra-ui/react';

export type WithIndex<T> = T & { index: number };

type TableProps<Item> = {
  heads?: string[];
  data: Item[];
  renderRow(item: WithIndex<Item>): React.ReactNode;
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
        <Tr>
          {heads.map((title, index) => (
            <Th key={`order-list-th-${index}`}>{title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{data.map((item, index) => renderRow({ ...item, index }))}</Tbody>
    </ChakraTable>
  </TableContainer>
);
