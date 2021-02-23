const getInput = require("./get-input.js");
//1. take in our user's age. saving it in a variable
const userAge = getInput ();
//2. divide it by 2 and add 3
const mentalAge = userAge / 2 + 3;
//3. print out the result
console.log (mentalAge);
// print out the user's name in a sentence
console.log ('you are'  + userAge + "years old.");
// print out the user's mental age in a sentence
console.log ('your mental age is' + mentalAge + 'years old.');
//check if they want help
if (userAge === '--help'){
console.log ('this function returns your mental age.');
console.log ('please enter your age after "node mental-age.js" and a space.');
}

// you can also do it with two steps
const userAgeAlt2 = getInput();
console.log (userAgeAlt2 / 2 + 3);