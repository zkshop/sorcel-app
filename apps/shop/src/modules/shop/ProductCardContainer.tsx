import { formatProductData } from '../../formatProductData';
import { classnames } from '@3shop/config';
import { GridItem, ProductCard } from '@3shop/ui';
import type { GateFieldsFragment, Gate_V2, GetProductsQuery } from '@3shop/apollo';
import { Segment_Type_Enum } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { useContext, useEffect, useState } from 'react';
import type { BaseValidator } from './gating/validators/base';
import type { IValidator } from './gating/validator.type';
import { NFTOwnership } from './gating/validators/nft/ownership';
import type { SorcelNft } from '@3shop/domains';
import type { validationResult } from './gating/validationResultContext';
import { ValidationResultContext } from './gating/validationResultContext';
import { POAPOwnership } from './gating/validators/poap/ownership';
import type { userConnectionStatus } from '@3shop/types';
import { HeirloomDidContext } from '@3shop/wallet/internal/Heirloom/HeirloomDidProvider';

type Props = {
  isWalletConnected: boolean;
  auth?: string;
  product: GetProductsQuery['products'][0];
  connectionStatus: userConnectionStatus;
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
  const gateValidatorsResult = validators.map((gate) => gate.map((v) => v.validate()));
  const res = gateValidatorsResult.some((gateResults) =>
    gateResults.every((validationResult) => validationResult),
  );
  return res;
};

const useValidation = (gates: Gate_V2[], userNFTs: SorcelNft[], userPoapIds: number[]) => {
  const [validationResult, setValidationResult] = useState<{
    isLocked: boolean;
    validatedNfts: validationResult[];
  }>({
    isLocked: true,
    validatedNfts: [],
  });

  useEffect(() => {
    let validatedNfts: validationResult[] = [];
    if (!userNFTs) return;

    // Products without gates are unlocked by default
    if (!gates.length) {
      setValidationResult({
        isLocked: false,
        validatedNfts: [],
      });
      return;
    }

    const validators = gates.reduce<validatorArray[]>((acc, gate) => {
      const segmentType: Segment_Type_Enum | undefined = gate?.segments[0].type;
      if (!segmentType) {
        console.warn(`Failed to retrieve segment type for gate ${gate.id}`);
        return acc;
      }

      const current: validatorArray = [];
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

    setValidationResult({
      isLocked: validate(validators) == false,
      validatedNfts: validatedNfts,
    });
  }, [userNFTs]);

  return validationResult;
};

export function ProductCardContainer({ connectionStatus, auth, product }: Props) {
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const gates = product.gate.slice() || [];
  const sortedGates = gates.sort(sortGates);
  const heirloom = useContext(HeirloomDidContext);

  useEffect(() => {
    console.log('!productCard');
    console.log(gates);
  }, []);

  const { isLocked, validatedNfts } = useValidation(
    gates.filter((gate) => gate != undefined) as Gate_V2[],
    userNFTs,
    userPoapIds,
  );

  const formatedProduct = formatProductData({
    product,
    productGates: sortedGates,
    userPoapIds,
    isLocked: (() => {
      if (heirloom && heirloom.response?.did) return true;
      return isLocked;
    })(),
    poapImageList,
  });

  return (
    <GridItem
      className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
      display="flex"
      justifyContent="center"
    >
      <ValidationResultContext.Provider value={validatedNfts}>
        <ProductCard
          crypto_price={product.crypto_price}
          {...formatedProduct}
          connectionStatus={connectionStatus}
          auth={auth}
        />
      </ValidationResultContext.Provider>
    </GridItem>
  );
}
