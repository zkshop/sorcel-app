import { Header, ButtonGroup, Button } from '@3shop/ui';

type AddGateFormHeaderProps = {
  loading: boolean;
  handleOpenDeleteModal?(): void;
};

export const AddPollFormHeader = ({ loading, handleOpenDeleteModal }: AddGateFormHeaderProps) => (
  <Header title={handleOpenDeleteModal ? 'Edit Poll' : 'Add Poll'}>
    <ButtonGroup>
      {handleOpenDeleteModal && (
        <Button isDisabled={loading} colorScheme="red" onClick={handleOpenDeleteModal}>
          Delete
        </Button>
      )}
      <Button isDisabled={loading} isLoading={loading} type="submit">
        Save
      </Button>
    </ButtonGroup>
  </Header>
);
