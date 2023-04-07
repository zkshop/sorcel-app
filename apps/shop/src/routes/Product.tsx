import { VStack, BackButton, Spinner } from '@3shop/ui';

import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from '@3shop/wallet';
import { ProductDetailsContainer } from '@/modules/product-page/ProductDetailsContainer';
import type { Network_Enum, Segment_Type_Enum } from '@3shop/apollo';
import { useGetProductByIdQuery } from '@3shop/apollo';
import { useParams } from 'react-router-dom';

export type ProductDetailsType = {
  __typename?: 'product';
  app_id: any;
  collection: string;
  curation?: string | null;
  discount?: number | null;
  id: any;
  image: string;
  name: string;
  description: string;
  price: number;
  poapId?: number | null;
  isDiscountGated: boolean;
  app: {
    __typename?: 'app';
    id: any;
    deliveryTaxesTableName?: string | null;
    imgUrl?: string | null;
    name: string;
    moneyAccountId?: string | null;
  };
  gate: Array<{
    __typename?: 'gate_v2';
    app_id?: any | null;
    product_id: any;
    id: any;
    name: string;
    discount?: number | null;
    exclusive_access: boolean;
    segments: Array<{
      __typename?: 'segment';
      id: any;
      gate_id?: any | null;
      network?: Network_Enum | null;
      nft_contract_address?: string | null;
      poap_ids: any;
      type: Segment_Type_Enum;
    }>;
  }>;
};

export const Product = () => {
  const { isConnected } = useAccount();
  const { productId } = useParams();
  const { data, loading } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
  const product = data?.product;

  if (!product) return null;

  return (
    <VStack>
      <ReactCanvasConfetti
        fire={isConnected}
        style={{
          height: '100%',
          left: '0px',
          pointerEvents: 'none',
          position: 'fixed',
          top: '0px',
          width: '100%',
          zIndex: '-1',
        }}
      />

      <BackButton href="/" />

      {!loading ? <ProductDetailsContainer product={product} /> : <Spinner />}
    </VStack>
  );
};
