var posX = 0;
var posY = 0;

var directionY = true;

function setup() {

    createCanvas(500, 500);
    posY = height;


}

function draw() {
    background(255);


        ellipse(width / 2, posY, 50, 50);

        if (directionY == false) {
            posY++;
        } else {
            posY--;
        }

        if (posY >= height) {
            directionY = true;
        }

        if (posY <= 0) {
            directionY = height;
        }



}
