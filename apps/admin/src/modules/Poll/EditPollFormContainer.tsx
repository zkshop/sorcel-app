import { useFieldArray, useForm } from 'react-hook-form';
import type { GetPollByIdQuery } from '@3shop/apollo';
import { useUpdatePollMutation } from '@3shop/apollo';
import { AddPoll } from './AddPoll';
import { ImageStorageClient } from '@3shop/admin-infra';
import { StorageService } from '@3shop/domains';

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

  const [updatePoll, { data: updatePollData }] = useUpdatePollMutation();

  const { append, remove, fields } = useFieldArray({ control, name: 'choices' });

  const addChoice = () => {
    append({ value: '' });
  };

  const deleteChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: EditPollFormValues) => {
    if (!poll) return;
    const choicesIds = poll?.choices.map(({ id }) => id) || [];

    try {
      const image =
        touchedFields.image && typeof data.image !== 'string'
          ? await storage.uploadPicture(data.image, `polls/${poll.app_id}`)
          : poll.image;

      await updatePoll({
        variables: {
          choice_to_delete: touchedFields.choices ? choicesIds : [],
          choice_to_insert: touchedFields.choices
            ? data.choices.map(({ value }) => ({ value, poll_id: poll.id }))
            : [],
          gate: data.gate,
          id: poll.id,
          image,
          title: data.poll,
          description: data.poll,
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      console.log(updatePollData);
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
      loading={false}
      onSubmit={onSubmit}
    />
  );
};
