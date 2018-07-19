const canvas = document.querySelector('#canvas');
const canvasContext = canvas.getContext('2d');
let xPos = 250;
let yPos = 250;
canvasContext.rect(xPos, yPos, 5, 5);
canvasContext.stroke();

function move(e) {
  if (e.keyCode === 40) {
    yPos += 5;
  }
  if (e.keyCode === 38) {
    yPos -= 5;
  }
    if (e.keyCode === 37) {
    xPos -= 5;
  }
    if (e.keyCode === 39) {
    xPos += 5;
  }
  canvas.width = canvas.width;
  canvasContext.rect(xPos, yPos, 5, 5);
  canvasContext.stroke();
}

    // random value between 495 and 5
    // the square that we are going to draw will be 5 by 5 pixels
    //  we don't want it out of the boundaries of the canvas 
const randomPos = () => { return Math.floor((Math.random() * 495 ) + 5 ); };
    
function createFood(){
    let randomX = randomPos();
    let randomY = randomPos();
    canvas.width = canvas.width;
    canvasContext.rect(randomX, randomY, 5, 5);
    canvasContext.stroke();
}

window.onload = createFood();
document.onkeydown = move;