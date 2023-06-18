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



const add = (a, b) => {
    return parseFloat(a) + parseFloat(b);
}

const subtract = (a, b) => {
    return parseFloat(a) - parseFloat(b);
}

const multiply = (a, b) => {
    return parseFloat(a) * parseFloat(b);
}

const divide = (a, b) => {
    if(a === 0 || b === 0) {
        return;
    } else {
        return parseFloat(a) / parseFloat(b);
    }
}

const numberClick = () => {
    numberBtns.forEach(button => {
        button.addEventListener('click', () => {
            return button.textContent;
        })
    })
}
let entererNumber = '';

const appendNumber = () => {
    
    numberBtns.forEach(button => {
        button.addEventListener('click', (e) => {           
            entererNumber = entererNumber + e.target.innerHTML;
            currentTextOperandDiv.innerText = entererNumber;
        })
    })
}
appendNumber()




allClearBtn.addEventListener('click', () => {
    currentTextOperandDiv.innerText = '';
    previousTextOperandDiv.innerText = '';
    entererNumber = '';
})