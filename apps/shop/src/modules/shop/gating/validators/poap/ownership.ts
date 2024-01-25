import { SorcelNft } from '@3shop/domains';
import type { IValidator, validatorParams } from '../../validator.type';
import { BaseValidator } from '../base';

export class POAPOwnership extends BaseValidator implements IValidator {
  constructor(params: validatorParams) {
    super(params);
  }

  validate() {
    const { ownedPoaps, gate } = this.params;

    if (!ownedPoaps || !ownedPoaps.length) return false;
    for (const ownedPoap of ownedPoaps) {
      if (!gate?.segments.some((seg) => seg.poap_ids == ownedPoap)) return false;

      if (this.params.onValidation) this.params.onValidation(gate, { poapId: ownedPoap });
    }
    return true;
  }
}
