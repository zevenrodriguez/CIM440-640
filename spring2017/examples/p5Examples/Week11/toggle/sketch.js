var showHide = false;

function setup() {

}

function draw() {
  background(255);
  if (showHide == true) {
    rect(width / 2, height / 2, 25, 25);
  }
}

function mousePressed() {
  console.log(showHide);
  if (showHide == true) {
    showHide = false;
  }else{
    showHide = true;
  }
}