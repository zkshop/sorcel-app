const TOKEN_REGEX = new RegExp('^Bearer (.*)$');

export const extractTokenFromAuthorization = (authorization?: string) => {
  if (!authorization) return null;

  const token = authorization.match(TOKEN_REGEX);

  return token ? token[1] : null;
};
