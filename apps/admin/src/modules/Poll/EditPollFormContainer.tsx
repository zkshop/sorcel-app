import { useFieldArray, useForm } from 'react-hook-form';
import type { GetPollByIdQuery } from '@3shop/apollo';
import { useUpdatePollMutation } from '@3shop/apollo';
import { AddPoll } from './AddPoll';
import { ImageStorageClient } from '@3shop/admin-infra';
import { StorageService } from '@3shop/domains';
import { useState } from 'react';
import { useToastMessage } from '@3shop/ui';

type EditPollFormContainerProps = {
  poll: GetPollByIdQuery['poll'];
};

export type EditPollFormValues = {
  poll: string;
  image: File | string;
  choices: { value: string }[];
  gate: string;
};

const storage = StorageService(ImageStorageClient());

export const EditPollFormContainer = ({ poll }: EditPollFormContainerProps) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm<EditPollFormValues>({
    defaultValues: {
      gate: poll?.gate || '',
      image: poll?.image || '',
      choices: poll?.choices.map(({ value }) => ({ value })) || [],
      poll: poll?.title,
    },
  });

  const toast = useToastMessage();

  const [updatePoll] = useUpdatePollMutation();

  const { append, remove, fields } = useFieldArray({ control, name: 'choices' });

  const addChoice = () => {
    append({ value: '' });
  };

  const deleteChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: EditPollFormValues) => {
    if (!poll) return;
    setLoading(true);
    const choicesIdsToDelete = touchedFields.choices ? poll.choices.map(({ id }) => id) : [];
    const choices_to_insert = touchedFields.choices
      ? data.choices.map(({ value }) => ({ value, poll_id: poll.id }))
      : [];

    try {
      const image =
        touchedFields.image && typeof data.image !== 'string'
          ? await storage.uploadPicture(data.image, `polls/${poll.app_id}`)
          : poll.image;

      await updatePoll({
        variables: {
          choice_to_delete: choicesIdsToDelete,
          choice_to_insert: choices_to_insert,
          gate: data.gate,
          id: poll.id,
          image,
          title: data.poll,
          description: data.poll,
        },
      });

      toast.success(`Poll ${data.poll} updated successfully`);
    } catch (e) {
      toast.error('An error occurred while updating poll');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddPoll
      addChoice={addChoice}
      deleteChoice={deleteChoice}
      handleSubmit={handleSubmit}
      register={register}
      control={control}
      fields={fields}
      errors={errors}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
};
