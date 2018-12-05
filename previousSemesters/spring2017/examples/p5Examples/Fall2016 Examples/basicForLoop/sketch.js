

function setup() {
  createCanvas(200, 200);

}

function draw() {

  background(255);
  for (var i = 0; i < width; i++) {
    ellipse(i, height / 2, 10, 10);

  }
}