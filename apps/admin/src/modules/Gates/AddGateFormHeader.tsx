import { Header, ButtonGroup, Button } from '@3shop/ui';

type AddGateFormHeaderProps = {
  loading: boolean;
};

export const AddGateFormHeader = ({ loading }: AddGateFormHeaderProps) => (
  <Header title="Add Gate">
    <ButtonGroup>
      <Button isDisabled={loading} isLoading={loading} type="submit">
        Save
      </Button>
    </ButtonGroup>
  </Header>
);
