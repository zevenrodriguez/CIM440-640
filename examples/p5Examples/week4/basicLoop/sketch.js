var i = 0;

function setup() {
  createCanvas(200, 200);
  frameRate(60);

}

function draw() {

  background(255);

  ellipse(i, height / 2, 10, 10);

  if (i > width) {
    i = 0;
  }

  i = i + 1;

}
