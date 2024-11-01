
let variable = 0;

function getNummer () {
  return variable;
}

function setNumber (number) {
  variable = number;
}

const buttonOne = document.querySelector('.button__one');
const buttonTwo = document.querySelector('.button__two');
const buttonThree = document.querySelector('.button__three');
const buttonFour = document.querySelector('.button__four');
const buttonFive = document.querySelector('.button__five');
const buttonSix = document.querySelector('.button__six');
const buttonSeven = document.querySelector('.button__seven');
const buttonEight = document.querySelector('.button__eight');
const buttonNine = document.querySelector('.button__nine');
const buttonPlusMinus = document.querySelector('.button__plus-minus');
const buttonZero = document.querySelector('.button__zero');
const buttonComma = document.querySelector('.button__comma');
const buttonMemoryClear = document.querySelector('.button__memory-clear');
const buttonMemoryRead = document.querySelector('.button__memory-read');
const buttonMemorySave = document.querySelector('.button__memory-save');
const buttonMemoryPlus = document.querySelector('.button__memory-plus');
const buttonMemoryMinus = document.querySelector('.button__memory-minus');
const buttonBacspeys = document.querySelector('.button__bacspeys');
const buttonClear = document.querySelector('.button__clear');
const buttonEqual = document.querySelector('.button__equal');
const windowsInput = document.querySelector('.windows__input');
 
buttonZero.addEventListener('click', function () {
  setNumber(windowsInput.value + 0);
  windowsInput.value = variable
});

buttonOne.addEventListener('click', function () {
  setNumber(windowsInput.value + 1);
  windowsInput.value = variable
});

buttonTwo.addEventListener('click', function () {
  setNumber(windowsInput.value + 2);
  windowsInput.value = variable
});

buttonThree.addEventListener('click', function () {
  setNumber(windowsInput.value + 3);
  windowsInput.value = variable
});

buttonFour.addEventListener('click', function () {
  setNumber(windowsInput.value + 4);
  windowsInput.value = variable
});

buttonFive.addEventListener('click', function () {
  setNumber(windowsInput.value + 5);
  windowsInput.value = variable
});

buttonSix.addEventListener('click', function () {
  setNumber(windowsInput.value + 6);
  windowsInput.value = variable
});

buttonSeven.addEventListener('click', function () {
  setNumber(windowsInput.value + 7);
  windowsInput.value = variable
});  

buttonEight.addEventListener('click', function () {
  setNumber(windowsInput.value + 8);
  windowsInput.value = variable
});  

buttonNine.addEventListener('click', function () {
  setNumber(windowsInput.value + 9);
  windowsInput.value = variable
});  

buttonComma.addEventListener('click', function () {
  setNumber(windowsInput.value * 2);
  windowsInput.value = variable
}); 