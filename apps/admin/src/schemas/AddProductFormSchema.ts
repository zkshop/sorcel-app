import { REQUIRED } from '@3shop/messages';
import { FormValidation } from '@3shop/validation';

export const ADD_PRODUCT_FORM_SCHEMA = FormValidation.object().shape({
  name: FormValidation.string().required(REQUIRED),
  description: FormValidation.string().required(REQUIRED),
  price: FormValidation.string().required(REQUIRED),
  discount: FormValidation.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .test('Under100', "Can't exceed 100", (value) => Number(value) <= 100)
    .nullable()
    .transform((value: string, originalValue: string) =>
      originalValue.trim() === '' ? null : value,
    ),
  isDiscountGated: FormValidation.boolean(),

  image: FormValidation.mixed().required(REQUIRED),

  collection: FormValidation.string(),
  curation: FormValidation.string(),
  poapId: FormValidation.string(),
});
