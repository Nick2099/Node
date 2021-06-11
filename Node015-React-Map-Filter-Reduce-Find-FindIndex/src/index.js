import emojipedia from "./emojipedia";

var numbers = [3, 12, 2, 18, 5];

//Map -Create a new array by doing something with each item in an array.

console.log(numbers);

function double(number) {
    return number*2;
}
var numbersDouble = numbers.map(double);
console.log(numbersDouble);

var numbersTriple = numbers.map(function(number) {
    return number*3
});
console.log(numbersTriple);

var numbersFourFold = [];
numbers.forEach(number => {
    numbersFourFold.push(number*4);
});
console.log(numbersFourFold);

var numbersFiveFold = [];
function fiveFold(x) {
    numbersFiveFold.push(x*5);
}
numbers.forEach(fiveFold);
console.log(numbersFiveFold);

//Filter - Create a new array by keeping the items that return true.

const filteredNumbers = numbers.filter(function(num) {
    return num<10;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

var sum = 0;
numbers.forEach(function(currentNumber) {
    sum += currentNumber;
});
console.log(sum);

sum = 0;
sum = numbers.reduce(function(accumulator, currentNumber) {
    console.log("accumulator: ", accumulator, "currentNumber", currentNumber);
    return accumulator+currentNumber;
});
console.log(sum);

//Find - find the first item that matches from an array.

const fromFilter = numbers.find(function(num) {
    return num>10;
});
console.log(fromFilter);

//FindIndex - find the index of the first item that matches.

const fromFilter2 = numbers.findIndex(function(num) {
    return num>10;
});
console.log(fromFilter2);

// Practice

console.log(emojipedia);
let tmpMeaning = emojipedia.map(function(x) {
    return x.meaning.substring(0,99);
});
console.log(tmpMeaning);
