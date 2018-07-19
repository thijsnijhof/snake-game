const canvas = document.getElementById('canvas');
let xPos = 250;
let yPos = 250;
let foodXPos = 0;
let foodYPos = 0;
let shapes = [];

function Square(x, y, w, h, fill) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.fill = fill;
}

function move(e) {
  if (e.keyCode === 40) {
    yPos += 5;
    checkEatFood(xPos,yPos);
  }

  if (e.keyCode === 38) {
    yPos -= 5;
    checkEatFood(xPos,yPos);
  }
    if (e.keyCode === 37) {
    xPos -= 5;
    checkEatFood(xPos,yPos);
  }
    if (e.keyCode === 39) {
    xPos += 5;
    checkEatFood(xPos,yPos);
  }
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  let snake = new Square;
  snake.x = xPos;
  snake.y = yPos;
  snake.h = 5;
  snake.w = 5;
  snake.fill = '#111111';

  shapes.push(snake);
    for (let i in shapes){
    shape = shapes[i];
    context.fillStyle = shape.fill;
    context.fillRect(shape.x, shape.y, shape.w, shape.h);
  }


}

    // random value between 495 and 5
    // the square that we are going to draw will be 5 by 5 pixels
    //  we don't want it out of the boundaries of the canvas 
    //  Math.ceil(....)/5)*5 to round up to multiples of 5
const randomPos = () => { return Math.ceil(Math.floor((Math.random() * 495 ) + 5 )/5)*5 ; };

//  creates a new square and push it to shapes array

function createFood(){
    let food = new Square;
    food.x = randomPos();
    food.y = randomPos();
    food.w = 5;
    food.h = 5;
    food.fill = '#444444';
    shapes.push(food);
    foodXPos = food.x;
    foodYPos = food.y;
}

// This is not working. values are the same when you look in console
// maybe it is not invoked at the right time?

function checkEatFood(x,y){
  console.log('snake',x,y);
  console.log('food',foodXPos, foodYPos);
     if(x && y == foodXPos && foodYPos){
       console.log('NOMNOMNOMNOM');
     } 
}

function init () {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  createFood();
  for (let i in shapes){
        shape = shapes[i];
        console.log(shape);
        context.fillStyle = shape.fill;
        context.fillRect(shape.x, shape.y, shape.w, shape.h);
  }
}



document.onload = init();
document.onkeydown = move;
