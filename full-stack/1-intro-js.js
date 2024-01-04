'use strict';
// 1.1: What is JavaScript?
// Variables 
// variables declared using the var keyword
// Variables declared using the var keyword can be redeclared and reassigned
var name = 'John';
var age = 30;
var hasHobbies = true;

// variables declared using the let keyword
let name1 = 'John';
let age1 = 30;
let hasHobbies1 = true;

// variables declared using the const keyword
const name2 = 'John';
const age2 = 30;
const hasHobbies2 = true;
 
// console.log() writes things into the console 
// alert() creates a pop-up, 
// document.write()—as the name implies—will write something on your document. The document, here, represents the DOM, the JavaScript object made from your HTML code. document.write() is another built-in function.



// 1.2: JavaScript Basics Part 1
// Primitive Data Types
/* Primitive data types, as the name suggests, are the most basic type of data. */


// 1 - String
// A string is a sequence of characters. It can be any length and can contain any letters, numbers, symbols, and spaces.
// String values are surrounded by single or double quotation marks.
// String values can be assigned to variables.
let text = 'Hello World';
let escapedText = 'He said, "Hello World!"'; // escaping the double quote
let escapedText1 = "He said, 'Hello World!'"; // escaping the single quote
let escapedText2 = 'He said, \'Hello World!\''; // escaping the single quote

// JavaScript has a lot of nifty built-in functions, not only for math but also for converting data types. Try, for example, first '2' + 2 and then parseInt('2') + 2 before you keep reading.

// Example
let name3 = 'John';
let wellcomeMessage1 = 'Hello I am';
let wellcomeMessage2 = 'and I say to you: "Hello!"';

//  Template literal is a string that allows embedded expressions, which will be evaluated and then turned into a resulting string. Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

let fullTextMessages = `${welcomeMessage1} ${name3} ${welcomeMessage2}`;
console.log(fullTextMessages); // Hello I am John and I say to you: "Hello!"

let myName = 'John';
let aboutMe1 = 'Lorem ipsum dolor sit';
let aboutMe2 = 'amet consectetur adipisicing elit';
let allStories = `${aboutMe1} ${myName} ${aboutMe2}`;
console.log(allStories); // Lorem ipsum dolor sit John amet consectetur adipisicing elit

// Variables are included with a dollar sign followed by curly braces: ${ … } 
let name4 = 'John';
let age4 = 32;
let message = `Hello!
This is a longer message here.
My name is: ${name4},
and I'm ${age4}.`;
console.log(message); // Hello! This is a longer message here. My name is: John, and I'm 32.


// 2 - Number
// Numbers are integers or floating-point numbers.
// Numbers can be assigned to variables.
// Numbers can be used in arithmetic operations.
// Numbers can be used in comparison operations.
// Numbers can be used in logical (Boolean) operations.
let number1 = 1;


// 3 - Boolean
// A Boolean value is either true or false.
// Boolean values can be assigned to variables.
// Boolean values can be used in comparison operations.
// It’s important to be aware that JavaScript also considers the number 1 to be equal to true and 0 to be equal to false. 
let isTrue = true;
let isFalse = false;


// 4 - Null
// null indicates the value has been intentionally set to be empty
// Null is a special value that represents the absence of a value.
let emptyValue = null;


// 5 - Undefined
// undefined indicates that the value was never set
// Undefined is a special value that represents an uninitialized value.
let uninitializedValue = undefined;


// 6 - Symbol
// Symbols are new in ES6. They are unique identifiers, useful in more complex coding.
// Symbols are a new primitive type in ES6.


// Complex Data Types
// Complex data types are made up of primitive data types. They are more complex than primitive data types because they can hold multiple values.


// 1 - Objects
// Objects are collections of properties. Properties are a key-value pair, where the key is a string and the value can be anything. Properties are separated by commas. Objects are enclosed in curly braces. 
let person = {
    name: 'John',
    age: 32,
    hobbies: ['reading', 'cooking', 'sports'],
    hasPets: true,
    child: {
        name: 'Jane',
        age: 5
    }
};
person.name = 'Yuriy';
person.child.name = 'Veronika';

// The rule is: whenever you open parentheses, curly braces, or square brackets, and have a line break before you write the closing parentheses/brackets, you indent.

// Using Dot Notation with Objects 
// You can access the properties of an object using dot notation.
// Example
console.log(person.name);   // Yuriy
console.log(person.age); // 32
console.log(person.hobbies); // ['reading', 'cooking', 'sports']
console.log(person.hasPets); // true
console.log(person.child.name); // Veronika
console.log(person.child.age); // 5

// In addition, deleting a property from an object is as easy as using the delete command:
delete person.age;
console.log(person.age); // undefined

// You can set new properties to an already defined object, for example:
person.email = 'test@test.com';
console.log(person.email); // test@test.com


//Using Square Brackets with Objects
// You can also access the properties of an object using square brackets. This is useful when you want to use a variable to access a property.
// Another way to access an object’s properties is by passing the key as a string (i.e., text) between square brackets.

