import { gateVerifier } from './gateVerifier';
import { formatProductData } from '@/formatProductData';
import { classnames } from '@3shop/config';
import { GridItem, ProductCard, ProductCardTwo } from '@3shop/ui';
import type { GateFieldsFragment, GetProductsQuery, Product } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { useEffect } from 'react';
import { BaseValidator } from './gating/validators/base';
import { IValidator } from './gating/validator.type';
import { Ownership } from './gating/validators/ownership';

type Props = {
  isWalletConnected: boolean;
  auth?: string;
  product: GetProductsQuery['products'][0];
};

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
  console.log('!product', product);
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const gates = product.gate.slice() || [];
  type validatorArray = (BaseValidator & IValidator)[];

  const validate = (validators: validatorArray[]) => {
    for (let i = 0; i < validators.length; i++) {
      const validatorsResult = validators[i].map((v) => v.validate());
      console.log('___res', validatorsResult);
      if (validatorsResult.every((result) => result == true)) return false;
    }
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
        }),
      );
      validators = [...validators, current];
      current = [];
    }
    console.log('validators !', validators);

    return validate(validators);
  })();

  useEffect(() => {
    console.log('!!!nfts', userNFTs);
  }, [userNFTs]);

  useEffect(() => {
    console.log('!gates here', gates);
  }, [gates]);
  return (
    <GridItem
      className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
      display="flex"
      justifyContent="center"
    >
      <ProductCardTwo name={product.name} isLocked={isLocked} />
    </GridItem>
  );
  // const userNFTs = useAppSelector((state) => state.user.nfts);
  // console.log(userNFTs);
  // const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  // const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  // const poapImageList = useAppSelector((state) => state.poapImageList);
  // const gates = product.gate.slice() || [];
  // const sortedGates = gates.sort(sortGates);

  // const matches = gateVerifier(sortedGates, userNFTs, userPoapIds);

  // const formatedProduct = formatProductData({
  //   product,
  //   productGates: sortedGates,
  //   userPoapIds,
  //   userNFTContracts,
  //   matches,
  //   poapImageList,
  // });

  // return (
  //   <GridItem
  //     className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
  //     display="flex"
  //     justifyContent="center"
  //   >
  // <ProductCard {...formatedProduct} isWalletConnected={isWalletConnected} auth={auth} />
  //   </GridItem>
  // );
}
