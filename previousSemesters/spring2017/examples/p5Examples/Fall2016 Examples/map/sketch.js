//Map

var pupilY = 50;
var pupilX = 100;
var eyesX = 100;
var eyesY = 50;

var offsetX = 0;
var offsetY = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  offsetX = map(mouseX, 0, width, -10,10);
  offsetY = map(mouseY, 0, height, -10,10);

//eyes
  fill(255);
  ellipse(eyesX,eyesY,100,100);
  ellipse(eyesX + 100, eyesY, 100,100);
  
  //pupils
  ellipse(pupilX + offsetX,pupilY + offsetY,50,50);
  ellipse(pupilX+100 + offsetX,pupilY +offsetY,50,50);
  
  //nose
  rect(125,125,30,30);
  
  //mouth
  rect(50,200,200,200, 0,20,50,20);
  line(50,300, 250,300);
  line(125,200, 125,400);
  line(175,200, 175,400);
}