var posX = 0;
var posY = 0;

var directionY = true;

var offsetX = 0;

var interval = 1000;
var prevMillis = 0;

var degree = 0;

function setup() {

  createCanvas(500, 500);
  posY = height;


}

function draw() {
  background(255);

  ellipse(width / 2 + offsetX, posY, 50, 50);

  if (directionY == true) {
    posY-=0.5;
    degree+=0.02;
    offsetX = sin(degree) * 100;
    console.log(offsetX);
  }

  if (posY <= 0) {
    posY = height;
  }

}
