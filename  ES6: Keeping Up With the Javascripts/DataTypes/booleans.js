// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
// All values are truthy unless they are defined as falsy. That is, all values are truthy 
// except false, 0, -0, 0n, "", null, undefined, and NaN.
// Source https://developer.mozilla.org/en-US/docs/Glossary/Truthy

// True or Fales
console.log(true);
console.log(false);

var shouldbeTrue = true;
console.log(shouldbeTrue);
console.log(shouldbeTrue === true);

var shouldbeNull = null;

if (shouldbeNull === true){
    console.log("this is true")
}
else {
    console.log("this is false")
}

var hasContent = "yes ";
var doesnthavecontent = "";
console.log(Boolean(hasContent));
console.log(Boolean(doesnthavecontent));
console.log(doesnthavecontent);
console.log(typeof doesnthavecontent);

var isnotZero = 1; // = 0; will evaulate to false as 0 equals false in boolean
console.log(Boolean(isnotZero));
// non assigned variable is evaluates to undefined and type as undefined.
var notassigned;
console.log(notassigned);
console.log(typeof notassigned);

// NaN is falsy value
var isNotANumber = NaN;
console.log(Boolean(isNotANumber));

// Array is truthy value
myArray = [1,2];
myEmptyArray = [];
console.log(Boolean(myArray)); //true
console.log(Boolean(myEmptyArray)); //true

// Null is not undefined
console.log(null === undefined); //false




