var counter = 0;

function setup() {
  noLoop();
}

function draw() {

  while (counter < width) {

    console.log("while loop:" + counter);
    ellipse(counter, height / 2, 10, 10);
    counter = counter + 1;

  }

  counter = 0;

  do {
    console.log(" do while loop:" + counter);

    ellipse(counter, 10, 10, 10);
    counter = counter + 1;
  } while (counter < width);

  counter = 0;

}