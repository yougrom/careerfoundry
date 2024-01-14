'use strict';
//What is the DOM?
// Document Object Model (DOM) is a programming interface for HTML. It represents an HTML web page as JavaScript “objects,” allowing JavaScript to interact with, and even make changes to, the HTML page. You can think of HTML as the browser’s instructions on how to build the DOM.

//The DOM is always built in tree-form, starting with a single element at the top—the <html>—and expanding downward. An element, or DOM node, like <head>, <body> etc, can have as many of its own sub-elements as needed, but that element should have only one parent (aside from the <html> node at the top, which has none).

// Selecting Nodes
// There are two built-in functions you can use to select nodes in the DOM: querySelector() and querySelectorAll(). Both functions take a CSS selector as an argument and return a DOM node or a NodeList, respectively. A NodeList is a collection of nodes, similar to an array, that you can iterate over using forEach().

// Think of `document` as a special variable that returns the parent-node of the whole page. `document` is essentially the entire DOM object, but it comes with several built-in functions that allow you to interact with the DOM.

document.querySelector('.name-input');

// This will return the first element with the name-input class the function finds (or null if no element with a matching selector can be found). If there’s more than one matching element, only the first will be returned.

// If you want to select all elements with a matching selector, you can use querySelectorAll() instead: 
document.querySelectorAll('.name-input');
// This will return a NodeList containing all elements with the name-input class. You can iterate over a NodeList using forEach().

let inputs = document.querySelectorAll('input');
console.log(inputs.length); // 3
inputs.forEach(function(input) {
  console.log(input.value);
}); 
inputs[0]; 

// You can also select elements by their tag name using querySelector() and querySelectorAll(). For example, to select all <input> elements, you can use:

document.querySelectorAll('input');
let personalDetails = document.querySelector('.personal-details');
personalDetails.querySelectorAll('input');


// Exercise: Selecting Nodes => HTML
/* COMPLETE THE CODE BELOW BY FOLLOWING THE INSTRUCTIONS */

// 1. Select and assign only the payments div:
let payments = document.querySelector('.payments');

// 2. Select and assign all divs with the class 'amount' INSIDE (!) the payments div
let amountsOfPayments = document.querySelectorAll('.amount');

// 3. For each amount inside payments, log the element in the console.
amountsOfPayments.forEach(function(amount) {
  console.log(amount);
});


//=================
// Traversing Nodes
//=================

// The following functions can be called on any single DOM node:

let element = document.querySelector('.bob');
element.parentElement; // Get the parent node of the element
element.nextElementSibling; // Get the next sibling element, or null if it’s the last one
element.previousElementSibling; // Get the previous sibling element, or null if it’s the first one
element.firstElementChild; // The first child of the element
element.lastElementChild; // The last child of the element
element.childElementCount; // The number of children this element has
element.children; // (IMPORTANT: Not recommended) The direct children of this element

//uncomment the lines one by one to check the console output. Make sure only one line is uncommented at one time

//console.log(element.nextElementSibling.innerText); // Get the next sibling element, or null if it’s the last one
//console.log(element.previousElementSibling.innerText); // Get the previous sibling element, or null if it’s the first one
//console.log(element.firstElementChild); // The first child of the element
console.log(element.lastElementChild); // The last child of the element
//console.log(element.childElementCount); // The number of children this element has


//======================
//Manipulating the DOM
//======================

//Make Changes to Elements

let mainPayments = document.querySelector('.payments');
document.write(mainPayments.innerHTML); // This will print the HTML inside the payments div
document.write(mainPayments.innerText);
mainPayments.innerHTML = 'THIS IS EPIC';
console.log(mainPayments.innerHTML);

//-- JAVASCRIPT --
let mainTitle = document.querySelector('h1');
console.log(mainTitle.innerText); // -> <h1></h1>
mainTitle.innerText = 'THIS IS EPIC';
console.log(mainTitle.innerText); // -> <h1>THIS IS EPIC</h1>


//-- JAVASCRIPT --
let containersButton = document.querySelector('.containers');
containersButton.innerHTML = '<button>Fuck You</button>';
document.write(containersButton.innerHTML);
console.log(containersButton.innerHTML);


//====================
//Create New Elements
//====================

// The document.createElement() function is perfect for this:
let newElement = document.createElement('button');

// Example
let containers = document.querySelector('.containers-button');
let newButton = document.createElement('button');
newButton.innerText = 'This is new fucking button';
// One of the methods for properly appending HTML elements is appendChild()
containers.appendChild(newButton);


//============
//Move Elements
//============
//  This is only possible if the element passed through appendChild() already exists and is attached to the DOM. 
// Example
let paragraph = document.querySelector('#container1 > p');
let container2 = document.querySelector('#container2');
container2.appendChild(paragraph);


//============
//Remove Elements
//============
//  When it comes to removing HTML elements from the DOM, you have the removeChild() function. 

let elementToRemove = document.querySelector('#container2 > p');
elementToRemove.parentElement.removeChild(elementToRemove);


//=================================
//Getting Information about DOM Nodes
//=================================
// To get the selected element's tag name, you can use tagName property on the targeted element. tagName will return the tag name in uppercase letters:

element = document.querySelector('div');
console.log(element.tagName); // -> DIV

//As for an element's attributes, there are a number of different functions you can use:

// 1 - .getAttribute(attributeName) returns the value assigned to the passed attribute (it will return null if the attribute is absent)

// 2 - .hasAttribute(attributeName)  returns true or false depending on whether the element has an attribute that matches the passed attribute name

// 3 - .setAttribute(attributeName, newValue) assigns what’s passed in `newValue` to the specified attribute name (if the attribute doesn't exist, it will be added along with the new value)

// Example
let elementInfo = document.querySelector('.container-info');

// console.log(elementInfo.getAttribute('id'));
// console.log(elementInfo.hasAttribute('value'));
// replaces "main-section" with "new-id"
// elementInfo.setAttribute('id', 'new-id'); // -> <div id="new-id" class="container-info">...</div>   
// console.log(elementInfo.getAttribute('id'));


//==================================================
// JavaScript is often used to add or remove classes from elements. For this, you use the classList object, which is an object that represents the classes on an element. This object has a number of methods that allow you to modify an element’s classes. The most important functions to focus on now are the contains, add, remove, and toggle functions:

let elementList = document.querySelector('.container-list');
console.log(elementList.classList.contains('selected')); // -> false

elementList.classList.add('selected'); 

// uncomment the following line to revert the style, "simulating the effect of unselecting the element visually"
container.classList.remove('selected');

// to toggle the class on again
container.classList.toggle('selected');

// to toggle the class off
container.classList.toggle('selected');