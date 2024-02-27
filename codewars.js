//CodeWars Problems//

/* Problem 1: The highest profit wins!
Write a function that returns both the minimum and maximum number of the given list/array.
Solution: */

function minMax(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return [min, max];
}
  
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));
  
/* Problem 2: Convert a String to a Number!
We need a function that can transform a string into a number. What ways of achieving this do you know?
Solution: */

function stringToNumber(str) {
    return Number(str);
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));