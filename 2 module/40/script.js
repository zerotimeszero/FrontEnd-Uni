const info = ({firstName,lastName,age=18}) => {
    console.log(`Меня зовут ${firstName} ${lastName}\nМне ${age} лет`);
}

const obj = {
    firstName: 'Иван',
    lastName: 'Иванов',
}

// const name = 'Иван2';
// const last = 'Иванов2';
// const age = 50;

let {firstName: name, lastName: last,age: age} = obj;

info(obj);
console.log('----');
info({firstName: name, lastName: last, age});