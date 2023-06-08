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
  Spinner,
  Text,
} from '@3shop/ui';
import fonts from '../assets/fonts.json';
import { Controller, useForm } from 'react-hook-form';
import { useGetAdminAppQuery, useUpdateCustomizationFieldsMutation } from '@3shop/apollo';

export type CustomizationFormValues = {
  backgroundColor: string;
  fontColor: string;
  font: string;
};

const CUSTOMIZATION_FIELDS = {
  backgroundColor: { value: 'backgroundColor', label: 'Background color', placeholder: '#FFFFFF' },
  fontColor: { value: 'fontColor', label: 'Text color', placeholder: '#000000' },
  font: { value: 'font', label: 'Font' },
} as const;

export const Customization = () => {
  const { data: appData, loading: appDataLoading } = useGetAdminAppQuery();
  const { handleSubmit, register, control } = useForm<CustomizationFormValues>({
    defaultValues: {
      backgroundColor: appData?.app[0].background_color || '',
      fontColor: appData?.app[0].font_color || '',
      font: appData?.app[0].font || '',
    },
  });
  const [updateCustomization] = useUpdateCustomizationFieldsMutation();

  if (appDataLoading) return <Spinner />;

  if (!appData) return <>Error</>;

  const onSubmit = async (data: CustomizationFormValues) => {
    updateCustomization({
      variables: {
        id: appData.app[0].id,
        background_color: data.backgroundColor,
        font_color: data.fontColor,
        font: data.font,
      },
    });
  };

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
};
