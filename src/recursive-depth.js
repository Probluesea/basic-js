const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    let copyArr = [...arr];

    for (const elem of arr) {
      if (!Array.isArray(elem)) continue;

      copyArr = copyArr.flat();
      count += this.calculateDepth(copyArr);
      return count;
    }

    return count;
  }
}

module.exports = {
  DepthCalculator
};
