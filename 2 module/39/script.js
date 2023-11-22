const products = [
    {
        id: 1,
        name: 'Яблоки',
        price: 15,
    },
    {
        id: 2,
        name: 'Бананы',
        price: 30,
    },
    {
        id: 3,
        name: 'Вишня',
        price: 150.23,
    },
    {
        id: 4,
        name: 'Дыня',
        price: 85.5,
    },
    {
        id: 5,
        name: 'Тыква',
        price: 235.99,
    }
];

const cart = [
    {
        id: 4,
        quantity: 3
    },
    {
        id: 5,
        quantity: 2
    },
    {
        id: 3,
        quantity: 10
    }
];

const formatter = new Intl.NumberFormat('ru-RU',{
    style: 'currency',
    currency: 'RUB'
});

function getTotal(cart, products) {
    let sum = 0;
    cart.forEach(item => {
        sum += item.quantity * products.find(element => element.id == item.id).price;
    })
    return formatter.format(sum.toFixed(2));
}

const result = getTotal(cart, products);
console.log(result);