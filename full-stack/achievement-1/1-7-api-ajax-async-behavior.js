'use strict';

// API stands for Application Programming Interface and is a set of rules that allow programs to talk to each other and exchange data.

// So, an API is a middle-man, a defined way for two or more computer programs to interact with each other, like an app and a server, for instance.

// The set of techniques you’d use to HAVE this back-and-forth interaction is holistically referred to as “Ajax”

// Ajax stands for Asynchronous JavaScript and XML. It’s a set of techniques that allow you to send and receive data from a server asynchronously, without interfering with the display and behavior of the existing page.


// Synchronous vs. Asynchronous Code

// Synchronous Code is code that is executed in sequence, each statement waiting for the previous one to finish before executing. Synchronous code involves executing your code in order.

// "load new tweets" button has been clicked
doSomething();
displayLoadingGif();
fetchNewTweets();
displayNewTweets();
stopLoadingGif();
doSomethingElse();


// Asynchronous Code is code that is executed out of order. Asynchronous code involves executing your code not in order.
// Asynchronous code is code that can be executed at any point in time and that doesn’t require the lines of code that follow it to wait.

doSomething();
element.addEventListener('click', displayHelloMessage);
doSomethingElse();

// Functions like displayHelloMessage in the above example are called callbacks. This term is used to describe functions that are called when something asynchronous happens in your code.

// Consider, for instance, a timer:
function runThisLater(){
    console.log('Burgers');
  }
  
  console.log('Pizza');
  setTimeout(runThisLater, 1000);
  console.log('Salad'); // Pizza Salad Burgers

// The setTimeout() function is a built-in JavaScript function that takes two arguments: a callback function and a time in milliseconds. The callback function is executed after the specified time has elapsed.

// asynchronous version of the code could like something similar to this:

// "load new tweets" button has been clicked
doSomething();
displayLoadingGif();
fetchNewTweets(function(){
  displayNewTweets();
  stopLoadingGif();
});
doSomethingElse();


// Example of Asynchronous Code
let count = 1;
function increaseCount() {
   count = count + 1;
}

setTimeout(function () {
  console.log('first call', count);
  increaseCount();
}, 200);
setTimeout(function () {
  console.log('second call', count);
  increaseCount();
}, 100);
setTimeout(function () { 
  console.log('third call', count);
  increaseCount();
}, 500);

// The techniques that manage the back and forth interaction with the API are called “Ajax.” 
// Three topics central to Ajax:
// 1. Promises: a more-structured and organized way to code asynchronously than callbacks
// 2. JSON: the most common data format used when exchanging data with external sources
// 3. HTTP: a protocol for making requests

// Promises
// Promises offer a cleaner way of writing asynchronous code. The promise is what holds that code that needs to be executed asynchronously.

let 

// Example of a Promise
console.log('some piece of code');
examplePromise.then(function(result){
  console.log(result);
}).catch(function (error) {
  console.error(error);
});
console.log('another piece of code');

// the promise itself look like this:
let examplePromise = new Promise(function (resolve, reject) {
    let sum;
    setTimeout(function(){
      sum = 5 + 6;
      if(sum > 10) {
        resolve(sum);
      }else{
        reject('The promise has been rejected');
      }     
    }, 2000);
  });
  // Think of a class as a template. The Promise class is a template providing everything a promise would need to function properly in JavaScript.

// resolve: This function is called to inform the browser that the promise has been resolved. You can optionally pass a value as illustrated above, where it will then be present in the callback function within .then().

// reject: This function is called to inform the browser that the task within the promise didn’t go as planned (i.e., it was rejected). Think of it as a way to handle errors. To continue with the news feed example, you could have an if statement that checks whether the news feed array is empty. If it is, you could pass the string “News feed unavailable” into the reject function call, where it could then be used within the .catch() statement.
// Finally, the setTimeout() function is used to simulate a task that would take two seconds to finish.

