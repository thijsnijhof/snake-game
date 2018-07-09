const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext("2d");
canvasContext.fillStyle='#fff';
const snake = canvasContext.fillRect(250,250,5,5);

const checkPressedKey = (event) => {
    let key = event.keyCode;
    console.log(key);
}
canvas.addEventListener('keydown', checkPressedKey);

