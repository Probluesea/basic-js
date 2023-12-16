const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];

  for (let i = 0; arr.length > i; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];
    const next = arr[i + 1];
    const lastElem = result[i - 1];

    if (curr === "--double-next") next && result.push(next);
    else if (curr === "--discard-next") i++;
    else if (curr === "--double-prev") lastElem && result.push(lastElem);
    else if (curr === "--discard-prev") prev === result.at(-1) && result.pop();
    else result.push(curr);
  }

  return result;
}

module.exports = {
  transform
};
