const arr = [1, 2, 'Hello', () => 100, { age: 100 }, 200, 'red', null, 2.5, 50, 7.999]

const newArr = arr.filter(item => Number.isFinite(item));
const sortedArr = [...newArr].sort((a,b) => b - a)
console.log(newArr);
console.log(sortedArr);