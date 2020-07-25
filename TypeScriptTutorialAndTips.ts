// Make sure you have installed Node Typescript ts-node and nodemon 
// create a tsconfig.json file using tsc --init
// use es6 
// Run this using nodemon TypeScriptTutorialAndTips.ts

// This will contain concepts for both Javascript and TS

//  WHATS Typescript
// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
// Any browser. Any host. Any OS. Open source.
// TypeScript compiles to clean, simple JavaScript code which runs on any browser, in Node.js, or in any JavaScript engine that supports
// Types enable JavaScript developers to use highly-productive development tools and practices 
// like static checking and code refactoring when developing JavaScript applications.

// Types are optional, and type inference allows a few type annotations to make a big difference to the static 
// verification of your code. Types let you define interfaces between software components and gain insights into the behavior of existing JavaScript libraries.

// DOCS 
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://devdocs.io/javascript/

// _________________________________________________________________________________
// ************ STRINGS ******************
// https://devdocs.io/javascript/global_objects/string
// ---------------------------------------------------------------------------------

// The String global object is a constructor for strings or a sequence of characters.
// STRINGs are immutable in JS, you can't color[0] = "A", you have to make a new string

let color:string = "blue"; // make a variable names "color" of TYPE STRING whose value is equal to blue
console.log(color);
color = "red";
console.log(color);

// Template String 
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
console.log(sentence);


// SUPPORTS - 
// 1.) MULTIPLE or repeat a string
// redredred ------------------ In Python -> print(color * 5)
console.log(color.repeat(5));

// 2.) ADDING strings
// redred redemption ------------------ In Python -> print(color + color + ' redemption')
console.log(color + color + ' redemption');
console.log(color.concat(color).concat(' redemption'));
color = color + color + ' redemption';

// 3.) SLICING - taking out substrings from original strings
// red redem ------- In Python -> print(color[3:12])
console.log(color.slice(3, 12));

// 4.) REMOVING WHITESPACE from ends
//redred redemption redemption------- In Python -> print(color2.strip()) stripleft, stripright
let color2:string = '      '+ color + ' redemption      ';
console.log("BEFORE TRIMMING",color2)
console.log("After TRIMMING",color2.trim())


//5.) SPLITING string into parts(array) based on a string (that string gets deleted)
//[ 're', 're', ' re', 'emption' ]------- In Python -> print(color.split('d'))
// JS - color.split(str, maxlen)
console.log(color.split('d'));  // if d is in the end then its replaced by an empty string [re,emption,'']
// let y = 'ThisisaString';
// > y.split('is')
// [ 'Th', '', 'aString' ]
// ALSO
// y.split('is', 2)
// [ 'Th', '' ]


// Methods that are in PYTHON but NOT in JS/TS
// 1.) COUNT the no of occurences of character in a string
// PYTHON -----> color.count('red'); 
// JS, Use regex 
console.log((color.match(/red/g) || []).length); // search red OR return empty list





