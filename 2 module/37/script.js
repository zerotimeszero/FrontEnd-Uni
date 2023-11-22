// 1
{
    console.log("Задание 1")
    function fn1(name){
        return `Привет, ${name}!`;
    }
    
    const fn2 = function(name){
        return `Привет, ${name}!`;
    }
    
    const fn3 = name => `Привет, ${name}!`;
    
    const fn4 = (name) => {
        return `Привет, ${name}!`;
    };
    
    console.log(fn1('Функция 1'));
    console.log(fn2('Функция 2'));
    console.log(fn3('Функция 3'));
    console.log(fn4('Функция 4'));
}

{
    console.log("\nЗадание 2");

    const season = (monthNum) => {
        if (monthNum < 1 || monthNum > 12) return 'Такого месяца нет';
        if (monthNum <= 2 || monthNum == 12) return 'Зима';
        if (monthNum >= 3 && monthNum <= 5) return 'Весна';
        if (monthNum >= 6 && monthNum <= 8) return 'Лето';
        return 'Осень';
    }

    console.log(season(5))
}

{
    console.log("\nЗадание 3");

    const fn = (...args) => {
        console.log(`Длина: ${args.length}`);
        console.log(`Максимальный элемент: ${Math.max(...args)}`);
        console.log(`Минимальный элемент: ${Math.min(...args)}`)
    }
    fn(1,23,6,78,4,4,2,-1);
}

