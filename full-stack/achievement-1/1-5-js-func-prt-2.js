'use strict';

//================
// forEach() Loops
//================
// The forEach() method executes a provided function once for each array element.
// Syntax: array.forEach(function(currentValue, index, arr), thisValue

// Example 1 - for()
let nameList = ['John', 'Anne', 'Carly']; 

for(let i = 0; i < nameList.length; i++){
  console.log(nameList[i]); // John, Anne, Carly
}

// Example 1.2 - for()

let myArray = [1, 2, 3, 4, 5];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // 1, 2, 3, 4, 5
    };


// Example 2 - forEach()
let nameList = ['John', 'Anne', 'Carly'];

nameList.forEach(function(name1) {
    console.log(name1.length); // 4, 4, 5  
    console.log(name1); // John, Anne, Carly
});

//Example 2.1 - forEach()
let myArray = [1, 2, 3, 4, 5];
myArray.forEach( item => console.log(item) ); // 1, 2, 3, 4, 5

//or

myArray.forEach( (item, i, arr) => console.log(i, item, arr) ); // 0 1 [1, 2, 3, 4, 5], 1 2 [1, 2, 3, 4, 5], 2 3 [1, 2, 3, 4, 5], 3 4 [1, 2, 3, 4, 5], 4 5 [1, 2, 3, 4, 5]

// As you can see, the forEach() function has been called on the array nameList. Then, a function declaration is passed as a parameter to the forEach() function. This is a neat feature in JavaScript—passing a function as a parameter to another function.

// What forEach() does is pass this function for each element in the array. The element of the current iteration will be passed to that function—in this case, name

// Example 3 - forEach() to loop over an array of objects
let userList = [
    {
      name: 'Liz',
      age: 20
    },
    {
      name: 'John',
      age: 30
    },
    {
      name: 'Sammy',
      age: 40
    }
  ];

// `for()` loop would look something like this:
for (let i = 0; i < userList.length; i++) {
    console.log(userList[i].name + ' is ' + userList[i].age + ' years old'); // Liz is 20 years old, John is 30 years old, Sammy is 40 years old    
    };

// forEach() loops, it would look like this:
userList.forEach(function(user){
    console.log(user.name + ' is ' + user.age + ' years old'); // Liz is 20 years old, John is 30 years old, Sammy is 40 years old
    });

// You can move the function declaration passed to forEach() to make things clearer if you want; for instance, something like this:
function myLoopFunction(user) {
    console.log(user.name + ' is ' + user.age + ' years old.');
  }
  userList.forEach(myLoopFunction); // Liz is 20 years old, John is 30 years old, Sammy is 40 years old



// The forEach() method.
let myArray = [1, 2, 3, 4, 5]; // This line declares an array

// external function
myArray.forEach(logToConsole); // The forEach method is called on the myArray array. It iterates over each element in the array and executes the provided function (logToConsole) for each element.

function logToConsole(item) { //  This code defines a function named logToConsole that takes a parameter (item) and logs that parameter to the console using console.log.
console.log(item);
}
// So, when myArray.forEach(logToConsole); is executed, it iterates through each element of myArray and calls the logToConsole function for each element. As a result, the numbers 1, 2, 3, 4, and 5 are logged to the console, each on a separate line, because the logToConsole function is printing each item in the array. 

// external anonymous function
myArray.forEach(function(item) {
    console.log(item); // 1, 2, 3, 4, 5
});

// arrow function
myArray.forEach( item => console.log(item)); // 1, 2, 3, 4, 5

//================
//Object.keys()
//================

//================
//Functional Programming
//================

//================
//Function Composition
//================


//================
// Global Variables and IIFE
//================
// In JavaScript, variables declared outside of functions are global variables; variables declared inside functions are local variables. Global variables can be accessed and modified from anywhere in the program, whereas local variables can be accessed only from within the function in which they are declared.

// JavaScript has a pattern called Immediately Invoked Function Expression (or IIFE) exactly for this purpose. It looks like this:
(function () {
    let data = {};
    // put your code in here
  })();
  console.log(data); // undefined, as it's not global, but in a function!

  // })();) - This means that the function will be executed on sight once it’s declared. 

  // When you need to access the global state from another part of your code, you can do so like this:
  let app = (function () {
    let data = "John";
  
    let somePrivateData = "secrets";
  
    return {
      userName: data
    };
  })();
  console.log(data); // undefined - can't access this
  console.log(app.userName); // John - this can be accessed!

  // Examlpe 2
  let pokemonRepository = (function () {
    let pokemonList = []; // empty array
  
    return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
  })();
  
  console.log(pokemonRepository.getAll()); // []
  pokemonRepository.add({ name: 'Pikachu' });
  console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]

  // The Pokémon list is defined and housed within an IIFE. This way, you can’t directly access it from the outside, which is what “protects” it. The IIFE then returns an object with two keys: add and getAll. This means that, whenever you access pokemonRepository somewhere in your app, it will represent an object with these two keys.

// With this pattern, it becomes nearly impossible to accidentally modify (or access) the shared state, since you always need to explicitly access it via the repository’s exposed `getAll` and `add` functions. That’s why this pattern is so useful, why it’s commonly used in many applications, and why you should use it, too! It’s not even an exclusively functional pattern. This pattern is used across almost all types of programming paradigms in JavaScript.

// Example 3 Global Variables
(function() {

    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(10,20)); // will result 200
    document.write(multiply(10,20))
}());