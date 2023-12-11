export const camelCaseToSnakeCase = (input) => {
  if (!input) return undefined;
  return input.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
};

export const snakeCaseToKebabCase = (input) => {
  if (!input) return undefined;
  return input.replace(/_/g, '-');
};

export const camelCaseToKebabCase = (input) => snakeCaseToKebabCase(camelCaseToSnakeCase(input));


