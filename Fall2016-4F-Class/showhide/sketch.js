var showhide = false;

function setup() {}

function draw() {
  background(255);
  console.log(showhide);
  if(showhide == true){
  ellipse(width / 2, height / 2, 50, 50);
  }
}

function mousePressed(){
  showhide = true;
}

function mouseReleased(){
  showhide = false;
  console.log("mouseReleased");
}