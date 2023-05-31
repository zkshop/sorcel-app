import { useForm, useFieldArray } from 'react-hook-form';
import { FormValidation } from '@3shop/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddPoll } from '../modules/Poll/AddPoll';

export type AddPollFormValues = {
  poll: string;
  image: File;
  choices: { value: string }[];
};

const ADD_POLL_SCHEMA = FormValidation.object().shape({
  poll: FormValidation.string().required('Poll question is required'),
  image: FormValidation.mixed().required('Image is required'),
  choices: FormValidation.array()
    .of(
      FormValidation.object({
        value: FormValidation.string().required('Choice is required'),
      }),
    )
    .min(2, 'At least 2 choices are required'),
});

export const AddPollContainer = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<AddPollFormValues>({
    resolver: yupResolver(ADD_POLL_SCHEMA),
  });

  const { append, remove, fields } = useFieldArray({ control, name: 'choices' });

  const addChoice = () => {
    append({ value: '' });
  };

  const deleteChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: AddPollFormValues) => {
    console.log(data);
  };

  return (
    <AddPoll
      control={control}
      errors={errors}
      fields={fields}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      addChoice={addChoice}
      deleteChoice={deleteChoice}
    />
  );
};
