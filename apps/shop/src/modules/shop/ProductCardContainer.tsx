import { gateVerifier } from './gateVerifier';
import { formatProductData } from '../../formatProductData';
import { classnames } from '@3shop/config';
import { GridItem, ProductCard } from '@3shop/ui';
import {
  GateFieldsFragment,
  Gate_V2,
  GetProductsQuery,
  Product,
  Segment_Type,
  Segment_Type_Enum,
} from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { useEffect } from 'react';
import { BaseValidator } from './gating/validators/base';
import { IValidator } from './gating/validator.type';
import { NFTOwnership } from './gating/validators/nft/ownership';
import { gateType } from './gating/validator.type';
import { SorcelNft } from '@3shop/domains';
import { createContext } from 'react';
import { validationResult, ValidationResultContext } from './gating/validationResultContext';
import { POAPOwnership } from './gating/validators/poap/ownership';

type Props = {
  isWalletConnected: boolean;
  auth?: string;
  product: GetProductsQuery['products'][0];
};

type validatorArray = (BaseValidator & IValidator)[];

function sortGates(a: GateFieldsFragment, b: GateFieldsFragment) {
  if (a.discount && b.discount) {
    return b.discount - a.discount;
  }

  if (a.discount && !b.discount) {
    return 1;
  }

  return -1;
}

const validate = (validators: validatorArray[]) => {
  for (let i = 0; i < validators.length; i++) {
    const validatorsResult = validators[i].map((v) => v.validate());
    if (validatorsResult.every((result) => result == true)) return false;
  }
  return true;
};

const doValidation = (gates: Gate_V2[], userNFTs: SorcelNft[], userPoapIds: number[]) => {
  let validatedNfts: validationResult[] = [];

  const validators = gates.reduce<validatorArray[]>((acc, gate) => {
    const segmentType: Segment_Type_Enum | undefined = gate?.segments[0].type;
    if (!segmentType) {
      console.warn(`Failed to retrieve segment type for gate ${gate.id}`);
      return acc;
    }

    let current: validatorArray = [];
    switch (segmentType) {
      case Segment_Type_Enum.Nft:
        current.push(
          new NFTOwnership({
            gate,
            ownedNfts: userNFTs,
            onValidation(gate, { nft }) {
              validatedNfts = [...validatedNfts, { gate, nft: nft! }];
            },
          }),
        );
        break;
      case Segment_Type_Enum.Poap:
        current.push(
          new POAPOwnership({
            gate,
            ownedPoaps: userPoapIds,
            onValidation(gate, { poapId }) {
              // Callback not used yet
              gate;
              poapId;
            },
          }),
        );
        break;
      default:
        break;
    }
    return [...acc, current];
  }, []);

  return {
    isLocked: validate(validators),
    validatedNfts: Object.freeze(validatedNfts),
  };
};

export function ProductCardContainer({ isWalletConnected, auth, product }: Props) {
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const gates = product.gate.slice() || [];
  const sortedGates = gates.sort(sortGates);

  const { isLocked, validatedNfts } = doValidation(
    gates.filter((gate) => gate != undefined) as Gate_V2[],
    userNFTs,
    userPoapIds,
  );

  useEffect(() => {
    console.log("!nfts", userNFTs);
  }, [userNFTs]);

  const formatedProduct = formatProductData({
    product,
    productGates: sortedGates,
    userPoapIds,
    isLocked,
    poapImageList,
  });

  return (
    <GridItem
      className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
      display="flex"
      justifyContent="center"
    >
      <ValidationResultContext.Provider value={validatedNfts}>
        <ProductCard {...formatedProduct} isWalletConnected={isWalletConnected} auth={auth} />
      </ValidationResultContext.Provider>
    </GridItem>
  );
}
