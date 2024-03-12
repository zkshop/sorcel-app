import type { validatorParams } from '../validator.type';

export class BaseValidator {
  static sharedId = 0;
  private id: number;

  constructor(public params: validatorParams) {
    this.id = BaseValidator.sharedId++;
  }
  getParams() {
    return this.params;
  }
  getId() {
    return this.id;
  }
}
