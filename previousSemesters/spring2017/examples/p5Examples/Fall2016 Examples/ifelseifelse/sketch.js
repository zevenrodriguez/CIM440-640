var backgroundCounter = 0;

function setup() {

}

function draw() {
  if (backgroundCounter == 0) {
    background(255, 0, 0);
  } else if (backgroundCounter == 1) {
    background(0, 255, 0);
  } else if (backgroundCounter == 2) {
    background(0, 0, 255);
  } else {
    backgroundCounter = 0;
  }
}

function mouseReleased() {
 backgroundCounter = backgroundCounter + 1;
}