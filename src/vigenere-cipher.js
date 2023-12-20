const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  isDirectMode = true;
  #alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  constructor(mode = true) {
    if (typeof mode !== "boolean") throw new Error("Incorrect argument!");

    this.isDirectMode = mode;
  }

  #matchKey(message, key) {
    const msgLen = message.length;
    const keyLen = key.length;

    let str = "";

    let index = 0;
    let keyIndex = 0;
    while (str.length < msgLen) {
      if (message[index] === " ") {
        str += " ";
      } else {
        str += key[keyIndex % keyLen];
        keyIndex++;
      }

      index++;
    }

    return str;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    (message = message.toLowerCase()), (key = key.toLowerCase());

    if (message.length > key.length) key = this.#matchKey(message, key);

    let result = "";

    for (let i = 0; i < message.length; i++) {
      const msgChar = message[i];
      const keyChar = key[i];

      const msgI = this.#alphabet.indexOf(msgChar);
      const keyI = this.#alphabet.indexOf(keyChar);
      const targetI = (msgI + keyI) % 26;

      if (!this.#alphabet.includes(msgChar)) {
        result += msgChar;
        continue;
      } else {
        result += this.#alphabet[targetI].toUpperCase();
      }
    }

    return this.isDirectMode ? result : result.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    (encryptedMessage = encryptedMessage.toLowerCase()), (key = key.toLowerCase());

    if (encryptedMessage.length > key.length) key = this.#matchKey(encryptedMessage, key);

    let result = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
      const msgChar = encryptedMessage[i];
      const keyChar = key[i];

      const msgI = this.#alphabet.indexOf(msgChar);
      const keyI = this.#alphabet.indexOf(keyChar);
      const targetI = (26 + msgI - keyI) % 26;

      if (!this.#alphabet.includes(msgChar)) {
        result += msgChar;
        continue;
      } else {
        result += this.#alphabet[targetI].toUpperCase();
      }
    }

    return this.isDirectMode ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
