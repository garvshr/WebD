let num1 = ""
let num2 = ""
let operator = ""
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const result = document.querySelector('.result')
const clearButton = document.querySelector('.clear')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(operator === "")
            num1 += button.textContent
        else
            num2 += button.textContent
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent
    })
})

equalButton.addEventListener('click', () => {
    result.textContent = operate(operator, parseFloat(num1), parseFloat(num2))
})

clearButton.addEventListener('click', () => {
    num1 = ""
    num2 = ""
    operator = ""
    result.textContent = ""
})

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+' :
            return add(num1, num2);
        case '-' :
            return subtract(num1, num2);
        case '*' :
            return multiply(num1, num2);
        case '/' :
            return divide(num1, num2);
    }

}