import type { IValidator, validatorParams } from '../../validator.type';
import { BaseValidator } from '../base';

export class NFTOwnership extends BaseValidator implements IValidator {
  constructor(params: validatorParams) {
    super(params);
  }

  validate() {
    const { ownedNfts, gate } = this.params;

    if (!ownedNfts || !ownedNfts.length) {
      return false;
    }
    for (const ownedNft of ownedNfts) {
      if (!gate?.segments) continue;
      for (const seg of gate?.segments) {
        if (seg.nft_contract_address === ownedNft.combinedIdentifiers) {
          if (this.params.onValidation) this.params.onValidation(gate, { nft: ownedNft });
          return true;
        }
      }
    }
    return false;
  }
}
