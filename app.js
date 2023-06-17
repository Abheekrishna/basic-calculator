const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');

const audio = new Audio('./audio/click.mp3');


function toggleAudio() {
    audio.currentTime = 0; // Reset audio to the beginning
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