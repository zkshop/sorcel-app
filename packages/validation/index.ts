import * as FormValidation from 'yup';
import tinycolor from 'tinycolor2';

declare module 'yup' {
  interface StringSchema {
    color(message?: string): StringSchema;
  }
}

FormValidation.addMethod(FormValidation.string, 'color', function () {
  return this.test('color', '"${value}" is not a valid color', (value) =>
    tinycolor(value).isValid(),
  );
});

export { FormValidation };
