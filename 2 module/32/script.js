var a = '15.2';
var b = '20.3'

const sum = Number(a) + Number(b);

console.log(sum);

const roundedSum = Math.ceil(sum);
console.log(roundedSum);

const formatter = new Intl.NumberFormat('ru-RU',{
    style: 'currency',
    currency: 'RUB'
});

const formattedSum = formatter.format(roundedSum)
console.log(formattedSum);