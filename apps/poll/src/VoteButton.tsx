import type { ButtonProps } from '@chakra-ui/button';
import { Button } from '@chakra-ui/button';
import { VOTE_BUTTON_BACKGROUND_COLOR, VOTE_BUTTON_COLOR } from './constant';

type VoteButtonProps = ButtonProps & { children: React.ReactNode };

export const VoteButton = ({ children, ...rest }: VoteButtonProps) => (
  //@ts-ignore
  <Button color={VOTE_BUTTON_COLOR} backgroundColor={VOTE_BUTTON_BACKGROUND_COLOR} {...rest}>
    {children}
  </Button>
);
