import countries from './countryList.json';
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Button, Checkbox, CheckboxGroup, HStack, Input, Text } from '@3shop/ui';
import type { NewDeliveryZoneFormValues } from './DeliveryFeesContainer';

type CountrySelectFieldProps = {
  register: UseFormRegister<NewDeliveryZoneFormValues>;
  setFieldValue: UseFormSetValue<NewDeliveryZoneFormValues>;
};

export const CountrySelectField = ({ setFieldValue }: CountrySelectFieldProps) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [searchPattern, setSearchPattern] = useState<string>('');

  useEffect(() => {
    setFieldValue('countries', selectedCountries);
  }, [selectedCountries, setFieldValue]);

  const append = (country: string) => {
    setSelectedCountries((prev) => [...prev, country]);
  };

  const remove = (country: string) => {
    setSelectedCountries((prev) => prev.filter((c) => c !== country));
  };

  const reset = () => {
    setSelectedCountries([]);
  };

  const handleClickOnCountry = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    selectedCountries.includes(value) ? remove(value) : append(value);
  };

  const handleChangeSearchPattern = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPattern(event.target.value);
  };

  return (
    <>
      <Input placeholder="Search country..." onChange={handleChangeSearchPattern} />
      <CheckboxGroup value={selectedCountries}>
        {(searchPattern
          ? countries.filter((c) =>
              c.name.toLocaleLowerCase().match(`^${searchPattern.toLocaleLowerCase()}`),
            )
          : countries
        )
          .slice(0, 10)
          .map((country) => (
            <HStack>
              <Checkbox value={country.code} onChange={handleClickOnCountry} />
              <p>{country.name}</p>
            </HStack>
          ))}

        <Text fontWeight="bold" mt={2}>
          {selectedCountries.map((code) => countries.find((c) => c.code === code)?.name).join(', ')}
        </Text>
        <Button mt={1} onClick={reset}>
          Reset countries
        </Button>
      </CheckboxGroup>
    </>
  );
};
