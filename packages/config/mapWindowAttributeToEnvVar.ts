const NODE_ENV = process.env.NODE_ENV || 'development';

type WindowAttribute = 'APP_ID' | 'NETWORK' | 'PRODUCT_ID';

export function mapWindowAttributeToEnvVar(name: WindowAttribute) {
  if (NODE_ENV === 'production') {
    if (typeof window === 'undefined') {
      const res = process.env[name];
      console.log("case undefined", res);
      return res;
    }
    // @ts-ignore
    const res = window[`__3SHOP_${name}__`];
    console.log("returned", res);
    return res;
  }

  return process.env[name];
}
