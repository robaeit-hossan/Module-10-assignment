// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.
function calculateDifference(a,b){
    return a - b;
}
const result = calculateDifference(5, 3);
console.log(result); 

//2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num){
    return num % 2 !== 0;
}
console.log(isOdd(5));
console.log(isOdd(4)); 

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(arr){
    return Math.min(...arr);
}
const numbers = [5, 10, 2, 8, 1];
console.log(findMin(numbers));

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}
const evenNumbers = [5, 10, 2, 8, 1];
console.log(filterEvenNumbers(evenNumbers));

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr){
    return [...arr].sort((a, b) => b - a);
}
const numbersDescending = [5, 10, 2, 8, 1];
console.log(sortArrayDescending(numbersDescending));

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello Rihan"));

// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arr){
    return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}
const numbersAverage = [5, 10, 2, 8, 1];
console.log(findAverage(numbersAverage));

// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2019));