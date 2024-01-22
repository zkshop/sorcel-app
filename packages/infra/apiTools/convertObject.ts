export type valueResolver = string | string[];
export type objectResolver<T> = Record<keyof T, valueResolver>;

export const retrieveKey = (obj: any, path: valueResolver) => {
  if (typeof path === 'string') {
    return obj[path];
  } else if (Array.isArray(path) && path.length > 0) {
    let currentObj = obj;
    for (const key of path) {
      if (currentObj[key] !== undefined) {
        currentObj = currentObj[key];
      } else {
        return undefined;
      }
    }
    return currentObj;
  } else {
    return undefined;
  }
};

const convert = <T, K>(src: T, resolver: objectResolver<K>): Partial<K> => {
  let result: any = {};
  for (const key in resolver) {
    const retrivedKey = retrieveKey(src, resolver[key]);
    result[key] = retrivedKey;
  }
  return result as Partial<K>;
};

export const convertObject = <T, K>(src: T, resolver: objectResolver<K>): K => {
  if (!resolver)
    throw new Error('objectResolver is undefined');
  const result = convert(src, resolver);
  return result as K;
};

export const convertManyObjects = <T, K>(src: T[], resolver: objectResolver<K>): K[] => {
  if (!resolver)
    throw new Error('objectResolver is undefined');
  const result = src.map((item) => convert(item, resolver));
  return result as K[];
};
