var readLineSync = require('readline-sync');
var myAge = readLineSync.question("What is your age");
// console.log(typeof(myAge)); to check the type of any variable
if(myAge === "25"){
  console.log("right")
} else {
  console.log("wrong")
}
console.log(myAge);

//static program

// var myAge = 25;

// if(myAge === 25){
//   console.log("Right")
// } else {
//   console.log("Wrong");
// }


