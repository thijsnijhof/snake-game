var canvas = document.querySelector('#canvas');
var canvasContext = canvas.getContext('2d');
var xPos = 250;
var yPos = 250;
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

document.onkeydown = move;