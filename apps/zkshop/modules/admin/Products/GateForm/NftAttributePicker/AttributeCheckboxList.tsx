import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';
import { NftAttribute } from 'domains';
import { ChangeEvent, useState } from 'react';
import { setAttributeToGate } from 'store/slices/gate';
import { useAppDispatch } from 'store/store';

type AttributeListProps = {
  attribute: NftAttribute<any>;
  index: number;
};

export const AttributeCheckboxList = ({ attribute, index }: AttributeListProps) => {
  const { name, options } = attribute;
  const [pickedAttribute, setPickedAttribute] = useState<string | undefined>();
  const dispatch = useAppDispatch();

  const pushAttribute = (gateIndex: number, attribute: { name: string; value: string }) => {
    dispatch(setAttributeToGate({ attribute, gateIndex }));
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setPickedAttribute(value);
    pushAttribute(index, { name, value });
  }

  return (
    <CheckboxGroup value={pickedAttribute ? [pickedAttribute] : []}>
      {options.map((option) => (
        <HStack key={`attribute-checkbox-list-${option}`}>
          <Checkbox value={option} onChange={handleChange} />
          <p>{option}</p>
        </HStack>
      ))}
    </CheckboxGroup>
  );
};
