
// var currentWidth = width; will not work outside of p5 functions
//var currentHeight = height;

//Global variables are available everywhere
var backgroundColor = "white";
var eyePosX = 0;
var eyePosY = 0;
var eyeOffset = 20;
var eyeSize = 20;

var instruction = "Don't cross the line!";

function setup() {
  // put setup code here
  createCanvas(500,500);
  eyePosX = width/2;
  eyePosY = 100;
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  text(instruction,20,20);
  line(0,height/2,width,height/2);
  eyePosX = mouseX;
  eyePosY = mouseY;
  ellipse(width/2, height/2, 10, 10);
  ellipse(mouseX,mouseY,10,10);
  point(eyePosX,eyePosY);
  ellipse(eyePosX - eyeOffset,eyePosY,eyeSize,eyeSize);
  ellipse(eyePosX + eyeOffset, eyePosY, eyeSize, eyeSize);


  if(mouseY > height/2){
    //run this code
    console.log("Below line");
    angleMode(DEGREES);
    arc(eyePosX,eyePosY + 100,100,100,180,0);
  }

}












// end of code
