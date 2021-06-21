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

// Arrow function

function square(x) {
  return x*x;
}

const newNumbers = numbers.map(square);
console.log("Squares: ", newNumbers);

// to make the code shorter we can that write as:

const newNumbers2 = newNumbers.map(function(x) {
  return x*x;
})
console.log("Squares2: ", newNumbers2);

// same code written as an arrow function looks like this:

const newNumbers3 = newNumbers2.map( x => {
// in case we have two patameters we have to write them between ( )
// const newNumbers3 = newNumbers2.map( (x, y) => {
  return x*x;
})
console.log("Squares3: ", newNumbers3);

// and this can be written even shorter as
const newNumbers4 = newNumbers3.map( x => x/3);
console.log("Numbers4: ", newNumbers4);