// Combining the two previous code snippets, you then get this:
let examplePromise = new Promise(function (resolve, reject) {
    let sum;
    setTimeout(function(){
      sum = 5 + 6;
      if(sum > 10) {
        resolve(sum);
      }else{
        reject('The promise has been rejected');
      }     
    }, 2000);
  });
  
  console.log('some piece of code');
  examplePromise.then(function(result){
    console.log(result);
  }).catch(function(error){
    console.log(error);
  });
  console.log('another piece of code');

  // This looks great. But there’s still one small issue—the code inside the promise creation block will technically be executed before console.log('some piece of code'). While there’s nothing syntactically wrong with this, it’s better practice to only execute this code the moment the promise is settled (resolved or rejected).

  // The .then() method is used to handle the result of a promise. It takes a callback function as an argument, which is executed when the promise is resolved. The callback function takes the result of the promise as an argument.

  // To ensure this, you can wrap the promise creation code block within a function that returns the promise. Then, when you want to listen to the promise, you can simply chain .then() and .catch() into the function call. Let’s see what this would look like:

  function examplePromise(){
    let promiseToReturn = new Promise(function (resolve, reject) {
      let sum;
      setTimeout(function(){
        sum = 5 + 6;
        if(sum > 10) {
          resolve(sum);
        }else{
          reject('The promise has been rejected');
        }     
      }, 2000);
    });
    return promiseToReturn;
  }
  
  console.log('some piece of code');
  examplePromise().then(function(result){
    console.log(result);
  }).catch(function(error){
    console.log(error);
  });
  console.log('another piece of code');

// two important ways promises give you more flexibility than callbacks:
// You can pass as many values as you want in your resolve and reject function calls, and all of these values will be available in the callback functions of your .then() and .catch() statements.

// You can call resolve or reject multiple times when creating promises; for instance, if you have multiple success/failure paths. Take a look at the example below:

let examplePromise = new Promise(function (resolve, reject) {
    //.. some code ..
    if(.. Condition 1 ..) {
      resolve('The promise has been resolved');
    }else if(.. Condition 2 ..){
      anotherPromise.then(function(){
        //.. some code..
        resolve(value1, value2, value3, array1);
      }).catch(function(){
        reject(error1);
      });
      reject('The promise has been rejected');
    }else{
      reject(error2, specialValue);
    }
  });


// https://www.youtube.com/watch?v=Sr0WT-XHwd0 - Просто о promise в JavaScript

// Example of a Promise
let a = 7;

let b = new Promise(function (resolve, reject) { 
    setTimeout(() => {
        resolve(a = 99); // resolve - это функция, которая будет выполнена, когда промис выполнился успешно. // функция Reject срабатывает, когда промис выполнился с ошибкой.
    }, 2000)
});
// что будет когда промис выполнится успешно - then
b.then(function () {
    console.log(a); // тут можно выполнить другую функцию
});
// функция Proof это дождаться и выполнить другую функцию 


// https://www.youtube.com/watch?v=vIZs5tH-HGQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=4 - Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0

// Example
console.log('Start');
console.log('Start2');

function timeout2sec() {
    console.log('timeout2sec');
}

setTimeout(function() {
    console.log('Inside timeout, after 2 seconds');
}, 5000);

setTimeout(timeout2sec, 2000);

console.log('End');


// SetTimeout 0
setTimeout(function() {
    console.log('Inside timeout');
}, 0);


// https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5 - Урок 5. JavaScript. Promise. Что это, как работает (+ пример)

// Example Callback
console.log('Request data...');
setTimeout(() => {
    console.log('Preparing data...');

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    };

    setTimeout(() => {
        backendData.modified = true;
        console.log('Data received', backendData);
    }, 2000);
}, 2000);

// Example Promise
let example = new Promise(function(resolve, reject) {
    console.log('Request data...');
}, 2000);


// Example Promise
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);
    }, 2000);
});

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    })
}).then(clientData => {
    console.log('Data received', clientData);
    clientData.fromPromise = true;
    return clientData;
})
.then(data => {
    console.log('Modified', data);
})
.catch(err => console.error('Error:', err))  // catch - это метод, который позволяет отловить ошибки
.finally(() => console.log('Finally')); // finally - это метод, который позволяет выполнить какой-то код в любом случае

// Example Promise
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

sleep(2000).then(() => console.log('After 2 seconds'));
sleep(3000).then(() => console.log('After 3 seconds'));

Promise.all([sleep(2000), sleep(5000)]).then(() => { // Promise.all - это метод, который позволяет выполнить промисы одновременно
    console.log('All promises');
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises');
})

