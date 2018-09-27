var posX = 0;
var posY = 0;
var directionY = false;
var directionX = false;

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
    background(255);

    if (startBounce == true) {

        ellipse(posX, posY, 50, 50);

        if (directionY == false) {
            posY++;
        } else {
            posY--;
        }

        if(directionX == false){
        //  posX++;
        posX+=5
        }else{
          // posX--;
          posX-=5
        }

        if(posX >= width){
          directionX = true;
        }

        if(posX <= 0){
          directionX = false;
        }



        if (posY >= height) {
            directionY = true;
        }

        if (posY <= 0) {
            directionY = false;
        }
    }


}
