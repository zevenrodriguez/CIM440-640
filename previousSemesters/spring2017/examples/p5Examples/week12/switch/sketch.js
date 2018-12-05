var counter = 0;

function setup() {

}

function draw() {
  switch (counter) {
    case 0:
      fill(0);
      break;
    case 1:
      fill(255, 0, 0);
      break;
    case 2:
      fill(0, 255, 0);
      break;
    case 3:
      fill(0, 0, 255);
      break;
    default:
      fill(255);
      break;
  }
  rectMode(CENTER);
  rect(0, 0, width, height);
}

function mousePressed() {
  counter++;
  if (counter == 4) {
    counter = 0;
  }
}
