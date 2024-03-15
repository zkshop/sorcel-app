// import type { validator, validatorParams } from './validator.type';
// import { ownership } from './validators/ownership';

// export class Validator {
//   private validators: validator[] = [];

//   constructor(...InitialValidators: validator[]) {
//     this.validators = InitialValidators;
//   }

//   validate() {
//     return validate(...this.validators);
//   }
// }

// export function validate(...validators: validator[]) {
//   return (params: validatorParams) => {
//     for (let validator of validators) {
//       if (!validator(params)) {
//         return false;
//       }
//     }
//     return true;
//   };
// }
