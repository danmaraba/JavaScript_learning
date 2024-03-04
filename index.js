// Conditionals > if, else if, else, ternary and switch
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