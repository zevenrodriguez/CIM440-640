var num = 100;
var num1 = 1;
var word = "hello";
var word1 = "goodbye";

var pupilY = 80;
var pupilX = 70;

var teethColor = 0;

var centerX = 0;
var centerY = 0;

function setup() {
  createCanvas(500,500);
  background(0,255,0);
  
  //var test = 1;
  //console.log(teethColor);
  centerX = width/2;
  centerY = height/2;
  console.log("centerX: " + centerX + " " + "centerY: " + centerY);
  
}

function draw() {
  background(0,0,255);
  teethColor = color(255,204,0);
  console.log("mouseX " + mouseX + " mouseY: " + mouseY);

  // var test in the setup is not in the draw scope
  //console.log(test);
  //eyes
  fill(255);
  ellipse(50,50,100,100);
  ellipse(150, 50, 100,100);
  
  //pupils
  fill(0);
  ellipse(pupilX,pupilY,50,50);
  ellipse(pupilX+100,pupilY,50,50);
  
  //nose
  fill(255,0,0);
  rect(125,125,30,30);
  
  //mouth
  fill(teethColor);
  rect(50,200,200,200, 0,20,50,20);
  line(50,300, 250,300);
  line(125,200, 125,400);
  line(175,200, 175,400);
  
  ellipse(centerX, centerY, 10,10);
  
  fill(0);
  ellipse(mouseX, mouseY, 10,10);
  
  //console.log(num);
  /*
  triangle(30, 75, 58, 20, 86, 75);
  quad(38, 31, 86, 20, 69, 63, 30, 76);
  arc(50, 55, 50, 50, 0, HALF_PI);
  */
}