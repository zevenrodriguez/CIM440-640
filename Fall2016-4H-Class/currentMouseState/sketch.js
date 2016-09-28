var showHide = true;
var mouseState = false;

function setup() {

}

function draw() {
  background(255);
  //console.log(mouseIsPressed);
  mouseState = mouseIsPressed;
  //console.log(showHide);
  if (mouseState == true) {
    //console.log("in here");
    ellipse(width / 2, height / 2, 20, 20);
  }
}

// function mousePressed() {
//   showHide = false;
//   //console.log(showHide);
// }

// function mouseReleased() {
//   showHide = true;
//   //console.log(showHide);
// }