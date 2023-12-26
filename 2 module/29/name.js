const firstName = 'Albus';
const lastName = 'Dumbledore'
const middleName = 'Percival Wulfric Brian'
const yearOfBirth = '1881'
const fieldOfStudy = 'Defence Against the Dark Arts'

const method1 = "First name: " + firstName + '\n' + "Last name: " + lastName + '\n' + "Middle name: " + middleName + "\n" + "Year of birth: " + yearOfBirth + "\n" + "Field of study: " + fieldOfStudy;

const method2 = `First name: ${firstName}
Last name: ${lastName}
Middle name: ${middleName}
Year of birth: ${yearOfBirth}
Field of study: ${fieldOfStudy}`;

console.log(method1);
console.log(method2);