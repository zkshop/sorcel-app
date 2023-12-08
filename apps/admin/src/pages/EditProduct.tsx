import { Navigate, useParams } from 'react-router-dom';
import EditProductContainer from '../modules/Products/EditProductContainer';

export const EditProduct = () => {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    return <Navigate to="/" />;
  }

  return <EditProductContainer productId={productId} />;
};
