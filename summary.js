// What is a string ?
// String is a sequence of characters.

var string = "pandu";

// variable declaration in js

var variableNAme;

// variable updatation

var a;

a = 10;

a = 11; // a will be 11

// NAN error not a number
// What is nan error ?
// Nan is a not a number error It causes when the program expects number but instead got something else then js throws // this error

// In js to show output
console.log();

// Datatypes in js
// Sir js is dynamically typed language
// we have only three data types in js 
// i.e number,string,boolean

// var a = 2.5;


// var a = true or 12 or "String";

// typeof is used to check the type of variable

// Operators
// + addition operator
// - substraction operator
// ** power operator
// * multiplication operator
// / division
// % modulus
// = assignment operator
// == comparision operator
// ++ Increment operator
// -- decrement operator


// Bodmas rule
// operator precedence in js
// b -> bracket of ()
// d -> division
// m -> multiplication
// a -> addition
// s -> substraction

// Incrementing operator

var a = 10;
a++; //11 -> a = a+1;

// decrementing operator

a-- //10 -> a = a-1;


// augment

// concatenation of strings

var string1 = "nithin";
var string2 = "pandu";
var result = string1+ string2;
// nithinpandu concatenation of strings

// a += b; -> a= a+b;

string1 += string2; // string1 = string1+string2

// a /= b -> a = a/b;
// same follows

// indexing of strings
// strings are immutable
// Immutable means once assigned cannot be changed

var newStr = "Pandu";

newStr[0] // P

newStr[0] = "N"; // Not possible String is immutable

newStr = "Nithin"; // can be possible


// find the length of newStr

console.log(newStr.length) // 6 -> Nithin


var arr = [12,"string",true]; // 1d array

arr[1] = "Nithin";

// print only 12;
console.log(arr[0])
// print string
console.log(arr[1]);

// length of array

arr.length

// change 12 to 14
arr[0] = 14;
console.log(arr[0]);

// 2d array
var twoDarr = [["tamatoes",12],["chicken",1],["mutton",2]];


// push,pop,shift,unshift

// add 12 to the array after true
arr.push(12);
arr.unshift(12);

//conditionals and checking condition and executing code according
// to the condition

// functions
// Functions (also called 'procedures' in some programming languages and 'methods' in most object oriented programming languages) are a set of instructions bundled together to achieve a specific outcome. Functions are a good alternative to having repeating blocks of code in a program.


// functions are a block of code which can be reused at anywhere in the to acieve the desired result or outcome

function isEven() {
    
}


