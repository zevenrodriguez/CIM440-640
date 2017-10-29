var box1X = 50;
var box1Y = 50;

var box2X = 250;
var box2Y = 250;

var boxSize = 50;

var box1Selected = false;
var box2Selected = false;

var goal1X = 200;
var goal1Y = 200;

var goal1Size = 100;

var box1Dist = 0;
var box2Dist = 0;


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    rectMode(CENTER);

    fill(255);

    rect(width / 2, height / 2, width - 1, height - 1);

    fill(0);
    rect(goal1X, goal1Y, goal1Size, goal1Size);

    fill(255);
    rect(box1X, box1Y, boxSize, boxSize);
    rect(box2X, box2Y, boxSize, boxSize);



    if (box1Selected == true) {
        box1X = mouseX;
        box1Y = mouseY;
    } else {

        var box1goal1Dist = int(dist(box1X, box1Y, goal1X, goal1Y));
        if (box1goal1Dist < 50) {
            console.log("box1 in");
        }
    }




    if (box2Selected == true) {
        box2X = mouseX;
        box2Y = mouseY;
    } else {

        var box2goal1Dist = int(dist(box2X, box2Y, goal1X, goal1Y));
        if (box2goal1Dist < 50) {
            console.log("box2 in");
        }
    }

    box1Dist = int(dist(mouseX, mouseY, box1X, box1Y));
    box2Dist = int(dist(mouseX, mouseY, box2X, box2Y));

}

function mousePressed() {
    if (box1Dist < boxSize) {
        console.log("overBox1");
        if (box1Selected == false) {
            box1Selected = true;
        } else {
            box1Selected = false;
        }
    }

    if (box2Dist < boxSize) {
        console.log("overBox2");
        if (box2Selected == false) {
            box2Selected = true;
        } else {
            box2Selected = false;
        }
    }

}
