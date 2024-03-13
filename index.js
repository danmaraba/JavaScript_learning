// Conditionals > if, else if, else, ternary and switch
// if condition. This condition takes the following format
// if(condition){
//  Code Block> code block contains the code we want to execute if the condition returns a truthy value
// }
function isRose(cat) {
  if (cat === "rose") {
    return "Hi rose you are cute!";
  } else if (typeof cat === "string") {
    return `Hi ${cat}!`;
  } else {
    return "Sorry, please pass in a cat name!";
  }
}
isRose();

// Ternary- it is a short hand of if else conditional and must have a return keyword preceeding it
function isRose(cat) {
  return cat === "rose" ? "Hi rose you are cute!" : `Hi ${cat}!`;
}
isRose();

// switch- has many cases with statements. Executes the statement belonging to the matching case

function isRose(cat) {
  switch (cat) {
    case "rose":
      return "Hi rose you are cute!";
    case "ted":
      return "Hi ted nice to see you!";
    default:
      return `Hi ${cat}`;
  }
}
isRose();

// variable declarations are not expressions because they do not return a value. However, variable assignments and variable lookups are expressions because they resolve to a value contained in the variable.
// A block statement is a pair of curly braces used to group JavaScript statements. It plays a role in conditional statements, loops and functions. Block statements return the value of the last evaluated expression inside the curly braces.
// A JavaScript expression is a unit of code that returns a value.They include primitive values, arithmetic and string operations, ditto for comparison and assignment operations, variable assignments and variable lookups.
// You can establish whether a data type is truthy or falsy by passing it to the global Boolean object.For example, Boolean("Hello world")
// const age=10;
// const isAdult=age>=18
// isAdult;
// let isAdult;

// if(age>=18){
//     isAdult=true
// }else{
//     isAdult=false
// }

// isAdult

let age = 10;
const isOfAge = age >= 18 ? isAdult : "not of age";
isOfAge;
// function isOfAge(){
//     return age>=18?isAdult:'not of age'
// };
// isOfAge();
// It is important to note that the ternary expressions are necessary only if we are expecting return values other than the booleans
const height = 21;
let isTeenager;

switch (height) {
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    isTeenager = true;
    break;
  default:
    isTeenager = false;
}
isTeenager;

const order = "chicken curry";
let ingredients;
switch (order) {
  case "cheeseburger":
    ingredients = "bun, burger, cheese, lettuce, tomato, onion";
    break;
  case "hamburger":
    ingredients = "bun, burger, lettuce, tomato, onion";
    break;
  case "malted":
    ingredients = "milk, ice cream, malted milk powder";
    break;
  default:
    console.log("Sorry, that's not on the menu right now.");
    break;
}

// The default keyword is similar to the else clause in an if...else construction. It specifies a set of statements to run after all of the switch statement's cases have been checked. However, it is different from an else in that the only time it does not run is if the engine hits a break in one of the case statements. If you only want one code block in your switch statement to execute, you should always include the break keyword.
// Logical Operators
// The logical NOT operator (!) negates the truthiness of an expression. It is also known as bang operator. We can also use the two NOT operators to convert any value into a boolean.
// The logical AND (&&) operator takes two expressions i.e., expression1 && expression2; and returns the value of the first expression if the first expression is falsey and returns the value of the second expression if the first expression is truthy
false && 1;
console.log(NaN && false);
console.log("string" && "");
// To express the concept of between in JavaScript we use the logical operator AND (&&)
// JavaScript stores numbers in binary format (base-2), as a series of 1s and 0s, but it displays numbers in the more human-readable decimal format.
// JavaScript evaluates compound arithmetic operations by following the standard order of operations used in basic math. Anything in parentheses has the highest priority, exponentiation is second, then multiplication, division, remainder and finally addition and subtraction, in order from left to right.
// JavaScript provides three methods for rounding numbers i.e., Math.ceil()-rounds the number up, Math.floor()-rounds the number down and Math.round()-rounds the number either up or down, whichever is nearest.
console.log(Math.ceil(0.5));
console.log(Math.floor(0.4));
console.log(Math.round(0.4));
console.log(Math.round(0.6));
// Math.max-accepts a number of arguments and returns the highest value while Math.min accepts a number of arguments too and returns the least value.
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
// Math.random()-generates a random number between 0 (inclusive) and 1 (exclusive)

// Paramaters are locally-scoped variables that are usable to inside the function.
// Functions can be passed arguments, given default arguments etc.
function razzle(lawyer = "Billy", target = "em") {
  console.log(`${lawyer} razzle-dazzles ${target}`);
}
razzle();
razzle("Methuselah", "T'challah");

function saturdayFun(activity = "roller-skate") {
  console.log(`This Saturday, I want to ${activity}`);
}
// saturdayFun();
saturdayFun("run");
(function (baseNumber) {
  return baseNumber + 3;
})(2);
// JavaScript exhibits "function-level" scope. This means that if a function is defined inside another function, the inner function has access to all the parameters of, as well as any variables defined in the outer function.
function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  return innerFunction;
}
console.log(outer("Hello")("student", "JavaScript"));
const array = (function (thingToAdd) {
  const base = 3;
  return [
    function () {
      return base + thingToAdd;
    },
    function () {
      return base;
    },
  ];
})(2);
console.log(array[0]());
console.log(array[1]());
// Functions vs Arrow functions
// Functions                             Arrow Functions
// Defined with the function keyword     Defined with =>
// Hoisted                               Not hoisted
// Always need {}                        Does not always need {}
// Always need ()                        Single parameters don't require ()
// Returns require the return keyword    Implicit return

// JavaScript has different ways of writing functions i.e., function declaration, function expression and arrow functions
// function expression
const printBook=function(book){
    return book;
}
printBook("Miracle Morning");

// Arrow function
const printBookArrow=book=>book;
printBookArrow("Eloquent JavaScript");

// callback functions-when we pass a function into another function wherein it might be invoked, we refer to the passed function as a callback. The term derives from the fact that the function isn't invoked immediately-instead it's called back, or invoked at a later point. As an example, callback functions are commonly used to respons to user actions, we may define a callback to execute the appropriate code when the user clicks an element on the page.
function iReturnThings(thing){
    return thing;
}
console.log(iReturnThings(function(){return 4+5;})());