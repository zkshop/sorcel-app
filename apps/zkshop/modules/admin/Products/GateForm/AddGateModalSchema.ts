import { REQUIRED } from 'libs/messages/validation';
import * as yup from 'yup';
export const ADD_GATE_MODAL_SCHEMA = yup.object().shape({
  contractAddress: yup.string().required(REQUIRED),
  discount: yup
    .number()
    .min(0, 'Should be equal or greater than 0')
    .max(100, 'Should be equal or lesser than 100')
    .required(REQUIRED),
});
