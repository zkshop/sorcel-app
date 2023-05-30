import { Header, ButtonGroup, Button } from '@3shop/ui';

type AddGateFormHeaderProps = {
  loading: boolean;
};

export const AddPollFormHeader = ({ loading }: AddGateFormHeaderProps) => (
  <Header title="Add Poll">
    <ButtonGroup>
      <Button isDisabled={loading} isLoading={loading} type="submit">
        Save
      </Button>
    </ButtonGroup>
  </Header>
);
