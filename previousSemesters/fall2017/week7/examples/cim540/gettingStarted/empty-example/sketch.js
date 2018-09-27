var bgColor = "green";
var fSize = 200;

var posX = 0;
var posY = 0;


function setup() {
    createCanvas(1000, 500);

    background(125);
    background(255, 0, 0);
    background("#333333");
    background("cyan");

    background(bgColor);

    posX = width / 2;
    posY = 100;


}

function draw() {
    strokeWeight(0);
    //Face
    fill("pink");
    ellipse(posX, posY, fSize, fSize);

    //mouth
    fill("red");
    rect(posX - 50, posY + 50, 100, 20);

    //eyes
    fill(255);
    ellipse(posX - 50, posY - 20, 20, 40);
    ellipse(posX + 50, posY - 20, 20, 40);
    //pupils
    fill(0);
    ellipse(posX - 50, posY - 10, 20, 20);
    ellipse(posX + 50, posY - 10, 20, 20);
    //mouthline
    stroke(125,0,0);
    strokeWeight(3);
    line(posX - 50, posY + 60, posX + 50, posY + 60);
    //mole
    strokeWeight(10);
    point(posX + 20, posY + 10);

    arc(50, 55, 50, 50, 0, HALF_PI);
    arc(50, 55, 50, 50, 0, TWO_PI);

}
