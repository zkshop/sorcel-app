import { SorcelNft } from '@3shop/domains';
import type { IValidator, validatorParams } from '../../validator.type';
import { BaseValidator } from '../base';
import { poap } from '@3shop/poap';

export class POAPOwnership extends BaseValidator implements IValidator {
  constructor(params: validatorParams) {
    super(params);
  }

  validate() {
    const { ownedPoaps, gate } = this.params;

    if (!gate?.segments) return true;
    if (!ownedPoaps || !ownedPoaps.length) return false;

    for (let i = 0; i < gate?.segments.length; i++) {
      const seg = gate?.segments[i];
      const isAndLogic = seg.poap_ids.length > 1;

      if (isAndLogic) {
        const ownsAll =
          ownedPoaps.length == seg.poap_ids.length &&
          ownedPoaps.every((poap) => seg.poap_ids.includes(String(poap)));

        if (ownsAll && this.params.onValidation)
          ownedPoaps.forEach((poap) => this.params.onValidation!(gate, { poapId: poap }));
        return ownsAll;
      } else {
        const ownsAny = ownedPoaps.every(
          (ownedPoap) =>
            gate?.segments.some((seg) => {
              const result = seg.poap_ids == ownedPoap;

              if (result && this.params.onValidation)
                this.params.onValidation(gate, { poapId: ownedPoap });
              return result;
            }),
        );
        return ownsAny;
      }
    }
    return false;
  }
}
