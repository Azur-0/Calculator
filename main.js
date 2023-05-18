let a = '';
let b = '';
let operator;
let firstNumberRegistered = false;
let equalMode = false;
const mainDisplay = document.querySelector('.display-current');
const secondDisplay = document.querySelector('.display-last');

function add(n1, n2) {
    // a = +a;
    // b = +b;
    a = +n1 + +n2;
    b = '';
}

function substract(n1, n2) {
    a = n1 - n2;
    b = '';
}

function multiply(n1, n2) {
    a = n1 * n2;
    b = 0;
}

function divide(n1, n2) {
    a = n1 / n2;
    b = 0;
}

function operate(n1, n2, operator) {
    operator == '+' ? add(n1, n2) :
    operator == '-' ? substract(n1, n2) :
    operator == '*' ? multiply(n1, n2) :
    divide(n1, n2);    
    if(equalMode){        
        mainDisplay.textContent = a;
    }
}

const numberButtonsContainer = document.querySelector('#number-buttons');


const numberButtons = document.querySelectorAll('.button-number');

numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        if(!firstNumberRegistered) {
            a += number.textContent;
            mainDisplay.textContent += number.textContent;
        }  
        else {
            b += number.textContent;
            mainDisplay.textContent += number.textContent;
        }
    });    
});

const operatorButtons = document.querySelectorAll('.operator-button');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(b != '') {
            operate(a, b, operator);
        }
        if(a != ''){            
            firstNumberRegistered = true;
            equalMode = false;
            operator = button.textContent;
            mainDisplay.textContent += operator;
        }
        else {
            return;
        }
    });
});

const operateButton = document.querySelector('.operate-button');

operateButton.addEventListener('click', () => {
    equalMode = true;
    operate(a, b, operator);
});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () =>{
    a = '';
    b = '';
    mainDisplay.textContent = '';
    firstNumberRegistered = false;
});