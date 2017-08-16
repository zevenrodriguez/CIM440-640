var centerX = 0;
var centerY = 0;

var scaling = 3;

function setup() {
    createCanvas(400, 400);
    centerX = width / 2;
    centerY = height / 2;

    for(var i = 0; i< 10; i++){
    stamp(random(width),random(height), random(0.0,2.0));
    }
}

function draw() {
    //background(color('hsb(100, 10%, 100%)'));

    //    push();
    //    fill(255)
    //    strokeWeight(1);
    //    translate(mouseX-(scaling * centerX), mouseY-(scaling * centerY));
    //    scale(scaling);
    //
    //    //face
    //    ellipse(centerX, centerY, 100, 100);
    //    //nose
    //    ellipse(centerX, centerY + 10, 20, 20);
    //    //eyse
    //    ellipse(centerX - 10, centerY - 10, 10, 20);
    //    ellipse(centerX + 10, centerY - 10, 10, 20);
    //    rectMode(CENTER);
    //    rect(centerX, centerY + 30, 50, 15, 5);
    //    rect(centerX, centerY + 30, 50, 1, 1);
    //
    //    noFill();
    //    strokeWeight(4);
    //    arc(centerX, centerY, 100, 100, 0, PI)
    //    strokeWeight(30);
    //    arc(centerX, centerY, 100, 100, PI, TWO_PI)
    //
    //    pop();


}

function stamp(posX, posY, scales) {

    push();
    fill(255)
    strokeWeight(1);


    translate(posX - (scales * centerX), posY - (scales * centerY));
    scale(scales);

    //face
    ellipse(centerX, centerY, 100, 100);
    //nose
    ellipse(centerX, centerY + 10, 20, 20);
    //eyse
    ellipse(centerX - 10, centerY - 10, 10, 20);
    ellipse(centerX + 10, centerY - 10, 10, 20);
    rectMode(CENTER);
    rect(centerX, centerY + 30, 50, 15, 5);
    rect(centerX, centerY + 30, 50, 1, 1);

    noFill();
    strokeWeight(4);
    arc(centerX, centerY, 100, 100, 0, PI)
    strokeWeight(30);
    arc(centerX, centerY, 100, 100, PI, TWO_PI)

    pop();

}
