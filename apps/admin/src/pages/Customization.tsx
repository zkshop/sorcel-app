import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Header,
  Heading,
  Input,
  SearchSelect,
  Section,
  Text,
} from '@3shop/ui';
import fonts from '../assets/fonts.json';
import { Controller, useForm } from 'react-hook-form';

export type CustomizationFormValues = {
  backgroundColor: string;
  textColor: string;
  font: string;
};

const CUSTOMIZATION_FIELDS = {
  backgroundColor: { value: 'backgroundColor', label: 'Background color', placeholder: '#FFFFFF' },
  textColor: { value: 'textColor', label: 'Text color', placeholder: '#000000' },
  font: { value: 'font', label: 'Font' },
} as const;

export const Customization = () => {
  const { handleSubmit, register, control } = useForm<CustomizationFormValues>();

  const onSubmit = (data: CustomizationFormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Header title="Customization">
          <Button type="submit">Save</Button>
        </Header>

        <Section>
          <Heading fontSize="xl">
            <Text>General Information</Text>
          </Heading>

          {/* Background color */}
          <FormControl>
            <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.backgroundColor.label}</FormLabel>

            <Input
              placeholder={CUSTOMIZATION_FIELDS.backgroundColor.placeholder}
              {...register(CUSTOMIZATION_FIELDS.backgroundColor.value)}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          {/* Text color */}
          <FormControl>
            <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.textColor.label}</FormLabel>

            <Input
              placeholder={CUSTOMIZATION_FIELDS.textColor.placeholder}
              {...register(CUSTOMIZATION_FIELDS.textColor.value)}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          {/* Font */}

          <FormControl>
            <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.font.label}</FormLabel>

            <Controller
              name={CUSTOMIZATION_FIELDS.font.value}
              control={control}
              render={({ field }) => (
                <SearchSelect
                  useBasicStyles
                  value={fonts.find((c) => c.value === field.value)}
                  onChange={(val) => field.onChange(val?.value)}
                  options={fonts}
                />
              )}
            />

            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Section>
      </Box>
    </form>
  );
};
