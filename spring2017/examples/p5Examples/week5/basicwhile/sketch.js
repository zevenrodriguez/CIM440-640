var ballCounter = 0;

function setup() {

}

function draw() {
  while (ballCounter < width) {
    ballCounter = ballCounter + 1;
    console.log(ballCounter);
    ellipse(ballCounter, width / 2, 10, 10);

  }
}
