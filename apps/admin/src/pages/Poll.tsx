import { useDeletePollMutation, useGetAdminPollsQuery } from '@3shop/apollo';
import {
  Box,
  Button,
  CustomModal,
  HStack,
  Header,
  Link,
  Spinner,
  Table,
  Text,
  useDisclosure,
  useToastMessage,
} from '@3shop/ui';
import { PollListItem } from '../modules/Poll/PollListItem';
import { useState } from 'react';
import type { Nullable } from '@3shop/types';
import { useNavigate } from 'react-router-dom';
import { ImageStorageClient } from '@3shop/admin-infra';
import { StorageService } from '@3shop/domains';
import { ROUTES_PATH } from '../routes/Routes';

export type DeletePollState = {
  id: string;
  image: string;
  title: string;
};

const storage = StorageService(ImageStorageClient());

export const Poll = () => {
  const { data, loading, error } = useGetAdminPollsQuery();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedPoll, setSelectedPoll] = useState<Nullable<DeletePollState>>(null);
  const [deletePollLoading, setDeletePollLoading] = useState(false);
  const [deletePoll] = useDeletePollMutation();
  const navigate = useNavigate();
  const toast = useToastMessage();

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  const handleClickOnDeletePoll = (poll: DeletePollState) => {
    setSelectedPoll(poll);
    onOpen();
  };

  const goToPoll = (id: string) => {
    navigate(`${ROUTES_PATH.PROTECTED.POLL}/edit/${id}`);
  };

  const handleDeletePoll = async () => {
    if (!selectedPoll) return;
    setDeletePollLoading(true);
    try {
      await deletePoll({ variables: { id: selectedPoll.id } });
      await storage.deletePicture(selectedPoll.image, 'polls');
      onClose();
      toast.success(`Poll ${selectedPoll.title} Deleted Successfully`);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while deleting poll');
    } finally {
      setDeletePollLoading(false);
    }
  };

  return (
    <Box>
      <Header title="Polls">
        <Link href={`${ROUTES_PATH.PROTECTED.POLL}/add`}>
          <Button>+ New Poll</Button>
        </Link>
      </Header>

      <Table
        data={data.polls}
        heads={['image', 'title', 'completed', '']}
        renderRow={({ id, image, title, completed }) => (
          <PollListItem
            key={id}
            id={id}
            image={image || ''}
            completed={completed}
            title={title}
            goToPoll={() => goToPoll(id)}
            onDeletePoll={handleClickOnDeletePoll}
          />
        )}
      />

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Poll"
        body={
          <Box>
            <Text>Are you sure you want to delete {selectedPoll?.title} poll?</Text>
            <HStack mt={4} justifyContent="flex-end">
              <Button mr={2} onClick={onClose}>
                Cancel
              </Button>

              <Button
                colorScheme="red"
                onClick={handleDeletePoll}
                isDisabled={deletePollLoading}
                isLoading={deletePollLoading}
              >
                Delete
              </Button>
            </HStack>
          </Box>
        }
      />
    </Box>
  );
};
