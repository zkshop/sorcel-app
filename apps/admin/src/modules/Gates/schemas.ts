import { FormValidation } from '@3shop/validation';

const ADD_GATE_SCHEMA = FormValidation.object().shape({
  type: FormValidation.mixed().oneOf(['NFT', 'POAP']).required(),
  network: FormValidation.mixed().when('type', {
    is: 'NFT',
    then: FormValidation.mixed().oneOf(['POLYGON', 'ETHEREUM', 'XRPLEDGER']).required(),
  }),
  contractAddress: FormValidation.string().when('type', {
    is: 'NFT',
    then: FormValidation.string().when('network', {
      is: 'XRPLEDGER',
      then: FormValidation.string().notRequired(),
      otherwise: FormValidation.string().required(),
    }),
  }),
  poapIds: FormValidation.array()
    .of(
      FormValidation.object({
        value: FormValidation.string()
          .required('POAP ID is required')
          .matches(
            /^(?:\d+|https:\/\/poap\.gallery\/event\/\d+)$/,
            'Must be a sequence of digits or a URL in the format https://poap.gallery/event/{id}',
          ),
      }),
    )
    .when('type', {
      is: 'POAP',
      then: FormValidation.array().min(1, 'At least 1 POAP ID is required'),
    }),
});

export default ADD_GATE_SCHEMA;
