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
import { CloseIcon } from '@chakra-ui/icons';

type GateTable = {
  gates: Gate[];
  handleClickOnCloseIcon(id: string): void;
};

export const GateTable = ({ gates, handleClickOnCloseIcon }: GateTable) => (
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
            <Th>
              <CloseIcon onClick={() => handleClickOnCloseIcon(gate.id)} cursor="pointer" />
            </Th>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
