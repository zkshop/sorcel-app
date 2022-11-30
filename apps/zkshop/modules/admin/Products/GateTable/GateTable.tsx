import { TableContainer, Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import { Gate } from 'apollo';
import { GateTableRow } from './GateTableRow';

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
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {gates.map((gate) => (
          <GateTableRow
            key={`gate-table-row-${gate.id}`}
            gate={gate}
            handleClickOnCloseIcon={handleClickOnCloseIcon}
          />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
