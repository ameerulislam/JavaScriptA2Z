var myName = "Ameer"; // var is not ES6 syntax it's javascript's syntax. 
myName = "Raees";  //Var can be re assigned to something else. This is something ES6 addresses with const
console.log(myName);

// Variables in javascript are case sensetive
var amInull; // not assigned to anything so it's undefined
console.log(amInull); 
amInull = null;
console.log(amInull); // assigned to null .. Null and Undefined is not the same

var exampleName = "Bob";
function sayName() {
    exampleName = "Chris"
    console.log(exampleName)
};
sayName();
console.log(exampleName);

// if variable is redeclared inside function then the outside variable and inside variable becomes different and they don't modify each other
var exampleName = "Bob";
function sayName() {
    var exampleName = "Chris" // using same variable and re declaring it inside is generally not a good practice and it's confusing
    console.log(exampleName)
};
sayName();
console.log(exampleName);

// cannot use reserved words in js as variable.. The list is as follows:
// https://www.w3schools.com/js/js_reserved.asp

// variable cannot be number or start with number
// you can start with special caracters such as _ $ 
// there are other crazy unicode stuff that can be used for reference use this https://stackoverflow.com/questions/1661197/what-characters-are-valid-for-javascript-variable-names#:~:text=Javascript%20Variables,can%20include%20numbers%20as%20well.