import type { Control, FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
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
  Switch,
} from '@3shop/ui';
import { CUSTOMIZATION_FIELDS } from './constants';

type CustomizationFormProps = {
  handleSubmit: UseFormHandleSubmit<CustomizationFormValues>;
  register: UseFormRegister<CustomizationFormValues>;
  control: Control<CustomizationFormValues>;
  onSubmit: (data: CustomizationFormValues) => void;
  errors: FieldErrors<CustomizationFormValues>;
  loading?: boolean;
};

export const CustomizationForm = ({
  handleSubmit,
  onSubmit,
  register,
  control,
  loading,
  errors,
}: CustomizationFormProps) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Box>
      <Header title="Customization">
        <Button isLoading={loading} type="submit">
          Save
        </Button>
      </Header>

      <Section>
        <Heading fontSize="xl">
          <Text>General Information</Text>
        </Heading>

        {/* Background color */}
        <FormControl isInvalid={Boolean(errors[CUSTOMIZATION_FIELDS.backgroundColor.value])}>
          <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.backgroundColor.label}</FormLabel>

          <Input
            placeholder={CUSTOMIZATION_FIELDS.backgroundColor.placeholder}
            {...register(CUSTOMIZATION_FIELDS.backgroundColor.value)}
          />
          <FormErrorMessage>
            {errors[CUSTOMIZATION_FIELDS.backgroundColor.value]?.message}
          </FormErrorMessage>
        </FormControl>

        {/* Text color */}
        <FormControl isInvalid={Boolean(errors[CUSTOMIZATION_FIELDS.fontColor.value])}>
          <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.fontColor.label}</FormLabel>

          <Input
            placeholder={CUSTOMIZATION_FIELDS.fontColor.placeholder}
            {...register(CUSTOMIZATION_FIELDS.fontColor.value)}
          />
          <FormErrorMessage>
            {errors[CUSTOMIZATION_FIELDS.fontColor.value]?.message}
          </FormErrorMessage>
        </FormControl>

        {/* Font */}

        <FormControl isInvalid={Boolean(errors[CUSTOMIZATION_FIELDS.font.value])}>
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

          <FormErrorMessage>{errors[CUSTOMIZATION_FIELDS.font.value]?.message}</FormErrorMessage>
        </FormControl>

        {/* Show Brand */}
        <FormControl>
          <FormLabel mb={1}>{CUSTOMIZATION_FIELDS.showBrand.label}</FormLabel>

          <Switch {...register(CUSTOMIZATION_FIELDS.showBrand.value)} />
        </FormControl>
      </Section>
    </Box>
  </form>
);
