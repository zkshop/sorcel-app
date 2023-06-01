import { useForm, useFieldArray } from 'react-hook-form';
import { FormValidation } from '@3shop/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddPoll } from '../modules/Poll/AddPoll';
import { useCreatePollMutation, useGetAdminAppQuery } from '@3shop/apollo';
import { StorageService } from '@3shop/domains';
import { ImageStorageClient } from '@3shop/admin-infra';
import { useToastMessage } from '@3shop/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type AddPollFormValues = {
  poll: string;
  image: File;
  choices: { value: string }[];
  gate: string;
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

const storage = StorageService(ImageStorageClient());

export const AddPollContainer = () => {
  const [loading, setLoading] = useState(false);
  const { data: appData } = useGetAdminAppQuery();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<AddPollFormValues>({
    resolver: yupResolver(ADD_POLL_SCHEMA),
  });
  const navigate = useNavigate();

  const toast = useToastMessage();

  const [createPoll] = useCreatePollMutation();

  const { append, remove, fields } = useFieldArray({ control, name: 'choices' });

  const addChoice = () => {
    append({ value: '' });
  };

  const deleteChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: AddPollFormValues) => {
    if (!appData) return;
    setLoading(true);

    try {
      const imageUrl = await storage.uploadPicture(data.image, `polls/${appData.app[0].id}`);
      await createPoll({
        variables: {
          gate: data.gate,
          image: imageUrl,
          title: data.poll,
          data: data.choices,
        },
      });

      toast.success('Poll created successfully');
      navigate('/app');
    } catch (e) {
      console.error(e);
      toast.error('An error occurred while creating poll');
    } finally {
      setLoading(false);
    }
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
      loading={loading}
    />
  );
};