// Example
let personName = 'Yuriy';
let personsAges = {
    John: 32,
    Jane: 5,
    Yuriy: 30
};
console.log(personsAges[personName]); // 30

// This way of accessing properties can be utilized when you don’t know what the exact syntax of the key is, but you do know that you have it stored in some variable.


// 2 - Arrays
// Arrays are collections of values. Values can be any data type. Arrays are enclosed in square brackets. Values are separated by commas. 

// array of strings
let hobbies = ['reading', 'cooking', 'sports'];

// array of numbers
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ['text', 1, true, null, undefined, numbers, { name: 'John' }];  // mixed array
console.log(mixedArray[5].name); // John
console.log(mixedArray[5] [2]); // 3

let emptyArray = []; // empty array

// array of objects
let persons = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 5 },
    { name: 'Yuriy', age: 30 }
];

// array of arrays
let nestedArray = [
    ['John', 32],
    ['Jane', 5],
    ['Yuriy', 30]
];
console.log(persons[2].name, persons[2].age); // Yuriy 30

// You can access the elements of an array using square brackets. The index of the first element is 0, the index of the second element is 1, and so on.
// Example - array of strings
console.log(hobbies[0]); // reading

// Example - mixed array
mixedArray = { name: 'Yuriy' };
console.log(mixedArray[6].name); // Yuriy

// The .length property of an array returns the number of elements in the array.
// Example
let numbers1 = [123, 245, 345, 444, 534];
console.log(numbers1.length); // 5
// The last element of an array can be accessed by using the .length property minus 1. 
console.log(numbers1[numbers1.length - 1]); // 534

// You can add elements to an array using the .push() method. The .push() method adds elements to the end of an array. 
numbers1.push(674);
console.log(numbers1); // [123, 245, 345, 444, 534, 674]

// You can remove elements from an array using the .pop() method. The .pop() method removes the last element from an array.
let lastNumber = numbers1.pop();
console.log(lastNumber); // 674
console.log(numbers1); // [123, 245, 345, 444, 534]

// You can add elements to the beginning of an array using the .unshift() method. The .unshift() method adds elements to the beginning of an array.
numbers1.unshift(0.98); 
console.log(numbers1); // [0.98, 123, 245, 345, 444, 534]
let firstNumber = numbers1.shift(); // The .shift() method removes the first element from an array.
console.log(firstNumber); // 0.98
console.log(numbers1); // [123, 245, 345, 444, 534]


// Differences Between Primitive & Complex Data Types
    // Primitive data types are passed by value. Complex data types are passed by reference: refers to how values are handled when they are passed as arguments to functions or assigned to variables in programming languages.

// 1. Primitive Data Types:
    // Examples of primitive data types include integers, floating-point numbers, characters, and booleans.
    // When you pass a primitive data type as an argument to a function or assign it to a variable, a copy of the actual value is passed or assigned.
    // Changes made to the copy inside the function or to the new variable do not affect the original value outside of that scope.
    // Example
    let x = 5;
    function modifyValue(val) {
        val = 10;
    }
    modifyValue(x);
    console.log(x); // Output: 5 (unchanged)

// 2. Complex Data Types:
    // Examples of complex data types include objects, arrays, and other data structures.
    // When you pass a complex data type as an argument to a function or assign it to a variable, you are actually passing or assigning a reference to the original data.
    // Changes made to the data through this reference will affect the original data outside of the function or variable scope.
    // Example
    let arr = [1, 2, 3];
    function modifyArray(data) {
    data.push(4);
}
    modifyArray(arr);
    console.log(arr); // Output: [1, 2, 3, 4] (changed)

// In summary, the distinction between passing by value and passing by reference relates to how the values are handled during assignment or function parameter passing. Primitive types are passed by value, meaning a copy of the value is passed, while complex types are passed by reference, meaning a reference to the original data is passed.


// In JavaScript, when we say that values are "passed as arguments," we are referring to the process of providing values to a function when calling or invoking that function. 

/* 1. Function Call in JavaScript:*/
    // When you call a function in JavaScript, you use the function name followed by parentheses ().
    // Inside the parentheses, you can pass values, which are called arguments. These values are the actual data that the function will work with.

functionName(); // Function call without arguments
functionName(argument1, argument2); // Function call with arguments

// Example 1
// Function definition with parameters
function addNumbers(a, b) {
    return a + b;
}
// Function call with arguments
let result = addNumbers(3, 7);
console.log(result); // Output: 10

// Passed as Arguments:
    //The phrase "passed as arguments" emphasizes the act of providing specific values (arguments) to a function during its invocation.
    // Arguments can be variables, literals, expressions, or any valid JavaScript expressions that result in a value.

    // Example 2
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    // Calling the function and passing an argument
    greet("Alice"); // Output: Hello, Alice!
//So, when we discuss values being "passed as arguments" in JavaScript, we are highlighting the idea of supplying data to a function for it to operate on or utilize in its logic.

