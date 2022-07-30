// Number, no float or integers everything is a number
console.log(10);
console.log(typeof 10);
console.log(typeof 10.5);
console.log(typeof "10");
console.log(10+6);
console.log(10%6);
console.log(10%5);
console.log(10*5);
console.log(10/5);
console.log(Math.random());
console.log(typeof Math.random());
console.log(Math.PI);
console.log(typeof Math.PI);
console.log("10"+213); // concatination
console.log(typeof "10"+213); // [BUG Altert] this one has interesting behavior
console.log(typeof ("10"+213));
console.log(parseInt("10")+10);
console.log(parseInt("10", 10)+20); // second argument of parseInt is base
console.log(parseInt("101", 2)+10); // binary, 101 is 5 in binary so the result is 5+10 = 15
console.log(parseInt("1015", 2)+10); // [BUG Altert] since 5 is not a valid binary it simply ignores it. the result is still 5+10 = 15
console.log(parseInt("hello")); // NaN
console.log(isNaN("yay")); // true
console.log(isNaN("1")); // [BUG Altert] false
console.log(isNaN(1)); // false
console.log(+"10"); // this will convert this into number

// Strings = Sequences of Unicode Characters
console.log("hello"); // both single and double qoute works
console.log("superAmeer".length);
console.log("super Ameer".length); // spaces are also counted
console.log("Ameer".charAt(0));
console.log("Hello " + "Ameer");
console.log("I'm upperCase".toUpperCase());