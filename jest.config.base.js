const jestConfigBase = {
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$',
  testEnvironment: 'node',
};

module.exports = jestConfigBase;
