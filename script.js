/*
// VARIABLES
Variable is a container for info. (data)
4 ways to Declare variable
-Let
-Const
-Var  <--Don't use it
-(none) <--Don't use it

CONST --> Constant: Unchangeable
LET --> Can be changed later on

DATA TYPES
-String --> text, has quotation marks
-Boolean --> True or False
-Number --> no quotation marks
-

ASSIGNMENT OPERATOR
=
== EVALUATE IF THIS IS TRUE

let x = 5
let y = '5'

(True)
x == y  LOOSELY equivalent
(False)
x === y STRICTLY equivalent, DATE TYPES must match



alert('Hello World!'); Prompts user with message
const userAnswer=prompt('Do you workout?'); Asks user a question
console.log(userAnswer); Logs input to console
document.write(); Using JavaScript to put something on a page

CONDITIONAL LOGIC

if (this is true) {execute this code}
else {}
*/

alert("Hey Welcome to My Page!");

const userAnswer = confirm("Are you ready to workout?");

if (userAnswer == true) {
  let userWorkout = prompt("Nice! How do you want to workout?");
  alert("Sweet! Your answer has been logged to the console");
  console.log(userWorkout);
} else {
  let userCancel = prompt("Why Not?");
  alert("Maybe this website will convince you!");
}

{
  /* // const motoBtn = document.getElementById("moto-btn");
// motoBtn.addEventListener("Click", function());

//   alert("you can do it")
// }
//   const myButton = document.moto-btn("moto-btn");

//   myButton.addEventListener("click", function() {
//   alert("you can do it!");
// });
// console.log(userAnswer); */
}
document.write("Here are benefits on working out!");
