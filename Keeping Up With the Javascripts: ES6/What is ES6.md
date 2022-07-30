# Notes
Ecma script
Ecma and javascript are different
caniuse.com
const
compatability chart kangax.github.io/compat-table/es6
Arrow function
es6 is superset of es5
jsbin.com
brings modules natively instead of library in js
class declarations
new methods in stings and arrays
promies
transpiled from es6 into es5 to support older browsers
Babel is complier / transpiler in the background
webpack, babel plugin for webpack
babeljs.io
example 1
es6
const name = "Ameer"
es5
"use strict";
var name = "Ameer"
Babeljs.io will transpile this in the background
example 2
es6 
const sayHi = () => {
    console.log('Hi')
}
es5
"use strict";

var sayHi = function sayHi() {
    console.log('Hi);
};