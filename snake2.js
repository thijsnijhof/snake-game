window.onload = function() {

var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var cvsH = canvas.height;
var cvsW = canvas.width; 

var snakeW = 10;
var snakeH = 10;

//default direction
var direction = 'right';

//read users direction 

document.addEventListener('keydown', getDirection);

function getDirection(e) {
  if(e.keyCode === 37 && direction !== 'right') {
    direction = 'left';
  } else if (e.keyCode === 38 && direction !== 'down') {
    direction = 'up';
  } else if (e.keyCode === 39 && direction !== 'left') {
    direction = 'right';
  } else if (e.keyCode === 40 && direction !== 'up') {
    direction = 'down';
  }
}

function drawSnake(x,y) {
  context.fillStyle = '#FFF';
  context.fillRect(x*snakeW, y*snakeH, snakeW, snakeH);

  context.fillStyle = '#000';
  context.strokeRect(x*snakeW, y*snakeH, snakeW, snakeH);
}

var len = 3;
var snake = [];

for (var i = len-1; i >= 0; i--) {
  snake.push({ x: i, y: 0 });
}

function draw() {
  context.clearRect(0,0, cvsW,cvsH);
  for (var i=0; i < snake.length; i++) {
    var x = snake[i].x;
    var y = snake[i].y;
      drawSnake(x,y);
  }

  //snake head
  var snakeX = snake[0].x;
  var snakeY = snake[0].y;

  //remove last entry, snake tail 
  snake.pop();

  //create a new head, based on previous head and direction
  if (direction === 'left') snakeX--;
  else if (direction === 'right')snakeX++;
  else if (direction === 'up')snakeY--;
  else if (direction === 'down')snakeY++;

  
  var newHead = {
    x: snakeX,
    y: snakeY
  };
  snake.unshift(newHead);
}

setInterval(draw, 200); 





}