
let display = document.getElementById('display');

function addToDisplay(value) {
 display.value += value;
}

function clearDisplay() {
 display.value = '';
}

function calculate() {
 try {
  let result = eval(display.value);
  display.value = result.toFixed(2);
 } catch (error) {
  display.value = 'Error';
 }
}
