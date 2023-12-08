import { Tr, Th, UnorderedList, ListItem, CloseIcon } from '@3shop/ui';
import type { Gate } from '@3shop/apollo';

type GateTableRowProps = {
  gate: Gate;
  handleClickOnCloseIcon(id: string): void;
};

export const GateTableRow = ({ gate, handleClickOnCloseIcon }: GateTableRowProps) => (
  <Tr>
    <Th>{gate.contractAddress}</Th>
    <Th>{gate.discount}</Th>
    <Th>
      <UnorderedList>
        {gate.attributes?.map((attribute: { name: string; value: string }) => (
          <ListItem key={`gate-table-row-${gate.id}-list-item-${attribute.name}`}>
            {attribute.name}: {attribute.value}
          </ListItem>
        ))}
      </UnorderedList>
    </Th>
    <Th>
      <CloseIcon onClick={() => handleClickOnCloseIcon(gate.id)} cursor="pointer" />
    </Th>
  </Tr>
);
