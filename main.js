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

const output = document.querySelector(".output")
const clear = document.querySelector('.clear')
//const dotButton = document.querySelector('.decimal')
const dividButton = document.querySelector('.divide')
const multButton = document.querySelector('.multiply')
const subButton = document.querySelector('.minus')
const plusButton = document.querySelector('.plus')
const equalsign = document.querySelector('.equals')





//clears display
function newFunction() {
    document.getElementById('input').value='';
}

window.onload = function() {




var buttons = document.querySelectorAll(".numbers")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.value !== "="){
        document.getElementById('input').value += button.value;
        } else {
            const currentValue = output.value
            output.value = eval(currentValue)
        }
    });
});
dotButton.addEventListener('click', function () {
    output.value += dotButton.value
})

dividButton.addEventListener('click', function () {
    output.value += dividButton.value
})

plusButton.addEventListener('click', function () {
    output.value += plusButton.value
})

multButton.addEventListener('click', function () {
    output.value += multButton.value
})

subButton.addEventListener('click', function () {
    output.value += subButton.value
})


// equalsign.addEventListener('click', function () {
//    const currentValue = output.value
//    output.value = eval(currentValue)
// })




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