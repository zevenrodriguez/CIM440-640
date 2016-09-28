var fillColor = 0;

function setup() {
  
}

function draw() {
  fill(fillColor);
  ellipse(width/2, height/2, 50,50);
}

function mousePressed(){
  fillColor = 100;
}

function mouseReleased(){
  fillColor = 200;
}