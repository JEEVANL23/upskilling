// let js = 'amazings';
// console.log(40+30);
// console.log('jeevan');

// let firstname = 'Jeevan';
// console.log(firstname); 

// DATA TYPES

// console.log(typeof 23)
// console.log(typeof 'jeevan')
// console.log(typeof true)

// undefined is value taken by the variable that is not yet defined (empty variable)

// let year;
// console.log(typeof year)
// year = 1189
// console.log(year)
// console.log(typeof year)

// let age = 30;
// age = 31;


// const age = 10
// if (age>=18) {
//     console.log("Sarah can start driving")
// } else{
//     const yearLeft = 18 - age
//     console.log(`Sarah cannot start driving , try after ${yearLeft} years`)
// }


// // type conversions
// const inputYear  = '2000';
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number("Jeevan"));
// console.log(typeof NaN);
// console.log(String(23), 23);


// // type coercion
// console.log('i am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('10' * 3 );
// console.log('10' * '3');

// let n = '1' + 1;
// n = n - 1
// console.log("",n)


// 5 falsy values : 0 , '', undefiend , null , NaN  
// everything else is truthy values, empty objects also truthy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean("Jeevan"));
// console.log(Boolean({}));


// Equality Operator
// const age = 18;
// if(age === 18){
// }

// === true will work for this

// = is assignment
// === strict euqality operation , it doesnt do type cohercion  , returns only if true
// == loose euqlity operation , it does type cohercion

// if(age == '18'){}

// white in console is string

// Boolean Logic
// Logical Operators
// && || ! operators

// Switch Statement
// Statement and Expressions

// expressions {words} produces values and statement doesnt produce value by it self

// COnditional / Ternary Operator

//  condition ? true (this will be executed) : false(this will be executed)


// #########################################################################
// Section # - Fundamental Part 2

'use-strict';
// 'use strict'; // strict mode - it enforces strict parsing and error handling in the code at runtime

// function declaration is different , function expression is different
// FD 
// const age1 = calcAge1(1991);
// function calcAge1(birthYear){
//     return 2025 - birthYear
// }


// FE
//  const calcAge2 = function(birthYear){
//     return 2025 - birthYear
// }
// const age2 = calcAge2(1991);


//Arrow Functions

// const fn_name = (params) => {
// body    
//}


// Function calling another function


// Intro to Arrays - DS

// const friends = ['abc', 'xyz', 'efg'];

// const year = new Array(198, 429, 729);


// .length = gives the length of array
// .length -1 = retrives the index number
// array can hold different values at same time

// ARRAY Methods-operations

// PUSH - adds element to end of an array, returns length
// UNSHIFT - adds element to beginning of the array, returns length
// POP - removes the last element - opp of push , returns the removed element
// SHIFT - removes first element  - opp of unshift, returns removed element
// IndexOf - index of the specified element , if ele not present returns -1, strict data type
// Includes - if ele is preset returns true else false, strict data type
//  


// friends.push("hello")
// console.log(friends)


// OBJECTS - DS
// can store different data types
// unstructured data

// const jeev = {
//     fn: "jeevan",
//      ln: "l"
//     }


// console.log(jeev.fn);
// console.log(jeev['ln']); // string should be there

// OBJECTS METHODS(functions)
// we can write methods inside objects

// this - object calling the method

// const jeevan = {
//     firstName: 'jeevan',
//     secondName: 'l',
//     birthYear: 2000,
//     job: 'Software Developer',
    
//     calcAge: function(birthYear){
//         console.log(this)
//         return 2025 - this.birthYear;
//     }
// }

// console.log(jeevan.calcAge());

// array is a special type of objects, and it has built in methods to manipulate them.


//#################################### LOOPS ################## 
// it is a control structure


// for loops keeps running while the condition is true
// for(let rep = 1; rep <= 10; rep ++){
//     console.log(`Lifiting weight repetition ${rep}`);
// }

//  const jeevan = [
//     'Jeevan',
//     'L',
//     2025 - 2000,
//     'software developer',
//     ['a','b','c'],
//     true
//  ]

// const types = [];
// const types2 = [];

// for(let i = 0; i < jeevan.length ; i++){
//     console.log(jeevan[i]);
//     types2[i] = typeof jeevan[i];
//     types.push(typeof jeevan[i]);
//     console.log(types);
//     console.log(types2)
// }


// continue break
// continue is to exit the current iteration of the loop and continue to next
// break is to terminate the whole loop

// for(let i = 0; i < jeevan.length ; i++){
//     if (typeof jeevan[i] !== 'string') {
//         continue
//     }
//     console.log(jeevan[i] , typeof jeevan[i]);

// }

// for(let i = 0; i < jeevan.length ; i++){
//     if (typeof jeevan[i] === 'number') {
//         break
//     }
//     console.log(jeevan[i] , typeof jeevan[i]);

// }


// looping array backwards and loop in the loop

 const jeevan = [
    'Jeevan',
    'L',
    2025 - 2000,
    'software developer',
    ['a','b','c'],
    true
 ]


for(i =  )