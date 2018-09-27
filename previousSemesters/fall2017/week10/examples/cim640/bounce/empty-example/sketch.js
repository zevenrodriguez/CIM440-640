var posX = 250;
var posY = 0;

var upDown = false;

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(255);
    ellipse(posX, posY, 50, 50);
    console.log(posY);

    if (posY <= 0) {
        upDown = false;
    }

    if (posY >= height) {
        //posY = 0;
        //posY--;
        upDown = true;
    }

    if (upDown == true) {
        //posY--;
        posY = posY - 5;
    }

    if (upDown == false) {
        //posY++;
        posY = posY + 5;
    }

}
