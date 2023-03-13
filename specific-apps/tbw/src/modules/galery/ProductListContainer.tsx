import { formatProductData } from './formatProductData';
import type { Gate, GetProductsQuery } from '@3shop/apollo';
import { useGetGatesQuery } from '@3shop/apollo';
import { TBWProductCardList } from '@3shop/ui';
import { useAppSelector } from '../../store';
import type { Nft } from '@3shop/alchemy';

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

const getAssociatedGates = (gates: Gate[], productId: string) =>
  gates.filter((gate) => gate.product_id === productId);

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const { data } = useGetGatesQuery();
  const productsGates = data?.gates.slice() || [];

  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);

  const formatedProducts = products.map((product) => {
    const productGates = getAssociatedGates(productsGates, product.id);
    const userMatchedProductGate = gateVerifier(productGates, userNFTs);

    return formatProductData({
      product,
      productGates,
      userNFTContracts,
      userMatchedProductGate,
    });
  });

  return <TBWProductCardList products={formatedProducts} />;
};
