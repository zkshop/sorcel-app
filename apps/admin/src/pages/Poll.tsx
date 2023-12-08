import { useGetAdminPollsQuery, useTogglePollCompletedMutation } from '@3shop/apollo';
import {
  Box,
  Button,
  CustomModal,
  HStack,
  Header,
  Spinner,
  Table,
  Text,
  useDisclosure,
  useToastMessage,
} from '@3shop/ui';
import { Link } from 'react-router-dom';
import { PollListItem } from '../modules/Poll/PollListItem';
import { useState } from 'react';
import type { Nullable } from '@3shop/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../routes/Routes';

export type ToggleCompletedPollState = {
  id: string;
  image: string;
  title: string;
  completed: boolean;
};

export const Poll = () => {
  const { data, loading, error } = useGetAdminPollsQuery();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedPoll, setSelectedPoll] = useState<Nullable<ToggleCompletedPollState>>(null);
  const [togglePoll, { loading: updatePollLoading }] = useTogglePollCompletedMutation();
  const navigate = useNavigate();
  const toast = useToastMessage();

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  const handleClickOnDeletePoll = (poll: ToggleCompletedPollState) => {
    setSelectedPoll(poll);
    onOpen();
  };

  const goToPoll = (id: string) => {
    navigate(`${ROUTES_PATH.PROTECTED.POLL}/edit/${id}`);
  };

  const onToggleCompletedPoll = async () => {
    if (!selectedPoll) return;

    try {
      await togglePoll({ variables: { id: selectedPoll.id, completed: !selectedPoll.completed } });
      toast.success(`Poll ${selectedPoll.title} updated Successfully`);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while updating poll status');
    }
  };

  return (
    <Box>
      <Header title="Polls">
        <Link to={`${ROUTES_PATH.PROTECTED.POLL}/add`}>
          <Button>+ New Poll</Button>
        </Link>
      </Header>

      <Box mt={4}>
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
              onToggleCompletedPoll={handleClickOnDeletePoll}
            />
          )}
        />
      </Box>

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title="Change status"
        body={
          <Box>
            <Text>
              Are you sure you want to set {selectedPoll?.title} poll as{' '}
              {selectedPoll?.completed ? 'In Progress' : 'Completed'}?
            </Text>
            <HStack mt={4} justifyContent="flex-end">
              <Button colorScheme="red" mr={2} onClick={onClose}>
                Cancel
              </Button>

              <Button
                onClick={onToggleCompletedPoll}
                isDisabled={updatePollLoading}
                isLoading={updatePollLoading}
              >
                Confirm
              </Button>
            </HStack>
          </Box>
        }
      />
    </Box>
  );
};
