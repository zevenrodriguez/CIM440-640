var section1 = 100;
var section2 = 200;
var section3 = 300;

var currentSection = 0;

var fillColor;

function setup() {
    createCanvas(400, 400);
    fillColor = color(255,255,255);
}

function draw() {


    background(255);
    fill(fillColor);
    rect(0, 0, 399, 399);
    line(section1, 0, section1, height);
    line(section2, 0, section2, height);
    line(section3, 0, section3, height);



    if (mouseX > 0 && mouseX <= section1) {
        //console.log("In Section1")
        currentSection = 1;
    } else if (mouseX > section1 && mouseX <= section2) {
        currentSection = 2;

    } else if (mouseX > section2 && mouseX <= section3) {
        currentSection = 3;

    } else if (mouseX > section3 && mouseX <= width) {
        currentSection = 4;

    }

    console.log(currentSection);
}

function mousePressed() {
    if (currentSection == 1) {
        fillColor = color(255, 0, 0)
    } else if (currentSection == 2) {
        fillColor = color(0, 255, 0)

    } else if (currentSection == 3) {
        fillColor = color(0, 0, 255)

    } else if (currentSection == 4) {
        fillColor = color(100, 100, 10)

    }
}
