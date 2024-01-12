'use strict';
// ============================
// Conditionals (if/then/else)
// ============================

// Conditionals tell your program how to make decisions about what actions to perform. 
// These statements are used to perform different actions based on different conditions.

// Example:
let age = 19;
if (age === 18) {
  console.log('You are an adult!');
} else if (age < 18) { 
    console.log('You are a minor!'); 
} else {
    console.log('You are over 18!'); 
}



// Example:
let day = 'Sunday';
if (day === 'Monday') {
    console.log('You must work!');
} else if ( day === 'Tuesday') {
    console.log('You must work!');
} else if ( day === 'Wednesday') {
    console.log('You must work!');
} else if ( day === 'Thursday') {
    console.log('You must work!');
} else if ( day === 'Friday') {
    console.log('You must work!');
} else if ( day === 'Saturday') {
    console.log('You got to rest!');
} else {
    console.log('You stay home on Sunday!');
} 

// Example:
let yourAge = 18;
if (yourAge <= 18) {
    console.log('You are yang');
} else if (yourAge <= 35) {
    console.log('You are middle age'); 
} else if (yourAge <= 40) {
    console.log('You are adult'); 
} else {
    console.log('You are Boss'); 
}

//  A condition is the first part of a conditional if–else block.
//  It is a statement that evaluates to true or false.
// Example:
let isRaining = true;
if (isRaining) {
    console.log('Remember to bring an umbrella.'); 
} else if (!isRaining) {
    console.log('Leave your umbrella at home.');
}

// Example:
console.log(1 === 2); // false
console.log(1 === 1); // true
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 <= 2); // true
console.log(1 >= 2); // false
console.log(!true); // false
console.log(!false); // true

console.log(1 === 1 || 2 === 2); // true
console.log(1 === 1 && 2 === 2); // true
console.log(1 === 1 && 2 === 1); // false
console.log(1 === 2 || 2 === 1); // false

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 != '1'); // false
console.log(1 !== '1'); // true
console.log(1 == ['1']); // true

// Example:
let age1 = 0;
if (age1) {
  console.log('You have an age!');
} else {
  console.log('You do not have an age!');
}

// Truthy values:
// 1. Non-empty strings
// 2. Non-zero numbers
// 3. true
// 4. []
// 5. {}
// 6. function () {}

// Falsy values:
// 1. Empty strings
// 2. 0
// 3. false
// 4. undefined
// 5. null
// 6. NaN (Not a Number) 


// Example:
let userInput = 'Hello';
if (!userInput) {
  // do something with the user input if userInput is empty
}

// Example:
let a = [1, 2];
let b = a; // a and b are the same instance
let c = [1, 2]; // c has the same content but is a different instance
console.log(a === b); // true
console.log(a === c); // false


// Chaining Conditions
// The operator && will only be truthy if both sides are truthy. If even one of them is falsy, the entire condition will then be falsy:
// Example:
true && true; // this is true
true && false; // this is false
false && true; // this is false
false && false; // this is false

// Example:
let age3 = 17;
if (age3 > 12 && age3 < 20) {
  console.log('a teenager!'); 
}

// Example 1:
// The && operator will return either the first falsy value it finds or the last truthy one
let age4 = 20;
let color = 'red';
let hasAgeAndColor = age4 && color; 
console.log(hasAgeAndColor); // red (the last truthy value)

let hasAgeAndColor2 = color && age;
console.log(hasAgeAndColor2); // 20 (the last truthy value)

let hasAgeAndColor3 = 0 && color;
console.log(hasAgeAndColor3); // 0 (the first falsy value)

let hasAgeAndColor4 = color && 0;
console.log(hasAgeAndColor4); // 0 (the first falsy value)


// || will always return the first truthy value it finds. If it doesn’t find any truthy value, it will return the last falsy one.
// Example:
true || false; // this is true
console.log(true || false); // this is true (the first truthy value)
false || true; 
console.log(false || true); // this is true (the second truthy value)

// Example:
let value = 'John';
let name = value || 'Default name';
console.log(name); // John (the first truthy value)

