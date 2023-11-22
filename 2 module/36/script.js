const num = 10;

const arr = Array.from(Array(num).keys())
console.log(arr);

{
    var sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += Math.pow(arr[i],2);
    }
    console.log(sum);
}

{
    var sum = 0;
    for (let i of arr){
        sum += Math.pow(i,2);
    }
    console.log(sum);
}

{
    var sum = 0;
    arr.forEach(item => sum += Math.pow(item,2));
    console.log(sum);
}

{
    const sum = arr.reduce((
        accumulator,currentValue) => accumulator + Math.pow(currentValue,2),
        0);
    console.log(sum);
}