const NODE_ENV = process.env.NODE_ENV || 'development';

type WindowAttribute = 'APP_ID' | 'NETWORK' | 'PRODUCT_ID';

export function mapWindowAttributeToEnvVar(name: WindowAttribute) {
  if (NODE_ENV === 'production') {
    if (typeof window === 'undefined') return process.env[name];
    // @ts-ignore
    return window[`__3SHOP_${name}__`];
  }

  return process.env[name];
}
