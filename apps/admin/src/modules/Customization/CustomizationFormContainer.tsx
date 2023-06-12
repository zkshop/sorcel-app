import { CustomizationForm } from './CustomizationForm';
import { useForm } from 'react-hook-form';
import type { CustomizationFormValues } from '../../pages/Customization';
import { useUpdateCustomizationFieldsMutation } from '@3shop/apollo';
import { useToastMessage } from '@3shop/ui';
import { FormValidation } from '@3shop/validation';
import { yupResolver } from '@hookform/resolvers/yup';

type CustomizationFormContainerProps = {
  appId: string;
  defaultValues: Partial<CustomizationFormValues>;
};

const CUSTOMIZATION_FIELDS = FormValidation.object({
  backgroundColor: FormValidation.string().color(),
  fontColor: FormValidation.string().color(),
  font: FormValidation.string().required(),
});

export const CustomizationFormContainer = ({
  appId,
  defaultValues,
}: CustomizationFormContainerProps) => {
  const toast = useToastMessage();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<CustomizationFormValues>({
    mode: 'onBlur',
    defaultValues: {
      backgroundColor: defaultValues.backgroundColor,
      fontColor: defaultValues.fontColor,
      font: defaultValues.font,
      showBrand: defaultValues.showBrand,
    },
    resolver: yupResolver(CUSTOMIZATION_FIELDS),
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
          show_brand: data.showBrand,
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
      errors={errors}
    />
  );
};
