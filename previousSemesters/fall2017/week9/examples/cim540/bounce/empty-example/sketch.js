var posX = 250;
var posY = 0;

var upDown = true;

var startButton;
var startBounce = false;

function setup() {
    createCanvas(500, 500);

    startButton = createButton("start/stop");
    startButton.position(0, 500);
    startButton.mousePressed(function () {
        posY = 0;
        if (startBounce == false) {
            startBounce = true;
        } else {
            startBounce = false;
        }


    });

}


function draw() {
    background(255);
    ellipse(posX, posY, 50, 50);

    if (startBounce == true) {
        if (posY <= 0) {
            upDown = true;
        }
        if (posY >= height) {
            //posY = 0
            upDown = false;
        }

        if (upDown == false) {
            posY--;
        }
        if (upDown == true) {
            posY++;
        }

    }

}
