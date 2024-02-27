// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: {age: number}

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]


// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: needs the realeaseYear

let prices = [100, 200, 300];
prices[0] = '$100';
// A: needs to be a number

function myFunc(a: number, b: number): number {}
// A: needs something to do

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