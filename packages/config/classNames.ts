// https://getbem.com/naming/

const PREFIX = 'shop3-';

export const classnames = {
  NAVBAR: PREFIX + 'header',
  PRODUCT_CARD_LIST: {
    CONTAINER: PREFIX + 'product-card-list',
  },
  PRODUCT_CARD: {
    CONTAINER: PREFIX + 'product-card',
    DISCOUNT_TAG_CONTAINER: PREFIX + 'product-card' + '__discount-tag-container',
    DISCOUNT_TAG_LABEL: PREFIX + 'product-card' + '__discount-tag-label',
    IMG_CONTAINER: PREFIX + 'product-card' + '__img-container',
    IMG: PREFIX + 'product-card' + '__img',
    PRICE: PREFIX + 'product-card' + '__price',
    PRICING_ZONE: PREFIX + 'product-card' + '__pricing-zone',
    REDUCED_PRICE: PREFIX + 'product-card' + '__reduced-price',
    TITLE: PREFIX + 'product-card' + '__title',
  },
  LOCKED_LAYER: PREFIX + 'locked-layer',
  LOCKED_LAYER_TEXT: PREFIX + 'locked-layer' + '__text',
};
