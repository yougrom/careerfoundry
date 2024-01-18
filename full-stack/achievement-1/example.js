'use strict';
// Example 1
// let element = document.querySelector('select');
// element.value; // '1'
// element.value; // '2'

// let selectedIndex = element.selectedIndex;
// if (selectedIndex > -1) {
//   let selectedOption = element.querySelectorAll('option')[selectedIndex];
// }
// Example 2
// let element = document.querySelector('select');
// console.log(element.value); // returns '1' as that’s currently selected
// element.value = '2';

// // Example 3
// let ageGroup = document.querySelector('input[name="age-group"]:checked');
// let value = ageGroupElement ? ageGroupElement.value : null;

// Example 4 toggle button
// let buttonAdd = document.querySelector('button');
// buttonAdd.addEventListener('click', function(event) {
//     let target = event.target;
//     target.classList.toggle('button--red');
//     target.classList.toggle('button--green');
// });

// Example 5
let extraContent = document.querySelector('.extra-content');

let showMoreButton = document.querySelector('.show-more-button');

let showLessButton = document.querySelector('.show-less-button');

showMoreButton.addEventListener('click', function(event) {
    extraContent.classList.add('visible'); // Reveal the extra content
    event.target.classList.remove('visible'); // Hide `Show More` button
    showLessButton.classList.add('visible'); // Show `Show Less` button
});

showLessButton.addEventListener('click', function(event) {
    extraContent.classList.remove('visible'); // Hide the extra content
    event.target.classList.remove('visible'); // Hide `Show Less` button
    showMoreButton.classList.add('visible'); // Show `Show More` button
});


// Example 6 - Form
// window.addEventListener('keydown', function(event){
//     let survey_form = document.querySelector('#survey_form');
//     let isFormHidden = survey_form.classList.contains('hidden');
//     if( !isFormHidden && event.key === 'Escape'){
//       survey_form.classList.add('hidden');
//     }
//   });
//To better organize your code, you may want to define the function you passed to addEventListener somewhere else, then simply refer to it by name in the second parameter.
  function hideSurveyForm(event) {
    let survey_form = document.querySelector('#survey_form');
    let isFormHidden = survey_form.classList.contains('hidden');
    if( !isFormHidden && event.key === 'Escape'){
      survey_form.classList.add('hidden');
    }
  }
  
  window.addEventListener('keydown', hideSurveyForm);
  //Обратите внимание, что вам нужно опустить круглые скобки, когда вы передаете функцию в качестве второго параметра. Если бы вы написали круглые скобки, функция была бы выполнена немедленно, когда JavaScript прочитает строку, но вы хотите, чтобы эта функция выполнялась только тогда, когда срабатывает прослушиватель событий . Вот почему вы передаете только имя функции — без круглых скобок.

  // Example 7 - removeEventListener
  input.addEventListener('change', checkInput);
input.addEventListener('change', specialValidation);
input.addEventListener('click', function () {
  // This can’t be removed as we didn’t specify a named function
});
input.removeEventListener('change', checkInput); // specialValidation will remain


// Example 8 - event.preventDefault()

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Do something manually; for example, add custom validations
});

// Запуск событий вручную
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

// События и доступность
document.querySelector('.show-more').addEventListener('click', function () {
    document.querySelector('.additional-information')
      .classList.toggle('is-visible');
  });