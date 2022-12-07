import { formatProductData } from './formatProductData';
import { Gate, Product, useGetGatesQuery } from 'apollo';
import { ProductCardList } from 'ui-tbw';
import { useAppSelector } from '../../store';
import { Nft } from 'alchemy';
import { findProductGates } from './findProductGates';

type ProductListContainerProps = {
  products: Product[];
};

const isNftMatchingWithGate = (gate: Gate, nft: Nft): boolean => {
  if (!nft.rawMetadata || !nft.rawMetadata.attributes) return false;
  for (const gateAttribute of gate.attributes) {
    const nftAttribute = nft.rawMetadata.attributes.find(
      (attribute) => attribute.trait_type === gateAttribute.name,
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

  const formatedProducts = products.map((product) => {
    const gates = findProductGates(product.id, data?.gates);
    const gate = gateVerifier(gates, nfts);

    return formatProductData({ ...product, collections, gate });
  });

  return <ProductCardList products={formatedProducts} />;
};
