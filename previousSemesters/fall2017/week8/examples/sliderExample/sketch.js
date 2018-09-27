var red, blue, green, white;

var backgroundColor;



function setup() {
    createCanvas(400, 400);

    var redText = createP('Red');
    red = createSlider(0, 255, 0);

    var greenText = createP('Green');
    green = createSlider(0, 255, 0);

    var blueText = createP('Blue');
    blue = createSlider(0, 255, 0);

}

function draw() {
    background(255);
    fill(red.value(), green.value(), blue.value());
    rect(0, 0, 399, 399);
}
