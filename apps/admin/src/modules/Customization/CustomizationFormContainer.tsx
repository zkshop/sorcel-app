import { CustomizationForm } from './CustomizationForm';
import { useForm } from 'react-hook-form';
import type { CustomizationFormValues } from '../../pages/Customization';
import { useUpdateCustomizationFieldsMutation } from '@3shop/apollo';

type CustomizationFormContainerProps = {
  appId: string;
  defaultValues: Partial<CustomizationFormValues>;
};

export const CustomizationFormContainer = ({
  appId,
  defaultValues,
}: CustomizationFormContainerProps) => {
  const { handleSubmit, register, control } = useForm<CustomizationFormValues>({
    defaultValues: {
      backgroundColor: defaultValues.backgroundColor,
      fontColor: defaultValues.fontColor,
      font: defaultValues.font,
    },
  });
  const [updateCustomization] = useUpdateCustomizationFieldsMutation();

  const onSubmit = async (data: CustomizationFormValues) => {
    updateCustomization({
      variables: {
        id: appId,
        background_color: data.backgroundColor,
        font_color: data.fontColor,
        font: data.font,
      },
    });
  };

  return (
    <CustomizationForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      control={control}
    />
  );
};
