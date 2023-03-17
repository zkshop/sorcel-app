import * as yup from 'yup';

const ADD_GATE_SCHEMA = yup.object().shape({
  type: yup.mixed().oneOf(['NFT', 'POAP']).required(),
  network: yup.mixed().when('type', {
    is: 'NFT',
    then: yup.mixed().oneOf(['POLYGON', 'ETHEREUM']).required(),
  }),
  contractAddress: yup.string().when('type', {
    is: 'NFT',
    then: yup.string().required(),
  }),
  poapIds: yup.string().when('type', {
    is: 'POAP',
    then: yup
      .string()
      .matches(/^(\d+\s*,\s*)*\d+$/)
      .transform((value, originalValue) => {
        if (originalValue) {
          return originalValue.replace(/\s*,\s*/g, ',');
        }
        return value;
      })
      .required(),
  }),
});

export default ADD_GATE_SCHEMA;
