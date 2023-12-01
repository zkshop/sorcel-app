'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.formatAmountForStripe = void 0;
function formatAmountForStripe(amount, currency) {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (const part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
exports.formatAmountForStripe = formatAmountForStripe;
