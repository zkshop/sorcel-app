import { CloseIcon, Image, Td, Tr } from '@3shop/ui';
import type { DeletePollState } from '../../pages/Poll';

type PollListItemProps = {
  id: string;
  image: string;
  title: string;
  completed: boolean;
  goToPoll?(): void;
  onDeletePoll(poll: DeletePollState): void;
};

export const PollListItem = ({
  id,
  image,
  title,
  completed,
  goToPoll,
  onDeletePoll,
}: PollListItemProps) => (
  <Tr
    sx={{
      _hover: {
        backgroundColor: '#0077ff1e',
        cursor: 'pointer',
      },
    }}
  >
    <Td onClick={goToPoll}>
      <Image src={image} alt={title} width={50} height={50} />
    </Td>
    <Td onClick={goToPoll}>{title}</Td>
    <Td onClick={goToPoll}>{completed ? 'COMPLETED' : 'IN PROGRESS'}</Td>
    <Td>
      <CloseIcon onClick={() => onDeletePoll({ id, image, title })} />
    </Td>
  </Tr>
);
