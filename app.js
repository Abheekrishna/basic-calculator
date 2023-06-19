const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const currentTextOperandDiv = document.querySelector('[data-currentTextNumber]');
const previousTextOperandDiv = document.querySelector('[data-previousTextNumber]');



const year = document.getElementById('year');
const newYear = (new Date).getFullYear()
year.innerText = `${newYear}`

const audio = new Audio('./audio/click.mp3');


function toggleAudio() {
    audio.currentTime = 0;
    audio.play();
}

numberBtns.forEach(button => {
    button.addEventListener('click', toggleAudio)
})

operationBtns.forEach(button => {
    button.addEventListener('click', toggleAudio)
})

equalBtn.addEventListener('click', toggleAudio)

allClearBtn.addEventListener('click', toggleAudio)

deleteBtn.addEventListener('click', toggleAudio)


let currentNumber = '';
let previousNumber = '';
let lastOperation = '';
let result = null;
let haveDot = false;

numberBtns.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if(e.target.innerText === '.' && haveDot) {
            return;
        }
        currentNumber += e.target.innerText;
        currentTextOperandDiv.innerText = currentNumber;
    })
})

operationBtns.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!currentNumber) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(currentNumber && previousNumber && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(currentNumber);
        }
        clear(operationName);
    })
})

const clear = (name = '') => {
    currentNumber = `${currentNumber} ${name}`
    previousTextOperandDiv.innerText = currentNumber;
}