/**
 * vue2-filters.currency
 * https://github.com/freearhey/vue2-filters/blob/fb8dc2f0d45c1172b4636cf052c4a6386ee41f2a/src/other/currency.js
 *
 * 12345 => $12,345.00
 *
 * @param {String} symbol
 * @param {Number} decimals Decimal places
 * @param {Object} options
 */

function _currency(value, symbol, decimals, options) {
  let thousandsSeparator; let symbolOnLeft; let
    spaceBetweenAmountAndSymbol;
  const digitsRE = /(\d{3})(?=\d)/g;
  options = options || {};
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  symbol = symbol != null ? symbol : '$';
  decimals = decimals != null ? decimals : 2;
  thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ',';
  symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true;
  spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false;
  let stringified = Math.abs(value).toFixed(decimals);
  stringified = options.decimalSeparator
    ? stringified.replace('.', options.decimalSeparator)
    : stringified;
  const _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified;
  const i = _int.length % 3;
  const head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : ''))
    : '';
  const _float = decimals
    ? stringified.slice(-1 - decimals)
    : '';
  symbol = spaceBetweenAmountAndSymbol
    ? (symbolOnLeft ? `${symbol} ` : ` ${symbol}`)
    : symbol;
  symbol = symbolOnLeft
    ? symbol + head
        + _int.slice(i).replace(digitsRE, `$1${thousandsSeparator}`) + _float
    : head
        + _int.slice(i).replace(digitsRE, `$1${thousandsSeparator}`) + _float + symbol;
  const sign = value < 0 ? '-' : '';
  return sign + symbol;
}

const currency = (value, noneSymbol) => _currency(value, noneSymbol ? '' : '원', 0, {
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
});

export default currency;
