const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('#increment');

incrementBtn.addEventListener('click', increment);

let value = 0
function increment() {
    value += 1;
    display.textContent = value;
}

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', reset);

function reset() {
    value = 0;
    display.textContent = value;
}