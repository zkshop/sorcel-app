import { gateVerifier } from './gateVerifier';
import { formatProductData } from '../../formatProductData';
import { classnames } from '@3shop/config';
import { GridItem, ProductCard } from '@3shop/ui';
import type { GateFieldsFragment, GetProductsQuery, Product } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { useEffect } from 'react';
import { BaseValidator } from './gating/validators/base';
import { IValidator } from './gating/validator.type';
import { Ownership } from './gating/validators/ownership';
import { gateType } from './gating/validator.type';
import { SorcelNft } from '@3shop/domains';
import { createContext } from 'react';
import { validationResult, ValidationResultContext } from './gating/validationResultContext';

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

const doValidation = () => {
  let validators: validatorArray[] = [];
  let current: validatorArray = [];
  let validatedNfts: validationResult[] = [];

  for (let i = 0; i < gates.length; i++) {
    console.log('## GATE', gates[i]);
    current.push(
      new Ownership({
        gate: gates[i],
        ownedNfts: userNFTs,
        onValidation(gate, nft) {
          validatedNfts = [...validatedNfts, { gate, nft }];
        },
      }),
    );
    validators = [...validators, current];
    current = [];
  }
  return validate(validators);
};

export function ProductCardContainer({ isWalletConnected, auth, product }: Props) {
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const gates = product.gate.slice() || [];
  const sortedGates = gates.sort(sortGates);

  useEffect(() => {
    console.log('!Poap', userPoapIds);
  }, [userPoapIds]);

  const isLocked = doValidation(gates);

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
