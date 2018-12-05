var message = "hello";

function setup() {
}

function draw() {
  background(255);
  //fill(0);
  textSize(32);

  text(message, 10, 10, 100, 100);
}

function mousePressed(){
  message = "goodbye";
}
function mouseReleased(){
  message = "";
}