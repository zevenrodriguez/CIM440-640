var pupilX = 250;
var pupliY = 250;
var eyesX = 0;
var eyesY = 0;

var mapX = 0;
var mapY = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  mapX = map(mouseX, 0,width, -25,25);
  console.log(mapX);
  
  mapY = map(mouseY, 0, height, -25,0);
  
  //eyes
  ellipse(50,50,100,100);
  ellipse(150,50,100,100);
  
  //pupils
  ellipse(pupilX + mapX,50 + mapY, 50,50);
  ellipse(pupilX + 100 + mapX,50 +mapY,50,50);
  
  //rect(0,0,499,499);
  
  rect(50,150,150,150,25,10,5,30);
  
  line(50,250,200,250);
  line(125,150,125,300);
}