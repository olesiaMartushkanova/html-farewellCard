let inputElement = document.getElementById('input-text-field');
let outputElement = document.getElementById('output-text-field');
let buttonElement = document.getElementById('btn');

buttonElement.onclick = function () {
    outputElement.value = inputElement.value;
    }

//Log value entered in the first field in the console
// buttonElement.onclick = function () {
//     console.log(inputElement.value);
// }