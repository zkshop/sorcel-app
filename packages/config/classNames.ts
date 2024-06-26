// https://getbem.com/naming/

const PREFIX = 'shop3-';

export const classnames = {
  TEXT: PREFIX + 'text',
  HEADER: PREFIX + 'header',
  EMAIL_LOGIN_BUTTON: PREFIX + 'email-login-button',
  WALLET_CONNECT_BUTTON: PREFIX + 'wallet-connect-button',
  GROUP_CONNECT_BUTTON: PREFIX + 'group-connect-button',
  LOCKED_LAYER: PREFIX + 'locked-layer',
  LOCKED_LAYER_TEXT: PREFIX + 'locked-layer' + '__text',
  PRODUCT_CARD_LIST: {
    CONTAINER: PREFIX + 'product-card-list',
    GRID: PREFIX + 'product-card-list' + '__grid',
    GRID_ITEM: PREFIX + 'product-card-list' + '__grid-item',
  },
  PRODUCT_CARD: {
    CONTAINER: PREFIX + 'product-card',
    DISCOUNT_TAG_CONTAINER: PREFIX + 'product-card' + '__discount-tag-container',
    DISCOUNT_TAG_TEXT: PREFIX + 'product-card' + '__discount-tag-text',
    IMG_CONTAINER: PREFIX + 'product-card' + '__img-container',
    IMG: PREFIX + 'product-card' + '__img',
    DETAILS: PREFIX + 'product-card' + '__details',
    PRICE: PREFIX + 'product-card' + '__price',
    PRICING_ZONE: PREFIX + 'product-card' + '__pricing-zone',
    REDUCED_PRICE: PREFIX + 'product-card' + '__reduced-price',
    TITLE: PREFIX + 'product-card' + '__title',
  },
  PRODUCT_DETAILS: {
    CONTAINER: PREFIX + 'product-details',
    GRID: PREFIX + 'product-details' + '__grid',
    GRID_ITEM: PREFIX + 'product-details' + '__grid-item',
    IMG_CONTAINER: PREFIX + 'product-details' + '__img-container',
    IMG: PREFIX + 'product-details' + '__img',
    TITLE: PREFIX + 'product-details' + '__title',
    DESCRIPTION: PREFIX + 'product-details' + '__description',
    DISCOUNT_TAG_CONTAINER: PREFIX + 'product-details' + '__discount-tag-container',
    DISCOUNT_TAG_TEXT: PREFIX + 'product-details' + '__discount-tag-text',
    PRICING_ZONE: PREFIX + 'product-details' + '__pricing-zone',
    PRICE: PREFIX + 'product-details' + '__price',
    REDUCED_PRICE: PREFIX + 'product-details' + '__reduced-price',
    BUY_BUTTON: PREFIX + 'product-details' + '__buy-button',
    BUY_BUTTON_TEXT: PREFIX + 'product-details' + '__buy-button-text',
  },
};
