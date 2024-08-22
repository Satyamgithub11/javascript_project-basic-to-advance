const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});

function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
