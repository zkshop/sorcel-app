import type { Control, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { CustomizationFormValues } from '../../pages/Customization';
import fonts from '../../assets/fonts.json';
import {
  Box,
  Header,
  Button,
  Section,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  SearchSelect,
  Text,
} from '@3shop/ui';
import { CUSTOMIZATION_FIELDS } from './constants';

type CustomizationFormProps = {
  handleSubmit: UseFormHandleSubmit<CustomizationFormValues>;
  register: UseFormRegister<CustomizationFormValues>;
  control: Control<CustomizationFormValues>;
  onSubmit: (data: CustomizationFormValues) => void;
};

export const CustomizationForm = ({
  handleSubmit,
  onSubmit,
  register,
  control,
}: CustomizationFormProps) => (
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
          <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.fontColor.label}</FormLabel>

          <Input
            placeholder={CUSTOMIZATION_FIELDS.fontColor.placeholder}
            {...register(CUSTOMIZATION_FIELDS.fontColor.value)}
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
