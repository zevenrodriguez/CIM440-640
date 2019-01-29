var eyePosX = 0;
var eyePosY = 0;
var eyeOffset = 20;
var eyeSize = 20;

var backgroundColor = "white";

var instruction = "Move your mouse, Don't make the face sad.";

function setup() {
  // put setup code here
  createCanvas(500,500);
  eyePosX = width/2;
  eyePosY = 100;
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  fill("black");
  text(instruction, 20, 50);
  ellipse(mouseX,mouseY,10,10);
  ellipse(eyePosX - eyeOffset, eyePosY, eyeSize,eyeSize);
  ellipse(eyePosX + eyeOffset, eyePosY, eyeSize,eyeSize);

  line(0, height/2, width, height/2);

  if(mouseY > height/2){
    console.log("Below Line");
    instruction = "I am sad!";
    fill(255,0,0);
    angleMode(DEGREES);
    arc(width/2, 200, 100,100, 180,0);
  }

  if(mouseY < height/2){
    console.log("Above Line");
    instruction = "Move your mouse, Don't make the face sad.";
    fill(0,0,0);
    angleMode(DEGREES);
    arc(width/2, 200, 100,100, 0,180);
  }

  //Or combine them
  /*
  if(mouseY > height/2){
      console.log("Below Line");
  }else{
    console.log("Above Line");
  }
  */
}

function mousePressed(){
  backgroundColor = "black";
}

function mouseReleased(){
  backgroundColor = "white";
}

function keyPressed(){
  console.log("Current key: " + key + " : " + keyCode);
  if(key == "r"){
    backgroundColor = "red";
  }else if(key == "g"){
    backgroundColor = "green";
  }else if(key == "b"){
    backgroundColor = "blue";
  }
}
