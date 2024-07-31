import { useFieldArray, useForm } from 'react-hook-form';
import type { GetPollByIdQuery } from '@3shop/apollo';
import { useDeletePollMutation, useUpdatePollMutation } from '@3shop/apollo';
import { PollForm } from './PollForm';
import { ImageStorageClient } from '@3shop/admin-infra';
import { StorageService } from '@3shop/domains';
import { useState } from 'react';
import { Box, Button, CustomModal, HStack, Text, useDisclosure, useToastMessage } from '@3shop/ui';
import { useNavigate } from 'react-router-dom';

type EditPollFormContainerProps = {
  poll: GetPollByIdQuery['poll'];
};

export type EditPollFormValues = {
  poll: string;
  image: File | string;
  choices: { value: string }[];
  issuer: string;
  taxon: string;
};

const storage = StorageService(ImageStorageClient());

export const EditPollFormContainer = ({ poll }: EditPollFormContainerProps) => {
  const navigate = useNavigate();

  const [updatePollLoading, setUpdatePollLoading] = useState(false);
  const [deletePollLoading, setDeletePollLoading] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm<EditPollFormValues>({
    defaultValues: {
      issuer: poll?.issuer || '',
      taxon: poll?.taxon || '',
      image: poll?.image || '',
      choices: poll?.choices.map(({ value }) => ({ value })) || [],
      poll: poll?.title,
    },
  });

  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToastMessage();

  const [updatePoll] = useUpdatePollMutation();
  const [deletePoll] = useDeletePollMutation();

  const { append, remove, fields } = useFieldArray({ control, name: 'choices' });

  const handleDeletePoll = async () => {
    if (!poll) return;
    setDeletePollLoading(true);
    try {
      await deletePoll({ variables: { id: poll.id } });
      await storage.deletePicture(poll.image || '', 'polls');
      toast.success(`Poll ${poll.title} deleted successfully`);
      navigate('/app/poll');
    } catch (e) {
      toast.error('An error occurred while deleting poll');
    } finally {
      setDeletePollLoading(false);
    }
  };

  const handleOpenDeleteModal = () => {
    onOpen();
  };

  const addChoice = () => {
    append({ value: '' });
  };

  const deleteChoice = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: EditPollFormValues) => {
    if (!poll) return;

    setUpdatePollLoading(true);

    const choicesIdsToDelete = touchedFields.choices ? poll.choices.map(({ id }) => id) : [];
    const choicesToInsert = touchedFields.choices
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
          choice_to_insert: choicesToInsert,
          issuer: data.issuer,
          taxon: data.taxon,
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
      setUpdatePollLoading(false);
    }
  };

  return (
    <>
      <PollForm
        addChoice={addChoice}
        deleteChoice={deleteChoice}
        handleSubmit={handleSubmit}
        register={register}
        control={control}
        fields={fields}
        errors={errors}
        loading={updatePollLoading}
        onSubmit={onSubmit}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Poll"
        body={
          <Box>
            <Text>Are you sure you want to delte &quot;{poll?.title}&quot; poll?</Text>
            <HStack mt={4} justifyContent="flex-end">
              <Button mr={2} onClick={onClose}>
                Cancel
              </Button>

              <Button
                onClick={handleDeletePoll}
                isLoading={deletePollLoading}
                isDisabled={deletePollLoading}
                colorScheme="red"
              >
                Delete
              </Button>
            </HStack>
          </Box>
        }
      />
    </>
  );
};
