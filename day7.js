// functions re-take

function pandu() {
  return "I am pandu";
}
// resusable piece of code

// function value is also undefined

pandu();

var a = "Introduction" + pandu(); //default value of variable is undefined
console.log(a);

pandu(); // var a = "I pandu";
console.log(pandu());

// parameters or arguments these are nothing but inputs to the function

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// do the same sum using var
var a = 1;
var b = 2;
console.log(a + b);

console.log(sum(111, 112));

var c = "Sum of variables is " + sum(17625, 37284);
console.log(c);

// lesson 44 - global scope and functions

var output1; // global scoped variable

function isEven(number) {
  output1 = "Even";
  if (number % 2 === 0) {
    console.log("Even");
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10)); // = true // true or false is boolean data type
// function => return

// lesson 45 - local scope and functions

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);

// undefined => var a; v/s not defined => not declared
// return that function value is whatever present after the return if there is console.log() the it outputs the content inside of console.log()

//lesson 46 - undefined in functions

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);

//Here the addSum function will result in undefined because there is no value to the function and there is nothing being printed so it will result as undefined

sum(112, 113); // => 225

var b;
b = sum(1, 1);
