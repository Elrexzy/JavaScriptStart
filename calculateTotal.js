function multiplication(numberOne, numberTwo) {
    let total = numberOne * numberTwo;
    return total;
}

console.log(multiplication(9.5, 4.5));
console.log(multiplication(2.5, 3));


function subtraction(numberOne, numberTwo) {
    let total = numberOne - numberTwo;
    return total;
}

console.log(subtraction(42.75, 7.5));
console.log(subtraction(45.5, 3.5));


function division(numberOne, numberTwo) {
    let total = numberOne / numberTwo;
    return total;
}

console.log(division(35.25, 42));


let number = 9;
let sum = 0;

for (let index = 1; index <= number; index++) {
    sum = sum + index;
}

console.log(sum);

let radius = 5.5;
let pi = 3.14
let area = radius * radius * pi;
let perimeter = 2 * radius * pi;

function areaOfCircle(numberOne, numberTwo, numberThree){
    let perimeter = numberOne * numberTwo * numberThree;
    return perimeter;
}

console.log(areaOfCircle(2, 5.5, 3.1428));

function areaOfCircle(numberOne, numberTwo, numberThree){
    let area = numberOne * numberTwo * numberThree;
    return area;
}

console.log(areaOfCircle(5.5, 5.5, 3.1428));

let width = 4.5;
let height = 7.9;

function areaOfRectangle(width, height){
    let area = width * height;
    return area;
}

console.log(areaOfRectangle(4.5, 7.9));



  
