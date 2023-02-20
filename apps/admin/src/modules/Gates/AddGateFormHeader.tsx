import { Header, ButtonGroup, Button } from '@3shop/ui';

export const AddGateFormHeader = ({}) => (
  <Header title="Add Gate">
    <ButtonGroup>
      <Button isDisabled={false} isLoading={false} type="submit">
        Save
      </Button>
    </ButtonGroup>
  </Header>
);
