import { REQUIRED } from '@3shop/messages';
import { FormValidation } from '@3shop/validation';

export const ADD_PRODUCT_FORM_SCHEMA = FormValidation.object().shape({
  name: FormValidation.string().required(REQUIRED),
  description: FormValidation.string().required(REQUIRED),
  price: FormValidation.string().required(REQUIRED),
  image: FormValidation.mixed().required(REQUIRED),
});
