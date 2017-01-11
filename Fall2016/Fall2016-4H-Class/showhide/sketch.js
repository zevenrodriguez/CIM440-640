var showHide = true;

function setup() {

}

function draw() {
  background(255);
  //console.log(showHide);
  if (showHide == true) {
    console.log("in here");
    ellipse(width / 2, height / 2, 20, 20);
  }
}

function mousePressed() {
  showHide = false;
  //console.log(showHide);
}

function mouseReleased() {
  showHide = true;
  //console.log(showHide);
}