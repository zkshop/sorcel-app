import { useForm, useFieldArray } from 'react-hook-form';
import { FormValidation } from '@3shop/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { PollForm } from '../modules/Poll/PollForm';
import { useCreatePollMutation, useGetAdminAppQuery } from '@3shop/apollo';
import { StorageService } from '@3shop/domains';
import { ImageStorageClient } from '@3shop/admin-infra';
import { useToastMessage } from '@3shop/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../routes/Routes';

export type AddPollFormValues = {
  poll: string;
  image: File | string;
  choices: { value: string }[];
  issuer: string;
  taxon: string;
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
  issuer: FormValidation.string().required('Issuer is required'),
  taxon: FormValidation.string().required('Taxon is required'),
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
      const imageUrl = await storage.uploadPicture(
        data.image as File,
        `polls/${appData.app[0].id}`,
      );
      await createPoll({
        variables: {
          issuer: data.issuer,
          taxon: data.taxon,
          image: imageUrl,
          title: data.poll,
          data: data.choices,
        },
      });

      toast.success('Poll created successfully');
      navigate(ROUTES_PATH.PROTECTED.POLL);
    } catch (e) {
      console.error(e);
      toast.error('An error occurred while creating poll');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PollForm
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
