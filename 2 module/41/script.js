const person = {
    firstName: 'Alex',
    age: 20,
    isAdult: true,

    hello: function (){
        console.log(`Hi ${this.firstName}`);
    },

    info: function () {
        const split = () => {
            return `
                Name: ${this.firstName}
                Age: ${this.age}
                isAdult: ${this.isAdult ? 'Y': 'N'}
            `
        }
        console.log(split())
    },
    
}
person.hello();
person.info();

