import type { HttpFunction, Request, Response } from '@google-cloud/functions-framework';

const advancePattern = '*';

const isSlug = (str: string) => str.startsWith('[') && str.endsWith(']');

const removeBrackets = (str: string) => {
  if (isSlug(str)) {
    return str.slice(1, -1);
  }
  return str;
};

/**
 * This function can be used like "[slug]" or "/*\/[slugOne]/*[slugTwo]"
 * The wildcards are used to match any part of the URL that is not a slug
 * @param {string} pattern - The pattern to match in the URL
 * @param {HttpFunction} next - The next middleware function to execute
 * @returns {Promise} - The result of the next middleware function
 */
export const slug =
  (pattern: string, next: HttpFunction) => async (req: Request, res: Response) => {
    const patternSplitted = pattern.split('/').filter((str) => str != '' && str.length > 0);
    const urlSplitted = req.url.split('/').filter((str) => str != '' && str.length > 0);
    const queries: Record<string, string> = {};

    for (let i = 0; i < patternSplitted.length; i++) {
      if (patternSplitted[i] == advancePattern || !isSlug(patternSplitted[i])) continue;
      queries[removeBrackets(patternSplitted[i])] = urlSplitted[i];
    }

    if (Object.entries(queries).length) req.query = { ...req.query, ...queries };
    return await next(req, res);
  };
