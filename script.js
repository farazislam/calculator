let display = document.querySelector('.display')
let numbersNodeList = document.querySelectorAll('.number')
let numbers = Array.from(numbersNodeList)
let equals = document.querySelector('.equal')
let addElement = document.querySelector('.add')
let subtractElement = document.querySelector('.subtract')
let multiplyElement = document.querySelector('.multiply')
let divideElement = document.querySelector('.divide')
let acElement = document.querySelector('.ac')
let leftValue = '';
let rightValue = '';
let operator = '';
let operatorSymbol;

// Add event listeners to numbers
numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        // Update display. First check if it's 0 or and existing sum then overwrite
        if ((display.innerText === '0') ||
            (display.innerText.includes('=')) || 
            (display.innerText.includes('ERROR'))) {
            display.innerText = e.srcElement.attributes.value.value
        } else {
            display.innerText += e.srcElement.attributes.value.value
        }

        // Determine whether the number entered is placed in left operand
        // or right operand
        if (operator === '') {
            leftValue += Number(e.srcElement.attributes.value.value)
        } else {
            rightValue += Number(e.srcElement.attributes.value.value)
        }
    })
})

addElement.addEventListener('click', () => {
    if(rightValue==='') {
        display.innerText += '+ '
        operator = add;
        operatorSymbol = '+';
    } else {
        leftValue = operate(add, leftValue, rightValue)
        operator = add;
        operatorSymbol = '+'
        rightValue = ''
        display.innerText = `${leftValue} + `
    }
})

subtractElement.addEventListener('click', () => {
    if(rightValue==='') {
        display.innerText += '-'
        operator = subtract;
        operatorSymbol = '-';
    } else {
        leftValue = operate(subtract, leftValue, rightValue)
        operator = subtract;
        operatorSymbol = ' - '
        rightValue = ''
        display.innerText = `${leftValue} - `
    }
})

multiplyElement.addEventListener('click', () => {
    if(rightValue==='') {
        display.innerText += ' * '
        operator = multiply;
        operatorSymbol = '*';
    }  else {
        leftValue = operate(multiply, leftValue, rightValue)
        operator = multiply;
        operatorSymbol = ' * '
        rightValue = ''
        display.innerText = `${leftValue} * `
    }

})

divideElement.addEventListener('click', () => {
    display.innerText += '/'
    operator = divide;
    operatorSymbol = '/';
})

// Add event listener to = function
equals.addEventListener('click', () => {
    let result;

    if (leftValue !== '' && rightValue !== '' && operator !== '') {
        result = operate(operator, leftValue, rightValue)
    }

    if(result !== undefined) {
        display.innerText = `${leftValue} ${operatorSymbol} ${rightValue} = ${result}`
    } else {
        display.innerText = `ERROR`
    }

    // Reset
    leftValue = ''
    rightValue = ''
    operator = ''
    operatorSymbol = ''
})

acElement.addEventListener('click', () => {
    display.innerText = '0'
    leftValue = '';
    rightValue = '';
    operator = '';
    operatorSymbol = '';
})


function add(a, b) {
    return (Number(a) + Number(b))
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    if(b===0) {
        return 'ERROR'
    } else {
        return (a / b)
    }
}

function operate(func, a, b) {
    return func(a, b)
}