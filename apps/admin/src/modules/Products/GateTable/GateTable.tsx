import { TableContainer, Table, Thead, Tr, Th, Tbody } from 'ui';
import type { Gate } from 'apollo';
import { GateTableRow } from './GateTableRow';

type GateTableProps = {
  gates: Gate[];
  handleClickOnCloseIcon(id: string): void;
};

export const GateTable = ({ gates, handleClickOnCloseIcon }: GateTableProps) => (
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
