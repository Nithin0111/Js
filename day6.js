// assignment solutions 21/07/21

//find the length of array [1,2,3,4,5];
var a = [1, 2, 3, 4, 5];
console.log(a.length);
//check if 5 exists in the array
console.log(a.includes(5));
//check if 878 is even or not
var a = 878;
if (a % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
//var assignmentArray = ["one"];
var assignmentArray = ["one"];
assignmentArray.push(" two", "three", "four", "five");

console.log(assignmentArray);
assignmentArray.splice(2, 1);
console.log(assignmentArray);
assignmentArray.push("six");
console.log(assignmentArray);

// day -6

//lesson 42 - write reusable functions with js

console.log("Hello pandu");
console.log("Hello pandu");

function hello() {
  console.log("Hello pandu");
}

function isEven(inputNumber) {
  if (inputNumber % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

isEven(10);
isEven(12);
isEven(11);

function changingName(name) {
  console.log("Hello" + name);
}

changingName("Nithin");
changingName("Pandu");

var arr = [1, 2, 3, 4, 5];

//check if first value on array is 5 or not
function includes(array) {
  if (array[0] === 5) {
    return true;
  } else {
    return false;
  }
}

var a = "hello";
console.log("hello");

// if function returns a value it doesn't show in output

5 == "5"; // true
5 === "5"; //
// string is a collection of characters
var s = "5liaremfioewr";

console.log(includes(arr));

var array2 = [5, 6, 7, 8, 9];

console.log(includes(array2));

// write a function to add 2 numbers

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 4), add(6, 11), add(98, 126));

//assignments

// function to do sum of three numbers
// function to print "my name is" name=nithin with name as input
// function to push value to array 2 arguments = array,value
// function to remove last value from array 1 argument = array
// function to remove specific value from array
// for eg: remove 4 from array that value will be given as argument = 2 arguments array,number lekapothey false

function addValueToArray(array, number) {
  array.push(number);
  console.log(array);
}

var inputArray = [1, 3, 4, 5];
addValueToArray(inputArray, 7);
