//lesson1: commenting

var sum = 2 + 3; //this is a code for adding 2 numbers
//Single line comment

/* 
This is a
multi line comment
*/


//lesson2: varvar decimal = 2.5;
console.log(a);

var myQuote = "I am nithin harsha";

// value 2.5  variable decimal
var decimal = 2.5;
console.log(decimal);

var isLoggedIn = true;

console.log(".........");
console.log("12" + 12);
//concatenation a + b => ab

//true or false means that is boolean data type
// number means integer data type
// 16772346723648771467247 bigint datatype

//isLoggedIn

// maths on strings
console.log("I am" + "Nithin");
// addition of strings


//Data types
// 2 -> number
// "2" -> string

// To run the js file in type
// node filename(day1).js 
// in compiler


//lesson 3
//just variable declaration without value
var a;
a = 2;
console.log(a);

//assignment operator

//lesson 4
// start a variable named b with 0 and later change it to 9
// changing variable values

var secondA = 0;
secondA = 9;
console.log(secondA);


//lesson 5

// initializing loggedIn with value false
var loggedIn = false;
//after entering the detailes username and passowrd change it to true
loggedIn = true;

// initialize means starting value or first value
// Nan error means not a number error in  js
// "string" + undefined => undefined

//lesson 6

//multi line
var a;
var b;
var c;

// declaring in a single line
// var a,b,c;
a = 5;
b = 10;
c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a,b,c);

//lesson 7

// best practice while declaring variables in js
//change "TOLOWERCASE" into camelcase

//toLowerCase //camelCase declartion

//change "STUDLYCAPVAR" to camelCase

// studlyCapVar //camelCasingDone

//lesson 8

//add 2 numbers and store value in a variable called sum

var sum = 2+5;
console.log(sum);

// + addition operator

//lesson 9

//substract 2 numbers and store value in variable called difference 

var difference = 5-2;
console.log(difference);

//lesson 10

var muliply = 5*2;
console.log(multiply);
//  operator * is multiplication and  ** operator in power operator 
//5*2 => 10 , 5**2 => 25 

//lesson 11

//divide 2 numbers and store it in divide variable

var divide = 8/2;
console.log(divide);


// *** Summary *** //
/* 
1st lesson commenting 
Single line comment is //
Multi line comment is the one in which we are writing this comment
2nd lesson variable declaration
var variableName;
default value is undefined
3rd lesson assinging values to variables
= assignemnt operator
to assign a variable
var variableName = 10;
var stringVariable = "I am a string";
4th lesson
initializing varibale with 0 and changing the variable
var variableName = 0;
variableName = 9;
5th lesson also about initialization
cannot add "string" with undefined will get error undefined
6th lesson
declaring variables with no value and then assigning values later
we can add a variable with itself;
a = 1; //In js memory a value is 1
what happens here is it takes previous value of a and adds it so 1+1 becomes 2 so new value of a become 2;
a = a+a; so here a = 1 + 1
a = a+a; here a became 2 so a = 2 + 2
in memory now a value is 4
lesson 7 about camelCasing
toLowerCase
isLoggedIn
lesson 8 adding 
+ operator
lesson 9 substracting
- operator
lesson 10 multiplication
* operator
lesson 11 division
/ operator

so operators learned are +,-,*,/,**
*/