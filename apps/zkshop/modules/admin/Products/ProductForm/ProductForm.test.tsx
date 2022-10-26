import { AddProductFormValues } from './types';

import { render, screen } from '../../../../test-utils';
import { ProductForm } from './ProductForm';

describe('Product Form', () => {
  const onSubmit = async (data: AddProductFormValues) => {};

  it('should validate', () => {
    render(<ProductForm onSubmit={onSubmit} isLoading={false} />);
  });
});
