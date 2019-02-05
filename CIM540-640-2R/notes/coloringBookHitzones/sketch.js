var brushColor = 0;
var brushSize = 10;

var circleButtonX = 100;
var circleButtonY = 450;
var circleButtonSize = 100;

var rectButtonX = 200;
var rectButtonY = 400;
var rectButtonSize = 100;

var incButton;

var robot;

function preload(){

  robot = loadImage("assets/robot.png");

}
function setup() {
  // put setup code here
  createCanvas(500,500);
  noStroke();
  incButton = createButton("Increase Brush Size");
  incButton.position(350,450);
  incButton.mousePressed(function(){
    //brushSize = brushSize + 1;
    //brushSize++;
    //brushSize = brushSize + 10;
    brushSize+=10;

  });
}

function draw() {
  // put drawing code here
  fill(brushColor);
  ellipse(mouseX,mouseY,brushSize,brushSize);

  image(robot,100,0);

  fill(127);
  ellipse(circleButtonX,circleButtonY,circleButtonSize, circleButtonSize);
  fill(0);
  text("clear", circleButtonX-10,circleButtonY);
  var circleDist = dist(mouseX,mouseY,circleButtonX,circleButtonY);
  console.log("circleDist: " + circleDist);
  if(circleDist < circleButtonSize/2 && mouseIsPressed == true){
    background(255);
  }

  fill(255,0,0);
  rect(rectButtonX, rectButtonY,rectButtonSize,rectButtonSize);
  fill(0);
  text("red", rectButtonX + 50,rectButtonY + 50);

  if(mouseX > rectButtonX && mouseX < rectButtonX + rectButtonSize && mouseY > rectButtonY && mouseY < rectButtonY + rectButtonSize && mouseIsPressed == true){
    brushColor = color(255,0,0);
  }
}
