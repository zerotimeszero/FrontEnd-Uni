const divider = ' | '

Object.prototype.toString = function() {return `У студента ${this.name} `};
Object.prototype.valueOf = function() {return `в кошельке: ${this.money} рублей`}

const object1 = {
    name: 'Student1',
    money: 100,
}
const object2 = {
    name: 'Student2',
    money: 200,
}
const object3 = {
    name: 'Student3',
    money: 300,
}

const result = (`${object1}` + object1) + divider + (`${object2}` + object2) + divider + (`${object3}` + object3)
console.log(result)