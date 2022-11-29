import { Checkbox, CheckboxGroup, HStack } from '@chakra-ui/react';
import { NftAttribute } from 'domains';
import { ChangeEvent, useState } from 'react';
import { setAttributeToGate } from 'store/slices/gate';
import { useAppDispatch } from 'store/store';

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
