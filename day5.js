//day 5 - 23/07/21

//lesson 37 - accessing multidimensional arrays

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//print only 8
console.log(a[2][1]);

//lesson 37 - array push

var b = ["nithin", "pandu"];
// arrays mutable so it can change in size
// b = ["nithin","pandu","suresh"]

b.push("suresh");
// push always appends(adds) to end of array
console.log(b);

//lesson 38 - array pop

//same b array
b.pop();
//pop always removes last element
console.log(b);

//lesson 39 - array shift

//same b array
b.shift();
//shift always removes first element in array

console.log(b);

//lesson 40 - array unshift

//same b array
b.unshift("nithin");
// unshift always appends(adds) to first of array

console.log(b);

//lesson 41 - assignment
// make a list of groceries

var c = ["dal", "oil", "rice", "bread", "salt", "jam"];
console.log(c);

//create a multidimensional array
// 1st value stringor name,2nd value quantity

var d = ["dal", "salt"];
var e = [2, 4]; // single dimension array

//I asked multidimensional array
var q = [
  ["dal", 2],
  ["salt", 3],
];

//conditionals (off topic)
// if-else

// initialize a variable with value 2
var d = 3;
// if 2 is even print even else print odd;
//== compariasion operator
// a program to a number is even or odd
if (d % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//syntax of if
/*okavela eee brackets lo unnadi true aithey*/
// if (2 == 2) {
//   console.log("I am in if statement");
// } else {
//   console.log("i am in else");
// } //block of code

// assignments

// 1. Check if a number is prime or not
// 2. Find the length of array [1,2,3,4,5]
// 3. check if 5 exists in the array // google chey hints ->
// 4. check if "nithin" is pallindrome or not
// 5. check if 878 is even or not
// 6. var assignmentArray = ["one"]
// => append "two","three","four","five " to assignmentArray
// => after that delete three from assigmentArray
// => after that add "six"