let otherValue = undefined;
name = otherValue || 'Default name';
console.log(name); // Default name  is a truthy value and becomes the value assigned to the variable 

// Example:
let denominator = 0;
let value1 = denominator && (6 / denominator);
console.log(value1); // 0 (the first falsy value)

// Example:
denominator = 2;
value = denominator && (6 / denominator);
console.log(value); // 3 (the last truthy value)

// Example:
if ( (1 < 2 && 3 > 2) || 2 === 2 ) { 
    console.log('yes!'); // yes!
  }

// Example:
//let condition = true;
//let condition = 1 >= 1;
//let condition = 1 >= 2;
// let condition = 1 != 2;
// let condition = null;
//let condition = false && '';
// let condition = 1 && 'zero';
// let condition = false && 'Hello World!';
// let condition = null || false;
// let condition = false || 42;
 let condition = (42 >= (2 + 40)) && (false || 'Hello World');

if(condition){
  console.log('The result is true:', condition);
}else{
  console.log('The result is false:', condition);
}

// Example Pokemon:
let pokemon = {
    name: 'Charmander',
    height: 1.2
};

if (pokemon.height > 1) {
    console.log('Wow, that is big Pokemon!'); 
} else if (pokemon.hright > 0.5 && pokemon.height < 1.5) { 
    console.log('That is average Pokemon.');
} else {
    console.log('That is small Pokemon.');
}


// Part 3
if (pokemonList.height > 2) {
    console.log('Wow, that is big!'); 
} else if (pokemonList.height > 1) {
    console.log('That is average.');
} else {
    console.log('That is small.');
}

// ============================
// Conditional/Ternary Operator
// ============================
// Think of the conditional operator as the shorthand for the if–else construct. 
// It's practical to use it with short conditionals that fit in a single line, similar to this:
let age2 = 20;
let result = age2 > 19 ? 'Is not a teen' : 'Is a teen'; // The syntax always follows the form CONDITION ? THEN : ELSE.
console.log(result); // Is not a teen

// if (...) equal age > 19
// If this condition returns any truthy value, the content following the ? will be returned
// Else, the content following the : will be returned

// Example Long Version:
let age5 = 20;
let result1;
if (age > 19) {
  console.log(result1 = 'Is not a teen');
} else {
    console.log(result1 = 'Is a teen');
}

// Let’s take a moment to summarize what you’ve learned so far:
// Conditionals are decision trees. If this, then that; otherwise this.
// You start with if, then put the conditions in parentheses, then the code block that will be executed if the conditions are met.
// You can use else to dictate what happens when the conditional isn’t met (but this is optional).
// Another way of implementing conditional statements is using switch statements. A switch can replace multiple if checks by giving a more descriptive way to compare a value with multiple variants.
// Conditionals can be comparisons using mathematical operators like +, ===, and more.
// All conditionals (what’s inside the parentheses) are treated by JavaScript as either true or false values.
// You can chain conditionals using && (AND) and || (OR).
// Conditional, or ternary, operators use the shorthand CONDITION ? THEN : ELSE


// ============================
// Loops
// ============================
// Loops are used to perform repetitive tasks.
for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
// A for loop always consists of three different parts, separated by semicolons:
// 1. Initialization: (or starting point) let i = 1 — This is where you set the initial value of the counter variable.
// 2. Condition: i <= 100 — The loop will continue to run until this condition is no longer true.
// 3. Final expression: i++ — This is executed at the end of each loop iteration, and is usually used to increment the counter variable. This is shorthand for i = i +1 (another shorthand you might run into is i--, which would, as you might guess, be the same as i = i – 1).

// Example:
let ages = [12, 19, 21, 23, 26]; 
for (let i = 0; i < ages.length; i++) { 
    console.log(ages[i] - 2); // 10, 17, 19, 21, 24
} 

// The condition i < ages.length is used in the for loop because array indices in most programming languages, including JavaScript, start from 0.

//The ages array has five elements with indices 0, 1, 2, 3, and 4. If you were to use i <= ages.length as the condition, the loop would iterate one more time than the number of elements in the array. During the last iteration, i would be equal to ages.length, which is beyond the valid index range for the array. This could lead to attempting to access an undefined element in the array, causing an error.

