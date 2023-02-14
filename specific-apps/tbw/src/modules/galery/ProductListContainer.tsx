import { formatProductData } from './formatProductData';
import type { Gate, GetProductsQuery } from '@3shop/apollo';
import { useGetGatesQuery } from '@3shop/apollo';
import { ProductCardList } from '@3shop/ui-tbw';
import { useAppSelector } from '../../store';
import type { Nft } from '@3shop/alchemy';
import { findProductGates } from './findProductGates';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
};

const isNftMatchingWithGate = (gate: Gate, nft: Nft): boolean => {
  if (!nft.rawMetadata || !nft.rawMetadata.attributes) return false;

  for (const gateAttribute of gate.attributes) {
    const nftAttribute = nft.rawMetadata.attributes.find(
      (attribute: any) => attribute.trait_type === gateAttribute.name,
    );
    if (!nftAttribute || nftAttribute.value !== gateAttribute.value) {
      return false;
    }
  }

  return true;
};

const isMatchingGate = (gate: Gate, nfts: Nft[]): boolean => {
  const nftsWithSameSmartContract = nfts.filter(
    (nft) => nft.contract.address.toLowerCase() === gate.contractAddress.toLowerCase(),
  );

  if (!nftsWithSameSmartContract.length) return false;

  for (const nft of nftsWithSameSmartContract) {
    if (isNftMatchingWithGate(gate, nft)) return true;
  }

  return false;
};

const gateVerifier = (gates: Gate[], nfts: Nft[]): Gate | null => {
  const match = gates.filter((gate) => isMatchingGate(gate, nfts));

  return match.length ? match[0] : null;
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const nfts = useAppSelector((state) => state.user.nfts);
  const collections = nfts.map((nft) => nft.contract.address);
  const { data } = useGetGatesQuery();
  const gates = data?.gates.slice() || [];
  const sortedGates = gates.sort((a, b) => b.discount - a.discount);

  const formatedProducts = products.map((product) => {
    const gate = gateVerifier(findProductGates(product.id, sortedGates), nfts);

    return formatProductData({ ...product, collections, gate });
  });

  return <ProductCardList products={formatedProducts} />;
};
