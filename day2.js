// Day - 2 19/07/2021

// lesson 12 - incrementing operator
// increment operator is ++(double plus)
var a = 1;
a++; //equal to a = a+1; short form is a++
a++;
console.log(a); //output => 3

//lesson 13 - decrement operator
// -- is decrement operator
var b = 10;
b--;
console.log(b);

//lesson 14 - decimal nmumbers
//floating point numbers float datatype
var c = 2.5;

//typeof used to check type of variables

//lesson 15 - multiplying decimals

var c = 2.5 * 2.5;
console.log(c);

//lesson 16 - dividing decimals

var d = 4.4;
var e = 2;
var result = d / e;
console.log(result);

// lesson 17 - finding remainder in js
// Important
var num1 = 10;
var num2 = 3;
var quotent = num1 / num2; //3.3333333333..........
var remainder = num1 % num2;
console.log(remainder);

var checkEven = 10;
var checkEvenResult = checkEven % 2;
//% operator is used to find remiander
console.log(checkEvenResult);

//lesson 18 - augmented addition

var augmentAddedNumber = 10;
augmentAddedNumber += 5;
// above line is same as this => augmentAddedNumber = augmentNumber + 5;
console.log(augmentAddedNumber);

//lesson 19 - augment substraction

var augementSubstractNumber = 10;
augementSubstractNumber -= 5;
console.log(augementSubstractNumber);
// line 56 is same as => augementSubstractNumber = augementSubstractNumber - 5;

//lesson 20 - augment multiplication

var augmentMultiplyNumber = 10;
augmentMultiplyNumber *= 5;
console.log(augmentMultiplyNumber);

//lesson 21 - augment division

var augmentDivideNumber = 10;
augmentDivideNumber /= 5;
console.log(augmentDivideNumber);

//lesson 22 - declaring string variables

var string = "I am a string";
console.log(string);

//lesson 23 - escaping literal qoutes in string

var newString = 'Quotes by nithin "I am inevitable" ';
console.log(newString);

//lesson 24 - 25 => skipped

// lesson 26 - concatenating strings

var string1 = "I am";
var string2 = "String";

//concatenating strings is nothing but adding strings
var concatenatedStrings = string1 + string2;
console.log(concatenatedStrings);
