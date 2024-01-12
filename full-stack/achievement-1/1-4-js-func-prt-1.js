'use strict';

//What are Functions?
// Functions encapsulate pieces of code, giving them a set purpose and name. 
// This makes your code more readable, reusable, and testable.
// Functions are one of the fundamental building blocks in JavaScript.

// Encapsulation in JavaScript involves bundling the data (properties) and the methods (functions) that operate on the data into a single unit known as an object. This bundling helps in organizing and structuring code in a way that promotes modularity and reduces complexity.

// Example of encapsulation in JavaScript
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    start: function() {
        console.log('Engine started');
    },
    stop: function() {
        console.log('Engine stopped');
    }
}; 
car.start(); // Engine started
car.stop(); // Engine stopped
console.log(car.brand); // Toyota
console.log(car.model); // Camry
console.log(car.year); // 2022
console.log(car.start()); // Engine started

// Example
let pokemonList = [ 
    // pokemon objects
];

// printArrayDetails function declaration
function printArrayDetails() {
for (let i = 0; i < pokemonList.length; i++){
    // document.write("<p>" + pokemonList[i].name + "</p>");
    // printing pokemonList[i]’s other details
    // ...
}
}

// To declare a function, you need the following:
// The function keyword.
// The name of the function, or its identifier, followed by parentheses. 
// The function body, or the block of statements that perform the function’s operations, enclosed in curly braces.

function printText() {
    document.write("<ul><li>Hello World!</li><ul>");
};
printText(); // Hello World!

// JavaScript is a dynamic type scripting language. 
// A function parameter can have value of any data type.
// This means that you don’t have to specify the type of a variable when you declare it.

// Example ARGUMENTS
function greetingMessage(firstName, lastName) {
    console.log("Hello, My name is " + firstName + " " + lastName);
    document.write("Hello , My name is  " + firstName + " " + lastName);
 };
 
 greetingMessage("Brad", "Pitt"); 
 greetingMessage("Nelson", "Mandela"); 


// Example ARGUMENTS
function aboutMe(name, surname) {
document.write('My name is ' + name + ' ' + surname);
}

aboutMe('Yuriy', 'Gromov');

// Example Defining and Calling Functions
function ShowMessage() {
    console.log("Hello Ron!");
    document.write("Hello Ron!");
 }
 
 ShowMessage(); // Hello Ron!


 // Functions with return Statement
    // The return statement is used to return a value from a function.
    // The return statement stops the execution of a function and returns a value from that function.
    // A function can have multiple return statements.
    // The return statement can be used only inside a function body.

function Sum(val1, val2) {
    return val1 + val2;
};

// Example
function aboutMe(name, surname) {
    return name + surname;
  }
  
  console.log(aboutMe(5, 10)); 

// Example Function Expression
// A function expression is a function that is assigned to a variable.
// You can assign a function to a variable and then use that variable as a function. 

// Example
let functionExpression = function sum(num1, num2) {
    return num1 + num2;
  };

let result1 = functionExpression(10, 20);
    document.write(result1); // 30
let result2 = functionExpression(30, 40); 
    document.write(result2); // 70


// Anonymous Function
// An anonymous function is a function without a name.
// An anonymous function is typically not accessible after its initial creation.
// You can assign an anonymous function to a variable.
// You can pass an anonymous function as an argument to another function.
// Example
let sayHello = function(firstName) {
    console.log("Hello, " + firstName + "!");
  };
  sayHello("John");


// Callback Functions
// A callback function is a function passed into another function as an argument.
// You can chain functions together by using functions as a parameter. Using this method of passing one function’s results to another as parameters is called a callback.
function functionOne(x) { 
    return x; 
    };
  
  function functionTwo(variable1) {
      // some code
     return  variable1 + 2;
  }
  console.log(functionOne(2)); // 2
  console.log(functionTwo(functionOne(2))); // 4


  // Pure Functions
    // A pure function is a function that always returns the same result when the same arguments are passed in.
    // a pure function is a function that’s slightly more limited—it applies certain (self-imposed) rules:

    function addTwo(number) {
        return number + 2;
      }
        console.log(addTwo(2)); // 4


// Example Avoiding Side Effects
let age = 10;
console.log(age); // returns 10

function getNewAge() {
 age = age + 1;
 return age;
}

getNewAge(); 
console.log(age); // returns 11

let age = 10; // value of "age" is 10
// The function "getNewAgeImpure" is not an example of pure function as the value of "age" changed from 10 to 11 after the execution of the function.
/*
console.log('===Not Pure Function===');
console.log('Value of "age" before function execution:' + ' ' + age);//returns 10
function getNewAgeImpure() {
  age = age + 1;
  return age;
}
getNewAgeImpure();
console.log('Value of "age" after function execution:' + ' ' + age);//returns 11
*/
// Now, comment out the code from line 4 to line 12

// The function "get" is an example of pure function as the value of "age" changed from 10 to 11 after the execution of the function.


