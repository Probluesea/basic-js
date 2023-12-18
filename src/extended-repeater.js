const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  str = String(str);

  const opt = {
    repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
    separator:
      options.separator?.toString() || options.separator === null ? String(options.separator) : "+",
    addition:
      options.addition?.toString() || options.addition === null ? String(options.addition) : "",
    additionRepeatTimes: options.additionRepeatTimes ? options.additionRepeatTimes : 1,
    additionSeparator:
      options.additionSeparator?.toString() || options.additionSeparator === null
        ? String(options.additionSeparator)
        : "|",
  };

  console.log(str, opt);

  let result = [];
  for (let i = 0; i < opt.repeatTimes; i++) {
    let item = [`${str}`];
    let subArr = [];
    for (let j = 0; j < opt.additionRepeatTimes; j++) {
      subArr.push(`${opt.addition}`);
    }
    const addition = subArr.join(opt.additionSeparator);
    item.push(addition);

    result.push(item.join(""));
  }

  return result.join(opt.separator);
}

module.exports = {
  repeater
};
