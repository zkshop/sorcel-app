import { ButtonGroup, Button, Header } from '@3shop/ui';

type ProductFormHeaderProps = { isLoading: boolean; onOpen?(): void; isDisabled: boolean };

export const ProductFormHeader = ({ isLoading, onOpen, isDisabled }: ProductFormHeaderProps) => (
  <Header title={onOpen ? 'Edit product' : 'Add new product'}>
    <ButtonGroup>
      <Button isDisabled={isDisabled || isLoading} isLoading={isLoading} type="submit">
        Save
      </Button>
      {onOpen && (
        <Button
          onClick={onOpen}
          type="button"
          backgroundColor="red"
          color="white"
          isDisabled={isLoading}
        >
          Delete
        </Button>
      )}
    </ButtonGroup>
  </Header>
);
