// Day 3 - 21/07/21

// lesson - 24 Escaping seuencing strings

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// String should have no spaces but they each have to be on a new line and in second line there should tab space and start with backslash

// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

// lesson 25 - concatenating strings
var str1 = "My String ";
var str2 = "Your String";

//add two strings and store in variable result;
var concatenatedResult = str1 + str2;
console.log(concatenatedResult);

//lesson 26 - concatenating strings with += operator

var newStr = "I am";

// add pandu to newStr string
newStr += "pandu";
console.log(newStr);

//lesson 27 - constructing strings with variables

// ->  dom; pandu value = han; o'conner;
// dom han o'conner

var pandu = "han";
var result = "dom " + pandu + " o'conner";

// pandus answer
console.log(result);

//lesson 28 - appending variables to strings

var n1 = "I am a ";
var n2 = "good boy";

// output should be I am a good boy
n1 += n2;
console.log(n1);

//lesson 29 - finding length of string

var lenStr = "SureshPanduNithin";

// find the length of the string starting from 0

console.log(lenStr.length);

// lesson 30 - finding first character in a string

var indexedStr = "Nithin";

// output only n
console.log(indexedStr[0]);

console.log(indexedStr[5]);

// lesson 31 - understanding string immutabilty
// immutable means once created cannot be changed

var n1 = "nithin"; // 2041 ->
n1 = "suresh"; // suresh 2067 n1 !== 2041 -> 2067

// lesson 32 - finding nth index in string and nth to 3(or n) number in string

var longStr = "Iamnithina";

console.log(longStr[longStr.length - 1]);
console.log(longStr[longStr.length - 1]);
console.log(longStr[longStr.length / 2 - 3]);

// lesson 33 done in freecodecamp
