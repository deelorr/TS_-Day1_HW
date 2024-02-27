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