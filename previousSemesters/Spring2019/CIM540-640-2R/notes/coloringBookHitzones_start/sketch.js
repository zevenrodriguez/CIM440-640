var brushColor = 0;
var brushSize = 10;

var circleButtonX = 100;
var circleButtonY = 450;
var circleButtonSize = 100;

var rectButtonX = 200;
var rectButtonY = 400;
var rectButtonSize = 100;

var robot;

function preload(){

robot = loadImage("assets/robot.png")
}
function setup() {
  // put setup code here
  createCanvas(500,500);

}

function draw() {
  // put drawing code here
  fill(brushColor);
  ellipse(mouseX,mouseY,brushSize,brushSize);

  //interface
  fill(127);
  ellipse(circleButtonX,circleButtonY,circleButtonSize,circleButtonSize);
  fill(255);
  text("clear", circleButtonX,circleButtonY);
  var circleDist = dist(circleButtonX,circleButtonY,mouseX,mouseY);
  console.log("circleDist: " + circleDist);

  if(circleDist < circleButtonSize/2 && mouseIsPressed == true){
    background(255);
  }

  fill(255,0,0);
  rect(rectButtonX,rectButtonY,rectButtonSize,rectButtonSize);
  fill(255);
  text("red", rectButtonX + 50,rectButtonY + 50);

  if(mouseX > rectButtonX && mouseX < rectButtonX + rectButtonSize && mouseY > rectButtonY && mouseY < rectButtonY + rectButtonSize && mouseIsPressed == true){
      brushColor = color(255,0,0);
  }

  image(robot, 0 ,0);
}










//end of code
