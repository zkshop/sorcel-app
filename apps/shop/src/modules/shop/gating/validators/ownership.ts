import { SorcelNft } from '@3shop/domains';
import type { IValidator, validatorParams } from '../validator.type';
import { BaseValidator } from './base';

export class Ownership extends BaseValidator implements IValidator {
  constructor(params: validatorParams) {
    super(params);
  }

  validate() {
    const { ownedNfts, gate } = this.params;

    if (!ownedNfts || !ownedNfts.length) return false;
    for (const ownedNft of ownedNfts) {
      if (!gate?.segments.some((seg) => seg.nft_contract_address == ownedNft.combinedIdentifiers))
        return false;

      if (this.params.onValidation) this.params.onValidation(gate, ownedNft);
    }
    return true;
  }
}
