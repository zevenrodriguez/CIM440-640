var centerX = 0;
var centerY = 0;
function setup() {
  createCanvas(500,500);
  centerX = width/2;
  centerY = height/2;
}

function draw() {
  ellipse(centerX,centerY, 10,10);
  /*
  if(mouseY < centerY ){
    console.log("Above centerY");
    fill(255,0,0);
  }

  if(mouseY > centerY){
    console.log("Below centerY");
    fill(0,255,0);
  }

  if(mouseY == centerY){
    fill(0,0,255);
  }
  */

  if(mouseX > centerX){
    console.log("right");
    fill(255,0,0);
  }
  if(mouseX < centerX){
    console.log("left");
    fill(0,255,0);
  }
  if(mouseX == centerX){
    fill(0,0,255);
  }

}
