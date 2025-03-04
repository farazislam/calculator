let display  = document.querySelector('.display')
let numbersNodeList = document.querySelectorAll('.number')
let numbers = Array.from(numbersNodeList)
let leftValue;
let rightValue;
let operator = '+';

// Add event listeners to numbers
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if(display.innerText==='0') {
            display.innerText = e.srcElement.attributes.value.value
        } else {
            display.innerText += e.srcElement.attributes.value.value
        }

        if(operator===null) {
            leftValue = Number(display.innerText)
        } else {
            rightValue = Number(display.innerText)
        }
    })
})


function add(a, b) {
    return (a+b)
}

function subtract(a, b) {
    return (a-b)
}

function multiply(a, b) {
    return (a*b)
}

function divide (a, b) {
    return (a/b)
}

function operate(func, a, b) {
    return func(a, b)
}