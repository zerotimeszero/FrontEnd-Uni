// 1
const undef = undefined;
const nothing = null;
const bool = true;
const num = 500;
const bigNum = BigInt(100000);
const sym = Symbol('a');
const str = 'Hello';
const obj = new Object({name: 'Alex'});
const arr = [1,2,3]
const fn = function(){return 5+5};
const date = new Date();

console.log(undef)
console.dir(undef)

console.log(nothing)
console.dir(nothing)

console.log(bool)
console.dir(bool)

console.log(bigNum)
console.dir(bigNum)

console.log(sym)
console.dir(sym)

console.log(str)
console.dir(str)

console.log(obj)
console.dir(obj)

console.log(arr)
console.dir(arr)

console.log(fn)
console.dir(fn)

console.log(date)
console.dir(date)

// 2

console.log(typeof undef);
console.log(typeof nothing);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof bigNum);
console.log(typeof sym);
console.log(typeof str);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);
console.log(typeof date);