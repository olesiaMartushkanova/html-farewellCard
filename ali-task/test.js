let inputElement = document.getElementById('input-text-field');
let outputElement = document.getElementById('output-text-field');
let buttonElement = document.getElementById('btn');

let inputValue = inputElement.value;

//Log value entered in the first field in the console
// buttonElement.onclick = function () {
//     console.log(inputElement.value);
// }

//Log value entered in the first field in another field
//This is not working
buttonElement.onclick = function () {
outputElement.innerHTML = inputValue;
}