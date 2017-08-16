var pupilY = 70;
var pupilX = 40;
var noseX = 100;
var noseY = 100;

var canvasWidth = 0;
var canvasHeight = 0;


function setup() {
  createCanvas(500,500);
  console.log("current width: " + width);
  console.log("current height: " + height);
  canvasWidth = width;
  canvasHieght = height;
  var test = 100;
  background(255,0,0);
  //available only in the setup
}

function draw() {
  background(0,255,0);
  //console.log(canvasWidth);
  //if I create a variable here its only available in draw
  var noseColor = color(255,0,0);

  fill(255);
  //eye1
  ellipse(50,50,100,100);
  //eye2
  ellipse(150,50,100,100);
  
  //pupil1
  fill(0);
  ellipse(pupilX,pupilY,50,50);
  //pupil2
  ellipse(pupilX+100,pupilY,50,50);
  
  fill(255);
  //nose
  fill(noseColor);
  ellipse(noseX,noseY, 20,20);
  
  //teeth
  fill(255, 204, 0);
  rect(50,150,150,150,25,10,5,30);
  
  line(50,250,200,250);
  line(125,150,125,300);
  
  //triangle(250,0, 300,250, 150, 250);
  
  //quad(38, 31, 86, 20, 69, 63, 30, 76);
  
  //point(400, 400);
  
  //arc(50, 55, 50, 50, 0, HALF_PI);
  
  ellipse(mouseX,mouseY, 20,20);
}