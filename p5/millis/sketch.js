var interval = 50;
var prevMillis = 0;

var posX = 0;
var posY = 0;


function setup() {
    createCanvas(400, 400);
    background(255);

    posX = random(width);
    posY = random(height);

}


function draw() {
    noFill();
    rect(200,200,100,100);
    if (millis() - prevMillis >= interval) {
        posX = random(width);
        posY = random(height);
        prevMillis = millis();
    }

    if (posX > 200 && posX < 300 && posY > 200 && posY < 300) {

    } else {
        fill(0);
        ellipse(posX, posY, 20, 20);

    }
}
