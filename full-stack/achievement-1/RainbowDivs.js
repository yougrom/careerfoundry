'use strict';

(function(){
    let myArray = [1, 2, 3, 4, 5];
    let str = '';

    myArray.forEach(makeRainbowDivs);
    
    function makeRainbowDivs(item) {
        str += `<div>I am div ${item}</div>`
}

    document.getElementById('container').innerHTML = str;
})()