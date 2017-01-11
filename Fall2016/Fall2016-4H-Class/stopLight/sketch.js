var counter = 0;
var fill0 = 0;
var fill1 = 0;
var fill2 = 0;

function setup() {
  createCanvas(500, 500);
  fill0 = color(0, 0, 0);
  fill1 = color(0, 0, 0);
  fill2 = color(0, 0, 0);


}

function draw() {
  background(255);
  console.log(counter);
  if (counter == 1) {
    //fill(255, 0, 0);
    fill0 = color(255, 0, 0);
    fill1 = color(0, 0, 0);
    fill2 = color(0, 0, 0);
  } else if (counter == 2) {
    //fill(0, 255, 0);
    fill0 = color(0, 0, 0);
    fill1 = color("yellow");
    fill2 = color(0, 0, 0);
  } else if (counter == 3) {
    //fill(0, 0, 255);
    fill0 = color(0, 0, 0);
    fill1 = color(0, 0, 0);
    fill2 = color(0, 255, 0);
  } else {
    counter = 0;
    //fill(255);
    fill0 = color(0, 0, 0);
    fill1 = color(0, 0, 0);
    fill2 = color(0, 0, 0);
  }
  fill(fill0);
  ellipse(width / 2, height / 2 - 100, 50, 50);
  fill(fill1);
  ellipse(width / 2, height / 2, 50, 50);
  fill(fill2);
  ellipse(width / 2, height / 2 + 100, 50, 50);


}

function mousePressed() {
  counter = counter + 1;
  console.log(counter);
}