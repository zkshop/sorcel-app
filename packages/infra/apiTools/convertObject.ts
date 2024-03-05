export type resolverKeys = string | string[];
export class ResolveMany<T, K> {
  public paths: resolverKeys[] = [];
  callback: ((values: Partial<K>) => T) | undefined;
  constructor(...paths: resolverKeys[]) {
    this.paths = paths;
  }
  onResolved(callback: typeof this.callback) {
    this.callback = callback;
    return this;
  }
  resolve(values: Partial<K>) {
    if (this.callback)
    return this.callback(values);
  }
}

export type valueResolver<T = {}> = resolverKeys | ResolveMany<any, T>;

export type objectResolver<T> = Record<keyof T, valueResolver>;

const isEmpty = (value: any) => (value === undefined || value === null || !value);

export const retrieveKey = (obj: any, path: valueResolver) => {
  if (typeof path === 'string') {
    return obj[path];
  } else if (Array.isArray(path) && path.length > 0) {
    let currentObj = obj;
    for (const key of path) {
      if (!isEmpty(currentObj[key])) {
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
    if (resolver[key] instanceof ResolveMany) {
      // Assuming src is of a compatible type with the ResolveMany instance
      const resolveMultipleInstance: ResolveMany<unknown, unknown> = resolver[key] as ResolveMany<unknown, unknown>;
      const valuesToResolve: Record<string, unknown> = {};
      for (const path of resolveMultipleInstance.paths) {
        // Here, retrieveKey is used to get the value for each path specified in ResolveMany
        const value = retrieveKey(src, path);
        if (value !== undefined) {
          // Assuming path is a string or an array where the last element is the key name
          const keyName = typeof path === 'string' ? path : path[path.length - 1];
          valuesToResolve[keyName] = value;
        }
      }
      // Now, call the resolve method on the instance with the collected values
      const resolvedValue = resolveMultipleInstance.resolve(valuesToResolve);
      result[key] = resolvedValue;
    } else {
      const retrievedKey = retrieveKey(src, resolver[key]);
      result[key] = retrievedKey;
    }
  }
  return result as Partial<K>;
};


/**
 * Transforms a single source object into a new object as defined by the resolver.
 * 
 * @param {T} src - The source object to be transformed.
 * @param {objectResolver<K>} resolver - The resolver that defines the transformation rules.
 * @returns {K} - The transformed object.
 * @template T - The type of the source object.
 * @template K - The type of the transformed object.
 */
export const convertObject = <T, K>(src: T, resolver: objectResolver<K>): K => {
  if (!resolver) {
    console.error('objectResolver is undefined');
    return {} as K; // Return an empty object of type K instead of throwing an error
  }
  const result = convert(src, resolver);
  return result as K;
};

/**
 * Transforms an array of source objects into an array of new objects as defined by the resolver.
 * 
 * @param {T[]} src - The array of source objects to be transformed.
 * @param {objectResolver<K>} resolver - The resolver that defines the transformation rules for each object.
 * @returns {K[]} - The array of transformed objects.
 * @template T - The type of the source objects.
 * @template K - The type of the transformed objects.
 */
export const convertManyObjects = <T, K>(src: T[], resolver: objectResolver<K>): K[] => {
  if (!resolver) {
    console.error('objectResolver is undefined');
    return [] as K[]; // Return an empty array of type K instead of throwing an error
  }

  const result = src.map((item) => convert(item, resolver));
  return result as K[];
};
