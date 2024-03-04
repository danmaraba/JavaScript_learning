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

// switch

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