import { Checkbox, CheckboxGroup, HStack } from '@3shop/ui';
import type { NftAttribute } from '@3shop/domains';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useAppDispatch, setAttributeToGate } from '@3shop/admin-store';

type AttributeListProps = {
  attribute: NftAttribute<any>;
};

export const AttributeCheckboxList = ({ attribute }: AttributeListProps) => {
  const { name, options } = attribute;
  const [pickedAttribute, setPickedAttribute] = useState<string | undefined>();
  const dispatch = useAppDispatch();

  const pushAttribute = (attribute: { name: string; value: string }) => {
    dispatch(setAttributeToGate({ attribute }));
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setPickedAttribute(value);
    pushAttribute({ name, value });
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
