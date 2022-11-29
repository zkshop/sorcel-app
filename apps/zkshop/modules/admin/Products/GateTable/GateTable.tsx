import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Gate } from 'apollo';

type GateTable = {
  gates: Gate[];
};

export const GateTable = ({ gates }: GateTable) => (
  <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th>Contract address</Th>
          <Th>Discount</Th>
          <Th>Attributes</Th>
        </Tr>
      </Thead>
      <Tbody>
        {gates.map((gate) => (
          <Tr>
            <Th>{gate.contractAddress}</Th>
            <Th>{gate.discount}</Th>
            <Th>
              <UnorderedList>
                {gate.attributes?.map((attribute: { name: string; value: string }) => (
                  <ListItem>
                    {attribute.name}: {attribute.value}
                  </ListItem>
                ))}
              </UnorderedList>
            </Th>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
