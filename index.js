// Conditionals > if, else if, else, ternary and switch
// if condition. This condition takes the following format
                        // if(condition){
                            //  Code Block> code block contains the code we want to execute if the condition returns a truthy value
                        // }
function isRose(cat){
    if(cat==='rose'){
        return 'Hi rose you are cute!'
    } else if (typeof cat==='string'){
        return `Hi ${cat}!`
    } else{
        return 'Sorry, please pass in a cat name!'
    }
};
isRose();

// Ternary- it is a short hand of if else conditional and must have a return keyword preceeding it
function isRose(cat){
    return cat==='rose'?'Hi rose you are cute!':`Hi ${cat}!`
}
isRose();

// switch- has many cases with statements. Executes the statement belonging to the matching case

function isRose(cat){
    switch(cat){
        case 'rose':
            return 'Hi rose you are cute!'
        case 'ted':
            return 'Hi ted nice to see you!'
        default:
            return `Hi ${cat}`;
    }
};
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

let age=10;
const isOfAge=age>=18?isAdult:'not of age';
isOfAge
// function isOfAge(){
//     return age>=18?isAdult:'not of age'
// };
// isOfAge();
// It is important to note that the ternary expressions are necessary only if we are expecting return values other than the booleans
const height=21;
let isTeenager;

switch(height){
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        isTeenager=true;
        break;
    default:
    isTeenager=false;
};
isTeenager;

const order='chicken curry'
let ingredients;
switch (order) {
    case 'cheeseburger':
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
    break;
    case 'hamburger':
    ingredients = 'bun, burger, lettuce, tomato, onion';
    break;
    case 'malted':
    ingredients = 'milk, ice cream, malted milk powder';
    break;
    default:
    console.log("Sorry, that's not on the menu right now.");
    break;
};

