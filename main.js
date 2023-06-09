let a = '';
let b = '';
let operator;
let firstNumberRegistered = false;
let equalMode = false;
let operatorMode = false;
let errorMode = false;
const mainDisplay = document.querySelector('.display-current');

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
    a = Math.round(a*100) / 100;
    b = 0;
}

function divide(n1, n2) {
    if (n1 == 0 || n2 == 0){
        errorMode = true;        
        return;
    }
    a = n1 / n2;
    a = Math.round(a*100) / 100;
    b = 0;
}

function operate(n1, n2, operator) {
    operator == '+' ? add(n1, n2) :
    operator == '-' ? substract(n1, n2) :
    operator == '*' ? multiply(n1, n2) :
    divide(n1, n2);
    if(errorMode) {
        mainDisplay.textContent = 'ERROR';
        a = '';
        b = '';
        operator = '';
        firstNumberRegistered = false;
        operatorMode = false;
        equalMode = false;
    }
    if(equalMode){        
        mainDisplay.textContent = a;
    }
}

const numberButtonsContainer = document.querySelector('#number-buttons');


const numberButtons = document.querySelectorAll('.button-number');

numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        operatorMode = false;
        if(errorMode){
            errorMode = false;
            mainDisplay.textContent = '';
        }
        if(equalMode == true) {
            mainDisplay.textContent = '';
            a = '';
            firstNumberRegistered = false;
            equalMode = false;
        }
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
        if(operatorMode){
            return;
        }
        operatorMode = true;
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
    if(!a){
        return;
    }
    if(b == '') {
        return;
    }
    operatorMode = false;
    equalMode = true;
    operate(a, b, operator);    
});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () =>{
    a = '';
    b = '';
    operator = '';
    mainDisplay.textContent = '';
    firstNumberRegistered = false;
    operatorMode = false;
    equalMode = false;
});

const dotButton = document.querySelector('.button-dot');

dotButton.addEventListener('click', () => {
    if(equalMode == true) {
        a = `0${dotButton.textContent}`;
        mainDisplay.textContent = a;
        equalMode = false;
        firstNumberRegistered = false;
    }

    if(!firstNumberRegistered){
        if(a == '') {
            a = `0${dotButton.textContent}`;
            mainDisplay.textContent = a;
        }
        if(a.includes('.')){
            return;
        }
        else {
            a += dotButton.textContent;
            mainDisplay.textContent += dotButton.textContent;
        }
    }
    else {
        if(b == '') {
            b = `0${dotButton.textContent}`;
            mainDisplay.textContent += b;
        }
        if(b.includes('.')){
            return;
        }
        else {
            b += dotButton.textContent;
            mainDisplay.textContent += dotButton.textContent;
        }
    }
})