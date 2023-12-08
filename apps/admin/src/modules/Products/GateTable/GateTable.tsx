import { Table } from '@3shop/ui';
import type { Gate } from '@3shop/apollo';
import { GateTableRow } from './GateTableRow';

type GateTableProps = {
  gates: Gate[];
  handleClickOnCloseIcon(id: string): void;
};

const GATE_TABLE_HEADS = ['Contract address', 'Discount', 'Attributes', ''];

export const GateTable = ({ gates, handleClickOnCloseIcon }: GateTableProps) => (
  <Table
    heads={GATE_TABLE_HEADS}
    data={gates}
    renderRow={(gate) => (
      <GateTableRow
        key={`gate-table-row-${gate.id}`}
        gate={gate}
        handleClickOnCloseIcon={handleClickOnCloseIcon}
      />
    )}
  />
);
