const calculatorScreen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalSignButton = document.getElementById('equal-sign');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'clear') {
            clearScreen();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        } else {
            handleNumber(value);
        }
    });
});

function clearScreen() {
    currentInput = '';
    operator = '';
    previousInput = '';
    calculatorScreen.value = '';
}

function calculate() {
    if (previousInput !== '' && currentInput !== '' && operator !== '') {
        const result = eval(`${previousInput}${operator}${currentInput}`);
        calculatorScreen.value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function handleNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    calculatorScreen.value = currentInput;
}
