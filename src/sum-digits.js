const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function separateNumbers(n) {
    return n
      .toString()
      .split("")
      .map((n) => Number(n));
  }

  let buffer = separateNumbers(n);

  while (buffer.length > 1) {
    let acc = 0;
    for (let i = 0; i < buffer.length; i++) {
      acc += buffer[i];
    }
    buffer = separateNumbers(acc);
  }

  return Number(buffer.join(""));
}

module.exports = {
  getSumOfDigits
};
