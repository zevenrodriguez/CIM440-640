var bubbleX = 200;
var bubbleY = 200;
var bubbleSize = 50;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(255);
  display();
  move();
  console.log(checkPos());
}

function display(){
  ellipse(bubbleX,bubbleY,bubbleSize,bubbleSize);
}

function move(){
  bubbleX++;
}

function checkPos(){
  if(bubbleX > width){
    return true;
  }else{
    return false;
  }
}
