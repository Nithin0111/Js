// day4 - 21/07/21

// lesson 34 - declaring multiple values for variable

// variable a should have values of nithin,suresh and pandu

// array is a collection of value value might be of different data types

// most important datastructure
// arrays are mutable

var a = ["nithin", "pandu", "suresh"];
console.log(a);

//output only nithin

//lesson 35 - nesting arrays

// ["nithin","pandu"] => "nithin" ["nithin","suresh"] => pandu in variable b
var b = [
  ["nithin", "pandu"],
  ["nithin", "suresh"],
];
console.log(b);

//lesson 36 - changing values in array since arrays are mutable

var a = ["nithin", "pandu", "suresh"];
a[0] = "kittu";
console.log(a);