fetch('https://yesno.wtf/api', {
  method: 'GET'
}).then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (json) {
  console.log(json); // The actual JSON response
}).catch(function () {
  // Error
});


// JSON - JavaScript Object Notation
// JSON is a data format that is used to exchange data between computers. It’s a lightweight format that is often used to exchange data between a server and a web application.

// But the reverse isn’t always true. There are some features in JavaScript that are not allowed in JSON, mainly:
// Functions
// The undefined value (only null is allowed)
// Single quotes (only double quotes are allowed)
// Also, in JSON, all object keys must be written with double quotes " ".

// Example of JSON
let jsonStringFromServer = '{"name":"Lisa","age":27}';
let lisa = JSON.parse(jsonStringFromServer);
console.log(lisa.name, lisa.age); // Lisa 27
// JavaScript comes with a built-in function for converting this stringified object into a real object: the JSON.parse() function. 

// Example of JSON - from an object to a JSON string
let john = {
    name: 'John',
    age: 31
  };
  let jsonString = JSON.stringify(john);
  console.log(jsonString); // {"name":"John","age":31}
// The JSON.stringify() function converts a JavaScript object into a JSON string.

let nubmer = [1, 2, 3, 4, 5];
console.log(JSON.stringify(nubmer)); // '[1,2,3,4,5]' - JSON.stringify() преобразует массив в строку
let otherNumber = JSON.parse('[1,2,3,4,5]'); // [1, 2, 3, 4, 5] - JSON.parse() преобразует строку в массив

let copy = JSON.parse(JSON.stringify(obj)); // глубокое клонирование объекта


// HTTP Continued
// HTTP - Hypertext Transfer Protocol

// HTTP Methods

// With JavaScript and other tools, you can make other types of requests to web servers:
// GET: Retrieve data from a specified resource
// POST: Send data to a server to create/update a resource
// PUT: is used to update something, such as a record that was previously created via POST (this is similar but different to another command, PATCH).
// DELETE: Delete a specified resource

// These four methods form the acronym CRUD: Create, Read, Update, and Delete.

// Difference Between PUT and PATCH

//In a PUT request, the new resource is considered to be a modified version of the original resource and overwrites it.
//PATCH, the new resource updates the old one by adding, removing or modifying the existing data to produce a new version.

// If you want to use a PUT request, you should send something like this:
{ "name": "Ron", "Phone": "+4915123456789" }

// What if you choose to use PATCH? Now, you just have to send the new phone number as the parameter, without sending the name. With PATCH you send something like this:
{ "Phone": "+4915123456789" }

// HTTP Status Codes
// HTTP status codes are standard response codes that indicate whether a request has been successfully completed. They are grouped into five categories: informational responses, successful responses, redirection messages, client error responses, and server error responses. The most common ones are: 
// 200 - OK 
// 201 - Created 
// 204 - No Content 
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 500 - Internal Server Error
// 503 - Service Unavailable

// HTTP Media Types
// Every HTTP response has its own media type (also called its MIME type) that indicates what type of data the response contains. The most common ones are: 
// text/html - HTML document
// text/plain - plain text with no specific content structure or markup
// application/json - JSON document
// image/jpeg - JPEG image
// image/png - PNG image
// application/pdf - PDF document
// application/zip - ZIP archive
// application/json: JSON content
// application/xml: XML content


// =============
// What is Ajax?
// =============
// Ajax stands for Asynchronous JavaScript and XML. It’s a set of techniques that allow you to send and receive data from a server asynchronously, without interfering with the display and behavior of the existing page.
// The term Ajax is an acronym for “Asynchronous JavaScript + XML.” Ajax doesn’t describe a specific technology, rather, a programming concept.
// To code using Ajax principles is to create a site or app that can load data asynchronously

// Ajax with Fetch
fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
});

fetch('https://pokeapi.co/api/v2/pokemon/') // is shorthand for:

fetch('https://pokeapi.co/api/v2/pokemon/', {
  method: 'GET'
})
// If you needed a POST request as opposed to a GET request, you could add the extra information as keys on the object, like in the following example:
fetch('https://my-backend.com', {
  method: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json'
})

// ==================
// Polyfills
// ==================

// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// A polyfill is a piece of code that mimics newer JavaScript features for older browsers.

