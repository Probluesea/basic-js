const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  storage: [],
  getLength() {
    return this.storage.length;
  },
  addLink(value = "") {
    this.storage.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position <= 0 || position > this.getLength()) {
      this.storage = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.storage.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.storage.reverse();
    return this;
  },
  finishChain() {
    const finish = this.storage
      .map((item, index) => {
        if (this.getLength() < 2) {
          return `( ${item} )`;
        } else if (index === 0) {
          return `( ${item} )~`;
        } else if (index === this.storage.length - 1) {
          return `~( ${item} )`;
        } else {
          return `~( ${item} )~`;
        }
      })
      .join("");

    this.storage = [];
    return finish;
  },
};

module.exports = {
  chainMaker
};
