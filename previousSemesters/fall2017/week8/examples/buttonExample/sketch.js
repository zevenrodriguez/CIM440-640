var red, blue, green, white;

var backgroundColor;



function setup() {
    createCanvas(400, 400);

    backgroundColor = color(255, 255, 255);

    red = createButton('red');
    red.position(10, 420);
    red.mousePressed(redColor);

    green = createButton('green');
    green.position(100, 420);
    green.mousePressed(greenColor);

    blue = createButton('blue');
    blue.position(200, 420);
    blue.mousePressed(blueColor);

    white = createButton('white');
    white.position(300, 420);
    white.mousePressed(whiteColor);

}

function draw() {
    background(255);
    fill(backgroundColor);
    rect(0, 0, 399, 399);

}

function redColor() {
    backgroundColor = color(255, 0, 0);

}

function blueColor() {
    backgroundColor = color(0, 0, 255);

}

function greenColor() {
    backgroundColor = color(0, 255, 0);

}

function whiteColor() {
    backgroundColor = color(255, 255, 255);

}
