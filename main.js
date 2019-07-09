/*
window.onload = function() {
    const buttons = document.querySelectorAll('button')
    console.log(buttons)

    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
            console.log(button.value)
        })

    })
*/

function clearNums() {
    document.getElementById('input').value='';
}

window.onload = function() {

var buttons = document.querySelectorAll(".numbers")
//console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('input').value += button.value;
    });
});
};

















/*
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

function updateDisplay() {
    const display = document.querySelector('.display-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();

const button = document.querySelector('button')

button.addEventListener('click', function () {

})
*/