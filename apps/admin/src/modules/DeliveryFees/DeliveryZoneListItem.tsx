import { CloseIcon, Td, Tr } from '@3shop/ui';
import countryList from './countryList.json';

type DeliveryZoneListItemProps = {
  name: string;
  fees: number;
  countries: string[];
  id: string;
  onOpenDeleteDeliveryZoneModal(id: string): void;
};

export const DeliveryZoneListItem = ({
  countries,
  name,
  fees,
  id,
  onOpenDeleteDeliveryZoneModal,
}: DeliveryZoneListItemProps) => {
  const countryNames = countries.map(
    (country) => countryList.find((c) => c.code === country)?.name,
  );

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{fees} Euros</Td>

      <Td>{countryNames.join(', ')}</Td>
      <Td>
        <CloseIcon onClick={() => onOpenDeleteDeliveryZoneModal(id)} />
      </Td>
    </Tr>
  );
};
