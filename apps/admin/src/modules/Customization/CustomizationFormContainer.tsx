import { CustomizationForm } from './CustomizationForm';
import { useForm } from 'react-hook-form';
import type { CustomizationFormValues } from '../../pages/Customization';
import { useUpdateCustomizationFieldsMutation } from '@3shop/apollo';
import { useState } from 'react';
import { useToastMessage } from '@3shop/ui';

type CustomizationFormContainerProps = {
  appId: string;
  defaultValues: Partial<CustomizationFormValues>;
};

export const CustomizationFormContainer = ({
  appId,
  defaultValues,
}: CustomizationFormContainerProps) => {
  const toast = useToastMessage();

  const { handleSubmit, register, control } = useForm<CustomizationFormValues>({
    defaultValues: {
      backgroundColor: defaultValues.backgroundColor,
      fontColor: defaultValues.fontColor,
      font: defaultValues.font,
    },
  });

  const [updateCustomization, { loading }] = useUpdateCustomizationFieldsMutation();

  const onSubmit = async (data: CustomizationFormValues) => {
    try {
      await updateCustomization({
        variables: {
          id: appId,
          background_color: data.backgroundColor,
          font_color: data.fontColor,
          font: data.font,
        },
      });

      toast.success('Customization fields updated');
    } catch {
      toast.error('An error occured while updating the customization fields');
    }
  };

  return (
    <CustomizationForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      control={control}
      loading={loading}
    />
  );
};
