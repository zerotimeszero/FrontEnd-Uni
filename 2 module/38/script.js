{
    console.log('Задание 1');
    const sum = (num, type='odd') => {
        var Sum = 0
        if (typeof num === 'number' || typeof num === 'bigint'){
            if (type=='odd'){
                for (let i = 1; i <= num + (num % 2); i += 2) Sum += i;
                return Sum;
            }
            if (type == 'even'){
                for (let i = 0; i <= num - (num % 2); i += 2) Sum += i;
                return Sum;
            }
            
        }
        return NaN;
    }
    console.log(sum(7))
}

{
    console.log('Задание 2');

    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;

    const calculate = (x,y,func) => func(x,y);

    console.log(calculate(1,2,add));
    console.log(calculate(1,2,subtract));
}

{
    console.log('Задание 3');

    const fn = (num) => {
        return subFn = (subNum) => {
            return subSubFn = (subSubNum) => {
                return subSubNum + subNum + num;
            }
        }
    }
    console.log(fn(1)(2)(3))
}