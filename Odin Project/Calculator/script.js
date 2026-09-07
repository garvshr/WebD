let num1 = ""
let num2 = ""
let operator = ""
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const result = document.querySelector('.result')
const clearButton = document.querySelector('.clear')
const display = document.querySelector('.display')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(operator === "")
            num1 += button.textContent
        else
            num2 += button.textContent
        updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(num1 !== "" && operator !== "" && num2 !== "") {
            num1 = operate(operator, parseFloat(num1), parseFloat(num2)).toString()
            num2 = ""
        }
        operator = button.textContent
        updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    result.textContent = operate(operator, parseFloat(num1), parseFloat(num2))
})

clearButton.addEventListener('click', () => {
    num1 = ""
    num2 = ""
    operator = ""
    updateDisplay()
    result.textContent = ""
})

function updateDisplay() {
    display.textContent = `${num1} ${operator} ${num2}`.trim()
}

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