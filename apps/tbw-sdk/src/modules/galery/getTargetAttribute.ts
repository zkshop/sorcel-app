const MEMBER_STACK_PRODUCT_ID = '51e46fb2-cd9e-4baf-81db-8df9d58b62b2';

export const getTargetAttribute = (productId: string) => {
  if (productId === MEMBER_STACK_PRODUCT_ID) {
    return '_self';
  }

  return '_blank';
};
