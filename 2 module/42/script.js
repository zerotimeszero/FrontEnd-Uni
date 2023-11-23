const listUsers = [
    {
        firstName: 'Alex',
        birthday: '2000-10-15',
        isAdult: true,
    },
    {
        firstName: 'Ivan',
        birthday: '2005-02-15',
        isAdult: false,
    },
    {
        firstName: 'Yana',
        birthday: '1990-04-12',
        isAdult: true,
    },
];

const objectItem = listUsers[0];

function changeObjectMutate(object) {
    object.firstName = 'Эдуард'
}

function changeObjectImmutable(object) {
    const copy = {...object}
    copy.firstName = 'Эдуард';
    return copy;
}

// console.log(changeObjectMutate(objectItem))
console.log(changeObjectImmutable(objectItem))

console.log(objectItem)
console.log(listUsers)
