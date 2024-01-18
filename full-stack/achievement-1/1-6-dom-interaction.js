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



//=====================
// Manipulating the DOM: Forms
//=====================


//=====================
// Event Handling
//=====================

// An event is anything that happens on a page. This includes things like clicking a button, scrolling, or pressing a key on the keyboard. Events are handled by event listeners, which are functions that are called when an event occurs. Event listeners are attached to DOM nodes, and they listen for a specific event to occur on that node. When the event occurs, the event listener is called.

//-- HTML --
<button>Click Me</button>

// -- JAVASCRIPT --
let button1 = document.querySelector('button');

button1.addEventListener('click', function (event) {
  console.log(event);
});

// Whenever the user clicks the selected button, the function passed as the second parameter in addEventListener will be called. This function is called an event handler.

// In short, this function contains the code that you want to execute once the specified event occurs (which is passed as the first parameter; click in this example). An event handler additionally contains a special event object as its parameter. This parameter is optional, meaning that the function will still work even if you don't want to use the event object inside the function body. It does, however, have a few useful properties you can use:

// event.target; // The element that dispatched the event, e.g., button
// event.type; // The type of the event, e.g., 'click'

// event.target would represent the element that was clicked. With this in your code, event.type would return the type of the event, which would be click in the earlier example.

// Example
// In the example, the button click will toggle between two colors.
// HTML --- <div> <button class="button--green">Click me!</button> </div>
// JS ----------------------
let button = document.querySelector('button');

button.addEventListener('click', function (event) {
  let target = event.target;
  target.classList.toggle('button--red');
  target.classList.toggle('button--green');
});

// Exemple 2
// HTML
/* <section>
<div class='article'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias minima officiis inventore voluptate earum laboriosam numquam maxime et consectetur, dolore qui culpa porro obcaecati. Soluta aspernatur vitae provident placeat?</p>
<p class='extra-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto possimus iste a dolor, porro repellendus magnam quos, quibusdam dicta rerum illo pariatur atque sit totam. Consectetur recusandae culpa eum rem.</p>
<button class='show-more-button visible'>Show More</button>
<button class='show-less-button'>Show Less</button>
</div>
</section> */
// JS
let extraContent = document.querySelector('.extra-content');

let showMoreButton = document.querySelector('.show-more-button');

let showLessButton = document.querySelector('.show-less-button');

showMoreButton.addEventListener('click', function(event){
  // Reveal the extra content
  extraContent.classList.add('visible');
  // Hide `Show More` button
  event.target.classList.remove('visible');
  // Show `Show Less` button
  showLessButton.classList.add('visible');
});

showLessButton.addEventListener('click', function(){
  // Hide the extra content
  extraContent.classList.remove('visible');
  // Hide `Show Less` button
  event.target.classList.remove('visible');
  // Show `Show More` button
  showMoreButton.classList.add('visible');
});

// There are also custom properties in the event object that you can use, depending on the type of event it is. For example, all keyboard-specific events have a key property that indicates which key was pressed. Let's say that you wanted to hide a form when the user presses the Escape key. The code could look like this:

// -- HTML --
/* <form id='survey_form'>
  <label for='question_1'>What is your favorite food?</label>
  <input id='question_1' type='text'>

  <button>Submit</button>
</form> */

// -- CSS --
// .hidden {
//   display: none;
// }

// -- JAVASCRIPT --
window.addEventListener('keydown', function(event){
  let survey_form = document.querySelector('#survey_form');
  let isFormHidden = survey_form.classList.contains('hidden');
  if( !isFormHidden && event.key === 'Escape'){
    survey_form.classList.add('hidden');
  }
});


// ================================
// Preventing Default Event Behavior
// ================================
//The event object has the fittingly named event.preventDefault() function for just this purpose. If you call this function inside an event handler for the submit event, the form won’t be sent:

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Do something manually; for example, add custom validations
});


// ================================
// Manually Triggering Events
// ================================
// You can also manually trigger events on elements. The following methods are available on all elements:

element.focus(); // Focus on this element. Mainly useful for <input> or <textarea>
element.click(); // Click on this element
element.blur(); // Remove focus from this element
form.submit(); // Manually submits the form (in case form refers to a form element)

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Do something manually, for example, add custom validations
  form.submit();
});


// ================================
// Events and Accessibility
// ================================
