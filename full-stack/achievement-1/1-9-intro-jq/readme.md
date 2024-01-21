# 1.9: Introduction to jQuery

— A library is a pre-written collection of code that’s available for you to "check out" and use in your own projects to save time.

## JavaScript Libraries

— For developers, a library is a selection of code written (usually) by someone else that they can employ in their own projects.

## jQuery

— CDN означает сеть доставки контента. Это сеть серверов, разбросанная по всему миру. Преимущество размещения файлов через CDN заключается в том, что серверы находятся намного ближе к пользователям вашего веб-сайта. Это значительно уменьшает время загрузки страницы. 
— Еще один способ уменьшить время загрузки страницы — это кеширование браузера. 

### DOM Selection

— Most of jQuery’s functionality can be accessed via the $ symbol; 
— You could also write it as jQuery if you wanted, for example, jQuery('...') as opposed to $('...').
— JavaScript functions are, in fact, nothing more than objects, which means you can add properties to them just like you would normal objects.
— When using jQuery, there’s no concept of single elements—all your work is done with collections
— jQuery functions are applied to every element in a collection, whether that collection contains one element, two elements, or none.

— Using jQuery, you can perform the rough equivalent of a 
— document.querySelectorAll function like so:
    
    let element = $('.my-class');

— In jQuery, it’s very easy to add a class:

    let inputs = $('input');
    inputs.addClass('my-class');

 — Here, it doesn’t matter if there’s one input, many, or none at all—it will always work! Contrast that with the following (non-jQuery) code:
```
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.classList.add('.my-class');
    });
```
— With vanilla JavaScript, you always have to consider whether you want to work with a single item or an array of items and use functions like forEach if you work with more items. jQuery, however, takes that consideration away completely. There’s only one selector and one addClass function whether you’re targeting single items or all items—no arrays, and no forEach.


#### MINI-TUTORIAL: SELECTING A LIST ELEMENT

— Select an element by its ID with jQuery:
— Let’s say you have an ordered item list in the HTML with an ID `<ol id="list"></ol>`. 
    — To select it in jQuery you can do so with $('#list'), where the # is for the ID. 
    — If it’s a class (<ol class="list"></ol>) then you can do $('.list') with a dot.
    — You can assign the selected list to a variable (say “list”) using let list = $('#list'). 
    — To append something to this list, such as an li element, you can write: $('#list').append(<li>list something</li>);. 
    — If you want to use the variable “list” you created earlier, you can write: list.append("<li>list something</li>");
    — You can store each <li> element in a variable as well using let li = $('<li></li>');. Now you can append the li variable to the “list” variable like list.append(li);.

    $('input').addClass('red');
    // Below, only make the .main-button green
    $('.main-button').addClass('green');
    // Below, make the text of all buttons yellow
    $('button').addClass('text--yellow');

## DOM Traversal

— Just like with regular JavaScript, you can traverse between DOM elements using jQuery, though you’ll probably find it a bit easier. Every function below will return a jQuery collection:

    let input = $('input');
    input.parent(); // Get the parent element
    input.children(); // Get all children
    input.closest('.container'); // Go up the hierarchy of parents until the selector matches
    input.siblings(); // Get all siblings

#### MINI-TUTORIAL: GETTING INPUT VALUES

— To get the input values from the index page, we can use val()
    —  For example:
    <input type="text" name="ListItem" id="input"/>

    — then we can get the value of the input with jQuery like this:
    `$('#input').val();``

    — to store the value into a variable you can use
    let inputValue = $('#input').val();.

    — Now, you can append this value into another element such as the li from the previous mini-tutorial using
    li.append(inputValue);.
    
    — On the jQuery website you can find a full list of functions for traversing the DOM. - https://api.jquery.com/category/traversing/

## DOM Manipulation

— jQuery is built around the idea of chaining. In other words, you can run multiple commands in a row on the same element:

    $('.notification').addClass('bright-red').delay(300).removeClass('bright-red')

