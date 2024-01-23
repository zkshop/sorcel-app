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



export function ProductCardContainer({ isWalletConnected, auth, product }: Props) {
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const gates = product.gate.slice() || [];
  const sortedGates = gates.sort(sortGates);

  let validatedNfts: validationResult[] = [];

  /**
   * This function iterates over an array of gate validators and calls the validate method for each.
   * If all validate methods return true, the gate is considered unlocked.
   * @param {validatorArray[]} validators - An array of validator arrays.
   * @returns {boolean} - Returns true if the gate is locked, false otherwise.
   */
  const validate = (validators: validatorArray[]) => {
    for (let i = 0; i < validators.length; i++) {
      const validatorsResult = validators[i].map((v) => v.validate());
      // If every validator returns true, the gate is unlocked, hence return false for isLocked.
      if (validatorsResult.every((result) => result == true)) return false;
    }
    // If any validator does not return true, the gate remains locked.
    return true;
  };

  const isLocked = (() => {
    let validators: validatorArray[] = [];
    let current: validatorArray = [];

    for (let i = 0; i < gates.length; i++) {
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
  })();

  // useEffect(() => {
  //   console.log('!!!nfts', userNFTs);
  // }, [userNFTs]);

  // useEffect(() => {
  //   console.log('!gates here', gates);
  // }, [gates]);
  // return (
  //   <GridItem
  //     className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
  //     display="flex"
  //     justifyContent="center"
  //   >
  //     <ProductCardTwo name={product.name} isLocked={isLocked} />
  //   </GridItem>
  // );
  // const userNFTs = useAppSelector((state) => state.user.nfts);
  // console.log(userNFTs);
  // const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  // const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  // const gates = product.gate.slice() || [];
  // const sortedGates = gates.sort(sortGates);

  // const matches = gateVerifier(sortedGates, userNFTs, userPoapIds);

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
