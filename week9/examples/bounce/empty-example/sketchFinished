var posX = 0;
var posY = 0;
var directionY = false;

var startButton;
var startBounce = false;


function setup() {

    createCanvas(500, 500);

    startButton = createButton("start");
    startButton.position(0, 500);
    startButton.mousePressed(function () {
        posY = 0;
        if (startBounce == false) {
            startBounce = true;
        }else{
            startBounce = false;
        }
    });

}

function draw() {
    frameRate(60);
    background(255);

    if (startBounce == true) {

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
            directionY = false;
        }
    }


}
