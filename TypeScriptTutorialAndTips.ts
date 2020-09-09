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
// 1. ) ************ STRINGS ******************
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


// 6.)UPPERCASE
//  PYTHON -- color.upper() 
//  JS - color.toUpperCase()
// y.toUpperCase()
// 'THISISASTRING'

// 7.) LOWERCASE ---- PYTHON y.lower()
// y.toLowerCase()
// 'thisisastring'

// 8.) STRING FORMATTING
// PYTHON ------- "this is {} and {}".format("sad", "bad") ---> this is sad and bad


// Methods that are in PYTHON but NOT in JS/TS
// 1.) COUNT the no of occurences of character in a string
// PYTHON -----> color.count('red'); 
// JS, Use regex 
console.log((color.match(/red/g) || []).length); // search red OR return empty list



// **********************************************************************************
// **********************************************************************************
// **********************************************************************************
// 07-09-2020
// 2. ) ************ VAR VS LET ******************


// var's scope is in the whole fuction while LET's scope is with in  aa block
// The below is valid for VAR, but not for let
function demo(){
    if (a == 1){
        console.log(a);
    }
    else{
        console.log(a)
    }
    var a;
}
// re declaring is valid for VAR, not for let
var a = 10;
var a = 20;

// CONCLUSION: Use let whenever possible esp in closures and loops

// **********************************************************************************
// **********************************************************************************
// **********************************************************************************
// 3. ) ************ CONST and ARROR FUNCTIONS ******************

// CONST is like LET, scoped
// Use it when declaring constants or functions...the value should not change
// The have to be initilized initially

let valid; // This is valid
// const invalid; This is not
let radius = 10
const pie = 3.14;   // Valid

const obj = {
    name:"simp"
};
console.log(obj)
// Something inside the obj can be modified tho but not the actual obj

obj.name = "son";
console.log(obj)


// ARROW FUNCTION
// new syntax just like lambda functions of python but can hae multiple lines

//  NORMAL FUNCTION
const areaNormie = function(radius:number){
    return pie * radius;
}

console.log(areaNormie(20));

// Arrow Function

const areaNew = (radius:number) => {
    return pie * radius
}

// OR, variations

const areaNew1 = (radius:number) => pie * radius

console.log(areaNew1(20));


// **********************************************************************************
// **********************************************************************************
// **********************************************************************************
// 4. ) ************ THIS keyword ******************

// THIS DOESNOT WORKS as the this is of the previous func scope
// var thisDemo = {
//     id: 1,
//     demo : function() {
//         setTimeout(function(){console.log(this.id)}, 1000)
//     }
// }

// THIS WORKS
var thisDemo = {
    id: 1,
    demo : function() {
        var self = this
        setTimeout(function(){console.log(self.id)}, 1000)
    }

}

// ANOTHER, an arrow function does not creates its own this, so it uses the global one

var thisDemo = {
    id: 1,
    demo : function() {
        setTimeout(() => {console.log(this.id)}, 1000);
    }

}

thisDemo.demo();



// 5. ) ************ DEFAULT PARAMETERS ******************
// They are just like python, es6 feature
// WE can use 1st parameter inside 2nd param as default value, and can even use function call as default value

let someDefault = function(val1:number=10, val2:number= val1*0.1){
    console.log(val1 + val2);
}

someDefault();  // 11
someDefault(20);    // 22
someDefault(20,30); // 50

// 7. ) ************Rest Operators******************
// they are ...

let someFunction = function(message:any, ...colors:any){
    console.log(message);
    console.log(colors);
}
// The arguments are converted into list
// They can also be used to create a copy of a list
someFunction("Some Colors", "RED", "BLUE", "GREEN");

// SPREAD OPERATOR --> ...
// it also breaks the array into indivisual elements
let c = ["BLACK", "PURPLE", "YELLOW"];
someFunction("MORE COLORS", ...c);


// 8. ) ************Object Literals******************
let firstName:string = "Harry";
let lastName:string =  "Potter";
let fn = "full name";

let obj2 = {
    firstName,
    lastName,
    [fn]: "Jyoti Prakash"
}

console.log(obj2.firstName);
console.log(obj2.lastName);
console.log(obj2[fn]);
// Notice how we are not doing firstName:firstName, also check the fn
// The same works for return types of the fuctions -- return {some, data, da(){}}






