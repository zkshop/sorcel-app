import { CloseIcon, Image, Switch, Td, Tr } from '@3shop/ui';
import type { ToggleCompletedPollState } from '../../pages/Poll';

type PollListItemProps = {
  id: string;
  image: string;
  title: string;
  completed: boolean;
  goToPoll?(): void;
  onToggleCompletedPoll(poll: ToggleCompletedPollState): void;
};

export const PollListItem = ({
  id,
  image,
  title,
  completed,
  goToPoll,
  onToggleCompletedPoll,
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
      <Switch
        isChecked={completed}
        onChange={() => onToggleCompletedPoll({ id, image, title, completed })}
      />
    </Td>
  </Tr>
);
