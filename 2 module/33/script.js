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

console.log('NUMBER')
console.log(Number(undef));
console.log(Number(nothing));
console.log(Number(bool));
console.log(Number(num));
console.log(Number(bigNum));
console.log(Number(str));
console.log(Number(obj));
console.log(Number(arr));
console.log(Number(fn));
console.log(Number(date));

console.log('STRING')

console.log(String(undef));
console.log(String(nothing));
console.log(String(bool));
console.log(String(num));
console.log(String(bigNum));
console.log(String(sym));
console.log(String(str));
console.log(String(obj));
console.log(String(arr));
console.log(String(fn));
console.log(String(date));

console.log("BOOLEAN")

console.log(Boolean(undef));
console.log(Boolean(nothing));
console.log(Boolean(bool));
console.log(Boolean(num));
console.log(Boolean(bigNum));
console.log(Boolean(sym));
console.log(Boolean(str));
console.log(Boolean(obj));
console.log(Boolean(arr));
console.log(Boolean(fn));
console.log(Boolean(date));