console.log('===Pure Function===');
console.log('Value of "age" before function execution:' + ' ' + age);//returns 10
function getNewAgePure(age) {
  age = age + 1;
  return age;
}
console.log('The output of "getNewAgePure" function:'+ ' ' + (getNewAgePure(age))); //return 11
console.log('Value of "age" after function execution:' + ' ' + age); //returns  10


// ==============================
//Function Parameters & Arguments
// ==============================
let pokemonList1 = [
    { name: 'Venusaur', height: 2, types: ['grass', 'poison'] },
    { name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
    { name: 'Blastoise', height: 1.6, types: ['water'] }
];

let pokemonList2 = [
    { name: 'Butterfree', height: 1.1, types: ['bug', 'flying'] },
    { name: 'Beedrill', height: 1, types: ['bug', 'poison'] },
    { name: 'Pidgeot', height: 1.5, types: ['normal', 'flying'] }
];

function printArrayDetails(list) {
 for (let i = 0; i < list.length; i++) {
    document.write("<p>" + list[i].name + "</p>"); 
    console.log(list[i].name); 
 }
};
printArrayDetails(pokemonList1);
printArrayDetails(pokemonList2);


// ==============================
// The Function return Statement
// ==============================
// Example divide
function divide(dividend, divisor) {
    if (divisor === 0) {
        return “You are trying to divide by zero.”;
    } else {
        return dividend / divisor;
    }
};
divide(9/0); // You are trying to divide by zero.

// Example Add
function add(number1, number1) {
    return number1 + number2;
}
add(2, 2); // 4


// When it comes to functions, you have three basic choices: 
    // 1) use the `return` keyword to return a specified value, 
    // 2) don’t use the return keyword at all, or 
    // 3) use the return keyword by itself to stop the function. In the case of this last option, any statements that come after the return statement won’t be executed.

    // a function without a return statement
    function add(number1, number2) {
        console.log(number1 + number2);
    }
    let result3 = add(2, 2);
    console.log(result3); // undefined // this will log `undefined` since `result` is assigned what is returned by `add(1, 2)`, which is `undefined` (default return value)
    console.log(add(2, 2)); // 4

    // a function with a return statement
    function multiple(num1, num2) {
        return num1 * num2;
    }
    let result2 = multiple(2, 10);
    console.log(result2); // 20


// Scope
// Variables you define within functions aren’t available outside that function. 
// Conversely, anything that’s been defined/declared outside of a function can be used within that function. 

// Example

let x = 5;
function foo(){
  let y = 10;
  console.log("From inside foo(): x = " + x); 
  console.log("From inside foo(): y = " + y); 
}

foo();
console.log("From outside foo(): x = " + x); 
console.log("From outside foo(): y = " + y); 


// ==============================
// Function Declaration & Hoisting
// ==============================
// When a program goes to run a JavaScript file, before it executes any of the code, it moves all functions that have been declared using the function keyword to the top of the code. This is called hoisting.


// function is called AFTER its declaration
function displayHello(){
    console.log("Hello World");
  }
  
  displayHello();
  
  
  //----------------------------
  
  
  // function is called BEFORE its declaration
  displayHi();
  
  function displayHi(){
    console.log("Hi There");
  }


// Assigning a function to a variable
let add = function(number1, number2) {
    return number1 + number2
  };

// Assigning a function to an object property
let person = {};

person.tellMyAge = function() {
  return 42
};

// The function needs to be declared before it can be executed
let add = function(number1, number2) {
    return number1 + number2  // do something
  };
  add(number1 + number2);


// ==============================
// The `this` Keyword
// ==============================

// The this keyword refers to the object that the function is a property of.
// The value of this depends on where the function is called.

// Example - a particular piece of code logic to be connected with a particular set of data
let person = {};

person.tellMyAge = function() {
  return 42
};

// Example - a particular piece of code logic to be connected with a particular set of data
let dog = {
    type: 'pug',
    age: 3,
    name: 'Margot',
    speak: function() {
      console.log('Wooff!');
    }
  };
  
  dog.speak(); // Wooff!

// The this keyword refers to an object, that object which is executing the current bit of javascript code.
// The value of `this` depends on where the function is called.
// every function, while executing, has a reference to its current execution scope or context, called this. 
// Execution context means here is how the function is called.
// To understand this keyword, you only need to know how, when, and from where the function is called; it doesn’t matter how and where the function is declared or defined.

// Example
let dog = {
    type: 'pug',
    age: 3,
    name: 'Margot',
    speak: function() {
      console.log('Wooff! I am ' + this.name);
    }
  };
  
  dog.speak(); // Wooff! I am Margot
  // When you specify a function in an object, you can access the other properties or functions of the object inside of the function with this. 


// ==============================
// Arrow Functions
// ==============================
let addTwo = number => number + 2;

// The example above is the same as writing this:

let addTwo = function(number){ return number + 2 };  

// example:

let add = (number1, number2) => {
  return number1 + number2;
};

// In arrow functions, `this` refers to the parent scope instead of the scope of the object it’s in.


// ==============================
// Predefined Functions
// ==============================

// JavaScript has many predefined functions that you can use in your code.
// They can be used to indicate the type of action that’s happening.
console.log('Hello!'); 
console.warn('Warning!'); 
console.error('Error!'); 

// Similar to alert(), prompt() will open up a window and allow the user to input some text:
let name = prompt('Please enter your name!');
console.log(name);

//There’s also confirm(), which asks the user to click “OK” or “Cancel” (which will result in true or false respectively):

let isAccepted = confirm('Do you accept?');
console.log(isAccepted);

// Another handy function you can use is setTimeout(), which calls a function or executes line(s) of code in a delayed fashion:

function runThisLater() {
    console.log('Hello!');
  }
  setTimeout(runThisLater, 1000); // Run this in 1000ms



let a = "hello there";
let b = "world";
// console.log(a.concat(b));
// console.log(a.slice(0));
// console.log(a.substr(0));
// console.log(a.split());
// console.log(a.length);
// console.log(a.toUpperCase());

// alert("hello");
// let name = prompt('Please enter your name!');
// console.log(name);
let isAccepted = confirm('Do you accept?');
console.log(isAccepted);









// 	charAt()
// Returns the character at the specified index.

// 2	charCodeAt()
// Returns a number indicating the Unicode value of the character at the given index.

// 3	concat()
// Combines the text of two strings and returns a new string.

// 4	indexOf()
// Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

// 5	lastIndexOf()
// Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

// 6	localeCompare()
// Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

// 7	length()
// Returns the length of the string.

// 8	match()
// Used to match a regular expression against a string.

// 9	replace()
// Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

// 10	search()
// Executes the search for a match between a regular expression and a specified string.

// 11	slice()
// Extracts a section of a string and returns a new string.

// 12	split()
// Splits a String object into an array of strings by separating the string into substrings.

// 13	substr()
// Returns the characters in a string beginning at the specified location through the specified number of characters.

// 14	substring()
// Returns the characters in a string between two indexes into the string.

// 15	toLocaleLowerCase()
// The characters within a string are converted to lower case while respecting the current locale.

// 16	toLocaleUpperCase()
// The characters within a string are converted to upper case while respecting the current locale.

// 17	toLowerCase()
// Returns the calling string value converted to lower case.

// 18	toString()
// Returns a string representing the specified object.

// 19	toUpperCase()
// Returns the calling string value converted to uppercase.

// 20	valueOf()
// Returns the primitive value of the specified object.




// все предопределенных функциях являются функциями объекта window. Объект window определяет окно браузера и некоторые глобальные аспекты среды очень высокого уровня. Например, технически говоря, функция console.log()на самом деле является функцией window.console.log().

// всем функциям и свойствам объекта window также можно получить доступ с помощью сокращенного определения (т. е. без window.). В конце концов, вам решать, хотите ли вы использовать setTimeout()или window.setTimeout()— оба будут делать одно и то же.

// Одной из важнейших функций при работе с объектами является Object.keys(someObject). Это вернет массив всех свойств (или ключей), которые были определены в ссылке на объект, которую вы передаете функции `keys`:

// Example
let anne = {
    name: 'Anne',
    age: 38,
    children: [ ]
  };
  let allProperties = Object.keys(anne); // ['name', 'age', 'children']

//   В этом примере мы создаем объект anne, который имеет три свойства: name, ageи children. Затем мы вызываем Object.keys(anne), чтобы получить массив всех свойств объекта anne. Это полезно, когда вы хотите перебрать все свойства объекта и сделать что-то с ними.

// свойство `length` - возвращает количество элементов в массиве:

// Example
let names = ['John', 'Anne', 'Carly'];
console.log(names.length); // 3

// Example
let names = ['John', 'Anne', 'Carly'];
names.push('Bob'); // Add to the end of the array
console.log(names); // ['John', 'Anne', 'Carly', 'Bob']

// Example
names.unshift('Julia'); // Add to the start of the array (as new first item)
console.log(names); // ['Julia', 'John', 'Anne', 'Carly', 'Bob']

// Example
names.pop(); // Remove the LAST item from the array (Bob)
console.log(names); // ['Julia', 'John', 'Anne', 'Carly']

// Example
names.shift(); // Remove the FIRST item from the array (Julia)
console.log(names); // ['John', 'Anne', 'Carly']

// Example
let numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // [5, 4, 3, 2, 1]

// если вы отредактируете массив в какой-то момент кода, а через некоторое время захотите получить доступ к исходному массиву, этот исходный массив исчезнет навсегда. Вот почему рекомендуется дублировать содержимое массива перед манипуляциями с ним. Вы можете сделать это с помощью slice()функции:

// Example
let namesA = ['John', 'Anne', 'Carly'];
let namesB = namesA.slice(); // Copy the array
console.log(namesB); // ['John', 'Anne', 'Carly']


// При работе с массивами вам часто приходится находить в них элементы. Вы можете сделать это с помощью indexOf()функции:
let names = ['John', 'Anne', 'Carly'];
names.indexOf('John'); // 0
names.indexOf('Bob'); // -1 (not found in the array)