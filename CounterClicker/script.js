let count = 0;

const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('click-button');
const resetButton = document.getElementById('reset-button');

clickButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
});