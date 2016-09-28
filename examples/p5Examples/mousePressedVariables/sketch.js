var backColor = 0;
function setup() {
  
}

function draw() {
   background(backColor);
}

function mousePressed(){
  backColor = 0;
}
function mouseReleased(){
  backColor = 200;
}