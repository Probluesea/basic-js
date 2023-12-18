const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const separatedString = n.split("-").map((s) => s.split(""));
  const convertedString = separatedString.map((item) => {
    const arr = [];
    for (let i = 0; i < item.length; i++) {
      arr.push(Number(item[i]) || Number(item[i]) === 0 ? Number(item[i]) : item[i]);
    }
    return arr;
  });

  let counter = 0;
  for (let i = 0; i < convertedString.length; i++) {
    for (let j = 0; j < convertedString[i].length; j++) {
      if (parseInt(convertedString[i][j], 16) <= 15) counter++;
    }
  }

  if (counter === separatedString.length * 2) return true;
  else return false;
}
module.exports = {
  isMAC48Address
};
