const number = new Number(500)
console.dir(number)
console.dir(Number.prototype.__proto__)
console.dir(Number.prototype.__proto__.__proto__)


const bool = new Boolean(true)
console.dir(bool)
console.dir(Boolean.prototype.__proto__)
console.dir(Boolean.prototype.__proto__.__proto__)

const str = new String('Hello')
console.dir(str)
console.dir(String.prototype.__proto__)
console.dir(String.prototype.__proto__.__proto__)