// By using i < ages.length as the condition, the loop iterates as long as i is less than the length of the array, ensuring that it only accesses valid indices within the array bounds.


// ============================
// Looping Over Multiple Objects
// ============================

let personAge = [
    {name: 'person1', age: 16},
    {name: 'person2', age: 10}, 
    {name: 'person3', age: 23}
];

for (let i = 0; i < personAge.length; i++) {
    if (personAge[i].age < 19 && personAge[i].age > 13) {
        console.log(personAge[i].name + ' is a teenager'); 
    } else if (personAge[i].age < 13) {
        console.log(personAge[i].name + ' is a child');
    } else {
        console.log(personAge[i].name + ' is an adult'); 
    }
}


// Refactoring code refers to the process of restructuring existing source code without changing its external behavior. The goal of refactoring is to improve the code's readability, maintainability, and sometimes performance, without altering its functionality. This can involve reorganizing code, renaming variables or functions, simplifying complex logic, and other modifications that enhance the overall quality of the code.

// The primary reasons for refactoring include:

// 1. Code Readability: Making the code more understandable for developers, which can lead to easier maintenance and collaboration.

// 2. Maintainability: Simplifying complex code structures can make it easier to fix bugs, add new features, or make updates in the future.

// 3. Performance: Optimizing code for better performance without changing its external behavior.

// 4. Consistency: Ensuring that coding styles and patterns are consistent across the codebase.


// Example:
// Refactor the code below to use a loop and conditional to achieve the same output
// Tip: You can initialize the variable i with any number (it does not have to be 1 or 0). You can also use i-- instead of i++
document.write('<p>' + 5 + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>')
document.write('<p>' + 4 + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>')
document.write('<p>' + 3 + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>')
document.write('<p>' + 2 + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>')
document.write('<p>' + 1 + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>')
document.write('<p>There are no more monkeys.</p>')

  // Example Solution 1
  for (let monkeys = 5; monkeys > 0; monkeys--) {
      document.write('<p>' + monkeys + ' little monkeys jumping on the bed. One fell off and bumped his head.</p>');
  }

  document.write('<p>There are no more monkeys.</p>');

  // Example Solution 2
  for(var i = 5; i >= 0; i--){
    if(i == 0){
      document.write('<p>There are no more monkeys.</p>')
    }else{
      document.write('<p>' + i + ' little monkeys jumping on the bed. One fell of and bumped his head.</p>')
    }
  }


// ============================
// while and do...while Loops
// ============================
// The while statement creates a loop that executes a specified statement while something is true (i.e., until the test condition evaluates to false). The syntax for a while loop is:

while (condition) {
    // Code block to be executed
  }

// Example:
let i = 1;
while ( i < 5) {
 console.log(i);
  i++;
}
// In a for loop, you could initialize a variable inside the parentheses; however, *before* using the while loop, you have to initialize the variable.

// The do...while loop is just a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. The syntax for a do...while loop is: 

// The only difference is that in a do...while loop, the condition is checked after executing the statement inside the do part, resulting in the specified statement executing at least once, even if the condition is never true.

// Example:
let i = 1;

do {
 console.log(i);
i++
}
while ( i < 5)

// The do...while statement repeats until a specified condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

do
  statement
while (condition);

// the different loops are used for different purposes:
// Example 1: do and while
let text = '';
let i = 0;
do {
  text = text + ' ' + i;
  i++;
}
while (i < 10);
console.log(text1); // 0 1 2 3 4 5 6 7 8 9

// Example 2: while
let fruits = ["apple", "banana", "orange", "grape"]
let text2 = '';
let item = 0;

while(fruits[item]) {
  text2 = text2 + ' ' + fruits[item]
  item++;
} 
console.log(text2);

// Example 2: for
let veggies = ["tomato", "cucumber", "potato"];
let text3 = "";
let a = 0;
for (;veggies[a];){
  text3 = text3 + " " + veggies[a];
  a++;
}
console.log(text3);