const listUsers = [
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
    {
        firstName: 'John',
        birthday: '1993-07-01',
        isAdult: true,
    },
    {
        firstName: 'Roma',
        birthday: '2018-05-11',
        isAdult: false,
    },
    {
        firstName: 'Alex',
        birthday: '2000-10-15',
        isAdult: true,
    },
]

const filteredList = listUsers.filter((item) => item.isAdult);

const transformedList = filteredList.map(user => {
    const date = new Date(user.birthday);
    const formattedDate = date.toLocaleDateString('ru-RU');
    return { ...user, birthday: formattedDate };
});

const sortedList = [...transformedList].sort(item => item.firstName.localeCompare())

console.log(filteredList)
console.log(transformedList)
console.log(sortedList)